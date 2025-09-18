import { useState, useRef, useEffect } from 'react'; 
import './Servicos.css';
import { authService } from './auth';
import { chatService } from './chatService';

const Servicos = () => {
  const [messages, setMessages] = useState([
    { 
      id: Date.now(),
      text: "Olá! Sou o assistente virtual da FinAI. Como posso ajudá-lo com suas finanças hoje?", 
      sender: "bot" 
    }
  ]);
  const [inputText, setInputText] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(true);
  const [user, setUser] = useState(null);

  const [loginEmail, setLoginEmail] = useState("");
  const [loginPassword, setLoginPassword] = useState("");
  const [registerName, setRegisterName] = useState("");
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerConfirmPassword, setRegisterConfirmPassword] = useState("");

  const mensagensRef = useRef(null);

  useEffect(() => {
    const loggedIn = authService.isLoggedIn();
    setIsLoggedIn(loggedIn);
    if (loggedIn) setUser(authService.getCurrentUser());
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    setTimeout(() => {
      if (mensagensRef.current) {
        mensagensRef.current.scrollTop = mensagensRef.current.scrollHeight;
      }
    }, 100);
  }, [messages, isTyping]);

  const getAIResponse = async (userMessage) => {
    setIsTyping(true);
    let aiText = "";
    try {
      aiText = await chatService.getAIResponse(userMessage);

      let displayedText = "";
      for (let i = 0; i < aiText.length; i++) {
        displayedText += aiText[i];
        setMessages(prev => {
          const copy = [...prev];
          const botIndex = copy.findIndex(m => m.sender === 'bot' && m.isTemp);
          if (botIndex >= 0) {
            copy[botIndex].text = displayedText;
          } else {
            copy.push({ id: Date.now() + i, text: displayedText, sender: 'bot', isTemp: true });
          }
          return copy;
        });
        await new Promise(resolve => setTimeout(resolve, 25));
      }

      setMessages(prev => prev.map(m => m.isTemp ? { ...m, isTemp: false } : m));
    } catch (error) {
      console.error("Erro na IA:", error);
      setMessages(prev => [...prev, { id: Date.now(), text: "Desculpe, estou com problemas técnicos. Tente novamente mais tarde.", sender: "bot" }]);
    } finally {
      setIsTyping(false);
    }
  };

  const handleSendMessage = async () => {
    if (inputText.trim() === "") return;

    const userMessage = { id: Date.now(), text: inputText.trim(), sender: "user" };
    setMessages(prev => [...prev, userMessage]);
    const messageToSend = inputText.trim();
    setInputText("");

    await getAIResponse(messageToSend);
  };

  const handleKeyDown = (e) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const handleLogin = () => {
    if (!loginEmail || !loginPassword) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    const result = authService.login(loginEmail, loginPassword);

    if (result.success) {
      setIsLoggedIn(true);
      setUser(result.user);
      setLoginEmail("");
      setLoginPassword("");
    } else {
      alert(result.error);
    }
  };

  const handleRegister = () => {
    if (!registerName || !registerEmail || !registerPassword || !registerConfirmPassword) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    if (registerPassword !== registerConfirmPassword) {
      alert('As senhas não coincidem.');
      return;
    }

    const result = authService.register(
      registerName, 
      registerEmail, 
      registerPassword, 
      registerConfirmPassword
    );

    if (result.success) {
      alert('Conta criada com sucesso! Faça login para continuar.');
      setShowLogin(true);
      setRegisterName("");
      setRegisterEmail("");
      setRegisterPassword("");
      setRegisterConfirmPassword("");
    } else {
      alert(result.error);
    }
  };

  const handleLogout = () => {
    authService.logout();
    setIsLoggedIn(false);
    setUser(null);
    setMessages([{ 
      id: Date.now(),
      text: "Olá! Sou o assistente virtual da FinAI. Como posso ajudá-lo com suas finanças hoje?", 
      sender: "bot" 
    }]);
  };

  return (
    <div className="telaChat">
      <h2>Assistente Financeiro Pessoal</h2>

      {!isLoggedIn && (
        <div className="caixaLogin">
          <div className={`formLogin ${showLogin ? '' : 'escondido'}`}>
            <h2>Faça login para continuar</h2>
            <div className="linhaForm">
              <label htmlFor="loginEmail">E-mail</label>
              <input type="email" id="loginEmail" value={loginEmail} onChange={e => setLoginEmail(e.target.value)} placeholder="Seu e-mail" />
            </div>
            <div className="linhaForm">
              <label htmlFor="loginPassword">Senha</label>
              <input type="password" id="loginPassword" value={loginPassword} onChange={e => setLoginPassword(e.target.value)} placeholder="Sua senha" />
            </div>
            <button className="botaoLogin" onClick={handleLogin}>Entrar</button>
            <div className="trocarForm">
              Não tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); setShowLogin(false); }}>Cadastre-se</a>
            </div>
          </div>

          <div className={`formLogin ${showLogin ? 'escondido' : ''}`}>
            <h2>Criar uma conta</h2>
            <div className="linhaForm">
              <label htmlFor="registerName">Nome completo</label>
              <input type="text" id="registerName" value={registerName} onChange={e => setRegisterName(e.target.value)} placeholder="Seu nome completo" />
            </div>
            <div className="linhaForm">
              <label htmlFor="registerEmail">E-mail</label>
              <input type="email" id="registerEmail" value={registerEmail} onChange={e => setRegisterEmail(e.target.value)} placeholder="Seu e-mail" />
            </div>
            <div className="linhaForm">
              <label htmlFor="registerPassword">Senha</label>
              <input type="password" id="registerPassword" value={registerPassword} onChange={e => setRegisterPassword(e.target.value)} placeholder="Crie uma senha" />
            </div>
            <div className="linhaForm">
              <label htmlFor="registerConfirmPassword">Confirmar senha</label>
              <input type="password" id="registerConfirmPassword" value={registerConfirmPassword} onChange={e => setRegisterConfirmPassword(e.target.value)} placeholder="Confirme sua senha" />
            </div>
            <button className="botaoLogin" onClick={handleRegister}>Criar conta</button>
            <div className="trocarForm">
              Já tem uma conta? <a href="#" onClick={(e) => { e.preventDefault(); setShowLogin(true); }}>Faça login</a>
            </div>
          </div>
        </div>
      )}

      {isLoggedIn && (
        <>
          <div className="caixaChat">
            <div className="topoChat">
              <div className="iconeChat">AI</div>
              <div>
                <h3>Assistente FinAI</h3>
                <p>Online - Pronto para ajudar</p>
              </div>
            </div>

            <div className="mensagensChat" ref={mensagensRef}>
              {messages.map((message) => (
                <div key={message.id} className={`msg ${message.sender === 'user' ? 'msgUser' : 'msgBot'}`}>
                  <div className="textoMsg">{message.text}</div>
                </div>
              ))}
              {isTyping && (
                <div className="msg msgBot">
                  <div className="textoMsg">
                    <div className="digitando">
                      <span></span><span></span><span></span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            <div className="entradaChat">
              <input
                type="text"
                value={inputText}
                onChange={e => setInputText(e.target.value)}
                onKeyDown={handleKeyDown}
                placeholder="Digite sua pergunta sobre finanças..."
              />
              <button onClick={handleSendMessage} disabled={!inputText.trim()}>Enviar</button>
            </div>
          </div>

          <p className="aviso">
            Nosso assistente virtual utiliza IA para oferecer conselhos financeiros gerais. 
            Para orientação personalizada, consulte nosso time de especialistas.
          </p>
        </>
      )}
    </div>
  );
};

export { Servicos };
