import "./Contato.css";
import { useState } from "react";

function Contato() {
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    assunto: "",
    mensagem: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Dados do formulário:", formData);
    alert("Mensagem enviada com sucesso! Entraremos em contato em breve.");
    setFormData({ nome: "", email: "", assunto: "", mensagem: "" });
  };

  return (
    <div className="contato-container">

      <header className="contato-header">
        <div className="container">
          <h1>Fale <span className="destaque">Conosco</span></h1>
          <p>Estamos aqui para ajudar você a transformar sua vida financeira</p>
          <br />
          <p>
            Tem dúvidas, sugestões ou precisa de suporte? Nossa equipe está 
            pronta para atendê-lo com a excelência que você merece.
          </p>
        </div>
      </header>


      <section className="contato-conteudo">
        <div className="container">
          <div className="grid-duas-colunas">

            <div className="card">
              <h2>Envie sua Mensagem</h2>
              <form onSubmit={handleSubmit} className="contato-form">
                <div className="form-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleChange}
                    required
                    placeholder="Seu nome completo"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="seu@email.com"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="assunto">Assunto</label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecione um assunto</option>
                    <option value="suporte">Suporte Técnico</option>
                    <option value="vendas">Dúvidas Comerciais</option>
                    <option value="parcerias">Parcerias</option>
                    <option value="sugestoes">Sugestões</option>
                    <option value="outros">Outros</option>
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="mensagem">Mensagem</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleChange}
                    required
                    rows="5"
                    placeholder="Descreva sua dúvida ou solicitação..."
                  ></textarea>
                </div>

                <button type="submit" className="btn-primario">
                  Enviar Mensagem
                </button>
              </form>
            </div>

            <div className="card">
              <h2>Informações de Contato</h2>
              
              <div className="contato-info">
                <div className="info-item">
                  
                  <div>
                    <h3>E-mail</h3>
                    <p>contato@financasia.com</p>
                    <p>suporte@financasia.com</p>
                  </div>
                </div>

                <div className="info-item">
                  
                  <div>
                    <h3>Telefone</h3>
                    <p>(11) 9999-9999</p>
                    <p>(11) 8888-8888</p>
                  </div>
                </div>

                <div className="info-item">
                  
                  <div>
                    <h3>Horário de Atendimento</h3>
                    <p>Segunda a Sexta: 9h às 18h</p>
                    <p>Sábado: 9h às 13h</p>
                  </div>
                </div>

                <div className="info-item">
                  
                  <div>
                    <h3>Chat Online</h3>
                    <p>Disponível no horário comercial</p>
                    <p>Resposta imediata</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}

export { Contato };