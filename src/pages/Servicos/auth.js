export const authService = {
 
  isLoggedIn: () => {
    const user = localStorage.getItem('finai_logged_user');
    return user !== null;
  },

  
  login: (email, password) => {
    const users = JSON.parse(localStorage.getItem('finai_users') || '[]');
    const user = users.find(u => u.email === email && u.password === password);
    
    if (user) {
      localStorage.setItem('finai_logged_user', JSON.stringify(user));
      return { success: true, user };
    } else {
      return { success: false, error: 'E-mail ou senha incorretos.' };
    }
  },

  
  register: (name, email, password, confirmPassword) => {
    if (password !== confirmPassword) {
      return { success: false, error: 'As senhas não coincidem.' };
    }

    const users = JSON.parse(localStorage.getItem('finai_users') || '[]');
    if (users.some(u => u.email === email)) {
      return { success: false, error: 'Este e-mail já está cadastrado.' };
    }

    const newUser = {
      name: name,
      email: email,
      password: password,
      initials: name.split(' ').map(n => n[0]).join('').toUpperCase()
    };

    users.push(newUser);
    localStorage.setItem('finai_users', JSON.stringify(users));
    
    return { success: true };
  },

  
  logout: () => {
    localStorage.removeItem('finai_logged_user');
  },

  
  getCurrentUser: () => {
    const user = localStorage.getItem('finai_logged_user');
    return user ? JSON.parse(user) : null;
  }
};