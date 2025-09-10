import { useState, useEffect } from "react";
import { authService } from "../pages/Servicos/auth";

export const useAuth = () => {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const loggedUser = authService.getCurrentUser();
    if (loggedUser) setUser(loggedUser);

    // Atualizar em tempo real quando mudar login/logout
    const handleStorageChange = () => {
      setUser(authService.getCurrentUser());
    };

    window.addEventListener("storage", handleStorageChange);
    return () => window.removeEventListener("storage", handleStorageChange);
  }, []);

  const login = (email, password) => {
    const result = authService.login(email, password);
    if (result.success) setUser(result.user);
    return result;
  };

  const register = (name, email, password, confirmPassword) => {
    const result = authService.register(name, email, password, confirmPassword);
    return result;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return { user, login, register, logout };
};
