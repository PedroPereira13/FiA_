import { 
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut,
  onAuthStateChanged,
  updateProfile,
  sendPasswordResetEmail
} from 'firebase/auth';
import { auth } from './firebaseConfig';


const isFirebaseAuthAvailable = () => {
  return auth && typeof auth !== 'undefined';
};

export const authService = {
  isLoggedIn: () => {
    return new Promise((resolve) => {
      if (!isFirebaseAuthAvailable()) {
        console.error('Firebase Auth não está disponível');
        resolve(false);
        return;
      }

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        resolve(!!user); 
      }, (error) => {
        console.error('Erro ao verificar estado de autenticação:', error);
        resolve(false);
      });
    });
  },


  login: async (email, password) => {
    try {
      if (!isFirebaseAuthAvailable()) {
        return { success: false, error: 'Serviço de autenticação não disponível.' };
      }

      if (!email || !password) {
        return { success: false, error: 'E-mail e senha são obrigatórios.' };
      }

      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;


      const userData = {
        uid: user.uid,
        name: user.displayName || 'Usuário',
        email: user.email,
        initials: (user.displayName || 'U').split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
      };

      localStorage.setItem('finai_user_data', JSON.stringify(userData));

      return { 
        success: true, 
        user: userData 
      };
    } catch (error) {
      console.error('Erro no login:', error);
      
      let errorMessage = 'Erro ao fazer login. Tente novamente.';
      
      switch (error.code) {
        case 'auth/invalid-email':
          errorMessage = 'E-mail inválido.';
          break;
        case 'auth/user-disabled':
          errorMessage = 'Esta conta foi desativada.';
          break;
        case 'auth/user-not-found':
          errorMessage = 'E-mail não cadastrado.';
          break;
        case 'auth/wrong-password':
          errorMessage = 'Senha incorreta.';
          break;
        case 'auth/too-many-requests':
          errorMessage = 'Muitas tentativas. Tente novamente mais tarde.';
          break;
        case 'auth/configuration-not-found':
          errorMessage = 'Serviço de autenticação não configurado. Tente novamente mais tarde.';
          break;
        default:
          errorMessage = error.message;
      }
      
      return { success: false, error: errorMessage };
    }
  },


  register: async (name, email, password, confirmPassword) => {
    try {
      if (!isFirebaseAuthAvailable()) {
        return { success: false, error: 'Serviço de autenticação não disponível.' };
      }

      if (!name || !email || !password || !confirmPassword) {
        return { success: false, error: 'Todos os campos são obrigatórios.' };
      }

      if (password !== confirmPassword) {
        return { success: false, error: 'As senhas não coincidem.' };
      }

      if (password.length < 6) {
        return { success: false, error: 'A senha deve ter pelo menos 6 caracteres.' };
      }

      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;

      await updateProfile(user, {
        displayName: name
      });


      const userData = {
        uid: user.uid,
        name: name,
        email: user.email,
        initials: name.split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
      };

      return { 
        success: true, 
        message: 'Conta criada com sucesso!',
        user: userData
      };
    } catch (error) {
      console.error('Erro no registro:', error);
      
      let errorMessage = 'Erro ao criar conta. Tente novamente.';
      
      switch (error.code) {
        case 'auth/email-already-in-use':
          errorMessage = 'Este e-mail já está em uso.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'E-mail inválido.';
          break;
        case 'auth/operation-not-allowed':
          errorMessage = 'Operação não permitida.';
          break;
        case 'auth/weak-password':
          errorMessage = 'Senha muito fraca. Use pelo menos 6 caracteres.';
          break;
        case 'auth/configuration-not-found':
          errorMessage = 'Serviço de autenticação não configurado. Tente novamente mais tarde.';
          break;
        default:
          errorMessage = error.message;
      }
      
      return { success: false, error: errorMessage };
    }
  },

  logout: async () => {
    try {
      if (!isFirebaseAuthAvailable()) {
        throw new Error('Serviço de autenticação não disponível.');
      }

      await signOut(auth);
      localStorage.removeItem('finai_user_data');
    } catch (error) {
      console.error('Erro no logout:', error);
      throw error;
    }
  },

  
  getCurrentUser: () => {
    return new Promise((resolve) => {
      if (!isFirebaseAuthAvailable()) {
       
        const storedUser = localStorage.getItem('finai_user_data');
        resolve(storedUser ? JSON.parse(storedUser) : null);
        return;
      }

      const unsubscribe = onAuthStateChanged(auth, (user) => {
        unsubscribe();
        
        if (user) {
          const userData = {
            uid: user.uid,
            name: user.displayName || 'Usuário',
            email: user.email,
            initials: (user.displayName || 'U').split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
          };
          resolve(userData);
        } else {
         
          const storedUser = localStorage.getItem('finai_user_data');
          resolve(storedUser ? JSON.parse(storedUser) : null);
        }
      }, (error) => {
        console.error('Erro ao obter usuário atual:', error);
        const storedUser = localStorage.getItem('finai_user_data');
        resolve(storedUser ? JSON.parse(storedUser) : null);
      });
    });
  },


  resetPassword: async (email) => {
    try {
      if (!isFirebaseAuthAvailable()) {
        return { success: false, error: 'Serviço de autenticação não disponível.' };
      }

      if (!email) {
        return { success: false, error: 'E-mail é obrigatório.' };
      }

      await sendPasswordResetEmail(auth, email);
      return { 
        success: true, 
        message: 'E-mail de redefinição de senha enviado!' 
      };
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      
      let errorMessage = 'Erro ao enviar email de redefinição.';
      
      switch (error.code) {
        case 'auth/user-not-found':
          errorMessage = 'E-mail não cadastrado.';
          break;
        case 'auth/invalid-email':
          errorMessage = 'E-mail inválido.';
          break;
        case 'auth/configuration-not-found':
          errorMessage = 'Serviço de autenticação não configurado. Tente novamente mais tarde.';
          break;
        default:
          errorMessage = error.message;
      }
      
      return { success: false, error: errorMessage };
    }
  },

  onAuthStateChange: (callback) => {
    if (!isFirebaseAuthAvailable()) {
      console.warn('Firebase Auth não disponível para observer');
      return () => {};
    }
    
    return onAuthStateChanged(auth, callback, (error) => {
      console.error('Erro no auth state observer:', error);
    });
  }
};
