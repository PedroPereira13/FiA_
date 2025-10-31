import { useState, useEffect } from "react";
import { authService } from "../services/auth";

export const useAuth = () => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        setLoading(true);
        const isLoggedIn = await authService.isLoggedIn();
        
        if (isLoggedIn) {
          const userData = await authService.getCurrentUser();
          setUser(userData);
        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();

    const unsubscribe = authService.onAuthStateChange((firebaseUser) => {
      if (firebaseUser && firebaseUser.emailVerified) {
        const userData = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || 'Usuário',
          email: firebaseUser.email,
          emailVerified: firebaseUser.emailVerified,
          initials: (firebaseUser.displayName || 'U').split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
        };
        setUser(userData);
      } else {
        setUser(null);
      }
      setLoading(false);
    });

   
    return () => unsubscribe();
  }, []);

  const login = async (email, password) => {
    try {
      setLoading(true);
      const result = await authService.login(email, password);
      
      if (result.success) {
        setUser(result.user);
      }
      
      return result;
    } catch (error) {
      console.error('Erro no login:', error);
      return { success: false, error: 'Erro durante o login' };
    } finally {
      setLoading(false);
    }
  };

  const register = async (name, email, password, confirmPassword) => {
    try {
      setLoading(true);
      const result = await authService.register(name, email, password, confirmPassword);
      return result;
    } catch (error) {
      console.error('Erro no registro:', error);
      return { success: false, error: 'Erro durante o registro' };
    } finally {
      setLoading(false);
    }
  };

  const logout = async () => {
    try {
      setLoading(true);
      await authService.logout();
      setUser(null);
    } catch (error) {
      console.error('Erro no logout:', error);
      throw error;
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async (email) => {
    try {
      setLoading(true);
      const result = await authService.resetPassword(email);
      return result;
    } catch (error) {
      console.error('Erro ao redefinir senha:', error);
      return { success: false, error: 'Erro ao redefinir senha' };
    } finally {
      setLoading(false);
    }
  };

  const sendVerificationEmail = async () => {
    try {
      const result = await authService.sendVerificationEmail();
      return result;
    } catch (error) {
      console.error('Erro ao enviar email de verificação:', error);
      return { success: false, error: 'Erro ao enviar email de verificação' };
    }
  };

  return { 
    user, 
    loading,
    login, 
    register, 
    logout, 
    resetPassword,
    sendVerificationEmail
  };
};