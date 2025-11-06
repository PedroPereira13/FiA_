import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './Servicos.css';

import { authService } from '../../services/auth';
import { chatService } from '../../services/chatService';

const Servicos = () => {
  const navigate = useNavigate();
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
  const [user, setUser] = useState(null);
  const [isLoading, setIsLoading] = useState(true);

  const mensagensRef = useRef(null);

  useEffect(() => {
    const checkAuthStatus = async () => {
      try {
        setIsLoading(true);
        const loggedIn = await authService.isLoggedIn();
        setIsLoggedIn(loggedIn);

        if (loggedIn) {
          const userData = await authService.getCurrentUser();
          setUser(userData);
        }
      } catch (error) {
        console.error('Erro ao verificar autenticação:', error);
        setIsLoggedIn(false);
      } finally {
        setIsLoading(false);
      }
    };

    checkAuthStatus();

    const unsubscribe = authService.onAuthStateChange((firebaseUser) => {
      if (firebaseUser) {
        const userData = {
          uid: firebaseUser.uid,
          name: firebaseUser.displayName || 'Usuário',
          email: firebaseUser.email,
          initials: (firebaseUser.displayName || 'U').split(' ').map(n => n[0]).join('').toUpperCase().substring(0, 2)
        };
        setIsLoggedIn(true);
        setUser(userData);
      } else {
        setIsLoggedIn(false);
        setUser(null);
      }
    });

    return () => unsubscribe();
  }, []);


  useEffect(() => {
    if (!isLoading && !isLoggedIn) {
      navigate("/login");
    }
  }, [isLoading, isLoggedIn, navigate]);

  useEffect(() => {
    setTimeout(() => {
      if (mensagensRef.current) {
        mensagensRef.current.scrollTop = mensagensRef.current.scrollHeight;
      }
    }, 100);
  }, [messages, isTyping]);

  // Envia mensagem para IA
  const getAIResponse = async (userMessage) => {
    setIsTyping(true);
    try {
      const aiText = await chatService.getAIResponse(userMessage);

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
      setMessages(prev => [...prev, { 
        id: Date.now(), 
        text: "Desculpe, estou com problemas técnicos. Tente novamente mais tarde.", 
        sender: "bot" 
      }]);
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

  const handleLogout = async () => {
    try {
      await authService.logout();
      setIsLoggedIn(false);
      setUser(null);
      setMessages([{
        id: Date.now(),
        text: "Olá! Sou o assistente virtual da FinAI. Como posso ajudá-lo com suas finanças hoje?", 
        sender: "bot"
      }]);
      navigate("/login");
    } catch (error) {
      console.error('Erro ao fazer logout:', error);
      alert('Erro ao fazer logout. Tente novamente.');
    }
  };

  if (isLoading) {
    return (
      <div className="telaChat">
        <h2>Assistente Financeiro Pessoal</h2>
        <div className="loading-container">
          <div className="loading-spinner"></div>
          <p>Carregando...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="telaChat">
      <h2>Assistente Financeiro Pessoal</h2>

      {isLoggedIn && user && (
        <>
          <div className="caixaChat">
            <div className="topoChat">
              <div className="iconeChat">{user.initials || 'AI'}</div>
              <div className="infoUsuario">
                <h3>Assistente FinAI</h3>
                <p>Online - Pronto para ajudar</p>
                <div className="usuarioInfo">
                  <span>Logado como: {user.name}</span>
                  <button onClick={handleLogout} className="botaoSair">Sair</button>
                </div>
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
                disabled={isTyping}
              />
              <button 
                onClick={handleSendMessage} 
                disabled={!inputText.trim() || isTyping}
              >
                {isTyping ? 'Digitando...' : 'Enviar'}
              </button>
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
