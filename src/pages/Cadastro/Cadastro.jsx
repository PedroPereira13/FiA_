import { useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { authService } from '../../services/auth';
import './Cadastro.css';

const Cadastro = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || '/'; // última página

  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleRegister = async () => {
    if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (registerPassword !== registerConfirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    setIsLoading(true);
    const result = await authService.register(registerName, registerEmail, registerPassword, registerConfirmPassword);
    setIsLoading(false);

    if (result.success) {
      alert('Conta criada com sucesso!');
      setRegisterName("");
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterConfirmPassword("");

      // Redireciona para a última página
      navigate(from, { replace: true });
    } else {
      alert(result.error);
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') handleRegister();
  };

  return (
    <div className="formLogin cadastro-container">
      <h2>Criar uma conta</h2>
      <div className="linhaForm">
        <label htmlFor="registerName">Nome completo</label>
        <input
          type="text"
          id="registerName"
          value={registerName}
          onChange={e => setRegisterName(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Seu nome completo"
          disabled={isLoading}
        />
      </div>

      <div className="linhaForm">
        <label htmlFor="registerEmail">E-mail</label>
        <input
          type="email"
          id="registerEmail"
          value={registerEmail}
          onChange={e => setRegisterEmail(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Seu e-mail"
          disabled={isLoading}
        />
      </div>

      <div className="linhaForm">
        <label htmlFor="registerPassword">Senha</label>
        <input
          type="password"
          id="registerPassword"
          value={registerPassword}
          onChange={e => setRegisterPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Crie uma senha"
          disabled={isLoading}
        />
        <div className="senha-info">Mínimo 6 caracteres</div>
      </div>

      <div className="linhaForm">
        <label htmlFor="registerConfirmPassword">Confirmar senha</label>
        <input
          type="password"
          id="registerConfirmPassword"
          value={registerConfirmPassword}
          onChange={e => setRegisterConfirmPassword(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Confirme sua senha"
          disabled={isLoading}
        />
      </div>

      <button
        className="botaoLogin"
        onClick={handleRegister}
        disabled={isLoading}
      >
        {isLoading ? 'Criando conta...' : 'Criar conta'}
      </button>

      <div className="trocarForm">
        Já tem uma conta? 
        <a href="#" onClick={(e) => { 
            e.preventDefault(); 
            navigate('/login', { state: { from } }); // passa a última página
        }}>
          Faça login
        </a>
      </div>
    </div>
  );
};

export { Cadastro };
