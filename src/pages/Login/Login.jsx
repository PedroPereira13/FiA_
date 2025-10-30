import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/auth';
import './Login.css';

const Login = ({ onLoginSuccess, onClose }) => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; // página anterior ou home

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [isResettingPassword, setIsResettingPassword] = useState(false);
  const [resetEmail, setResetEmail] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    if (!loginEmail || !loginPassword) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    setIsLoading(true);
    const result = await authService.login(loginEmail, loginPassword);
    setIsLoading(false);

    if (result.success) {
      onLoginSuccess(result.user);
      setLoginEmail("");
      setLoginPassword("");

      // Fecha o login/modal
      if (onClose) onClose();

      // Redireciona para a última página
      navigate(from, { replace: true });
    } else {
      alert(result.error);
    }
  };

  const handleResetPassword = async () => {
    if (!resetEmail) {
      alert('Por favor, digite seu e-mail.');
      return;
    }

    setIsLoading(true);
    const result = await authService.resetPassword(resetEmail);
    setIsLoading(false);

    if (result.success) {
      alert(result.message);
      setIsResettingPassword(false);
      setResetEmail('');
    } else {
      alert(result.error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      isResettingPassword ? handleResetPassword() : handleLogin();
    }
  };

  if (isResettingPassword) {
    return (
      <div className="formLogin">
        <h2>Redefinir Senha</h2>
        <div className="linhaForm">
          <label htmlFor="resetEmail">E-mail</label>
          <input
            type="email"
            id="resetEmail"
            value={resetEmail}
            onChange={e => setResetEmail(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Digite seu e-mail"
            disabled={isLoading}
          />
        </div>

        <button
          className="botaoLogin"
          onClick={handleResetPassword}
          disabled={isLoading}
        >
          {isLoading ? 'Enviando...' : 'Enviar Link de Redefinição'}
        </button>

        <button
          className="botaoSecundario"
          onClick={() => { setIsResettingPassword(false); setResetEmail(''); }}
          disabled={isLoading}
        >
          Voltar ao Login
        </button>
      </div>
    );
  }

  return (
    <div className="formLogin">
      <h2>Faça login para continuar</h2>
      <div className="linhaForm">
        <label htmlFor="loginEmail">E-mail</label>
        <input
          type="email"
          id="loginEmail"
          value={loginEmail}
          onChange={e => setLoginEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Seu e-mail"
          disabled={isLoading}
        />
      </div>

      <div className="linhaForm">
        <label htmlFor="loginPassword">Senha</label>
        <input
          type="password"
          id="loginPassword"
          value={loginPassword}
          onChange={e => setLoginPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Sua senha"
          disabled={isLoading}
        />
      </div>

      <button
        className="botaoLogin"
        onClick={handleLogin}
        disabled={isLoading}
      >
        {isLoading ? 'Entrando...' : 'Entrar'}
      </button>

      <div className="trocarForm">
        Não tem uma conta? 
        <a href="#" onClick={(e) => { 
            e.preventDefault(); 
            navigate('/cadastro', { state: { from } }); // passa a última página
        }}>
          Cadastre-se
        </a>
      </div>

      <div className="esqueci-senha">
        <a href="#" onClick={(e) => { e.preventDefault(); setIsResettingPassword(true); }}>
          Esqueci minha senha
        </a>
      </div>
    </div>
  );
};

export { Login };
