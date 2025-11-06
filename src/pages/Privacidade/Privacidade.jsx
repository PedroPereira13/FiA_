import "./Privacidade.css";
import { Link } from "react-router-dom";

function Privacidade() {
  return (
    <div className="privacidade-container">
      {/* Header */}
      <header className="privacidade-header">
        <div className="container">
          <h1>
            Política de <span className="destaque">Privacidade</span>
          </h1>
          <p>Transparência e segurança no tratamento dos seus dados</p>
          <br />
          <p>
            Na Finanças IA, levamos a proteção de dados pessoais a sério. Esta
            política explica como coletamos, usamos e protegemos suas
            informações, sempre em conformidade com a LGPD (Lei Geral de
            Proteção de Dados).
          </p>
        </div>
      </header>

      {/* Seções Principais */}
      <section className="privacidade-conteudo">
        <div className="container">
          <div className="grid-duas-colunas">
            <div className="card">
              <h2>1. Coleta de Dados</h2>
              <p>
                Coletamos apenas informações necessárias para fornecer nossos
                serviços, incluindo:
              </p>
              <ul>
                <li>Dados cadastrais (nome, e-mail, telefone)</li>
                <li>Informações de perfil financeiro</li>
                <li>Dados de uso da plataforma</li>
                <li>Preferências de investimento</li>
              </ul>
            </div>

            <div className="card">
              <h2>2. Uso das Informações</h2>
              <p>Seus dados são utilizados para:</p>
              <ul>
                <li>Personalizar recomendações financeiras</li>
                <li>Melhorar a experiência na plataforma</li>
                <li>Enviar insights e relatórios personalizados</li>
                <li>Desenvolver novos produtos e serviços</li>
              </ul>
            </div>
          </div>

          <div className="grid-duas-colunas">
            <div className="card">
              <h2>3. Segurança de Dados</h2>
              <p>
                Implementamos medidas robustas para proteger suas informações:
              </p>
              <ul>
                <li>Criptografia de ponta a ponta</li>
                <li>Armazenamento em servidores seguros</li>
                <li>Monitoramento contínuo contra ameaças</li>
                <li>Backups regulares</li>
              </ul>
            </div>

            <div className="card">
              <h2>4. Seus Direitos</h2>
              <p>De acordo com a LGPD, você tem direito a:</p>
              <ul>
                <li>Acessar seus dados pessoais</li>
                <li>Corrigir informações incompletas ou desatualizadas</li>
                <li>Solicitar a exclusão de dados</li>
                <li>Revogar consentimentos a qualquer momento</li>
              </ul>
            </div>
          </div>

          <div>
            <div className="card">
              <h2>5. Compartilhamento com Terceiros</h2>
              <p>
                Seus dados não são comercializados. Podemos compartilhar
                informações apenas com:
              </p>
              <ul>
                <li>Parceiros estratégicos para fornecimento de serviços</li>
                <li>Autoridades regulatórias quando exigid:o por lei</li>
                <li>Provedores de serviços essenciais à plataforma</li>
              </ul>
            </div>
                <br />
            <div className="card">
              <h2>6. Cookies e Tecnologias Similares</h2>
              <p>
                Utilizamos cookies para melhorar sua experiência, lembrar
                preferências e analisar o uso da plataforma. Você pode gerenciar
                suas preferências de cookies a qualquer momento nas
                configurações do seu navegador.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="privacidade-info">
        <div className="container">
          <div className="grid-duas-colunas">
            <div className="card">
              <h2>Atualizações da Política</h2>
              <p>
                Esta política pode ser atualizada periodicamente. Notificaremos
                nossos usuários sobre mudanças significativas através do e-mail
                cadastrado ou por meio de alertas na plataforma.
              </p>
              <p className="versao">
                <strong>Última atualização:</strong> 15 de Dezembro de 2024
              </p>
            </div>

            <div className="card">
              <h2>Dúvidas e Solicitações</h2>
              <p>
                Para exercer seus direitos sobre proteção de dados ou esclarecer
                dúvidas sobre esta política, entre em contato conosco:
              </p>
              <div className="contato-info">
                <p>
                  <strong>E-mail:</strong> privacidade@financasia.com
                </p>
                <p>
                  <strong>Horário de atendimento:</strong> Segunda a Sexta, 9h
                  às 18h
                </p>
                <p>
                  <strong>Prazo de resposta:</strong> Até 15 dias úteis
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="termos-cta">
        <div className="container">
          <h2>Precisa de mais informações?</h2>
          <p>
            Nossa equipe está pronta para esclarecer qualquer aspecto dos nossa
            Privacidade.
          </p>
          <br />
          <div>
            <Link to="/contato" className="fabutton">
              Fale Conosco
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Privacidade };
