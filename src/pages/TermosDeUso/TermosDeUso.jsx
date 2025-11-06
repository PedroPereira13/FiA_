import "./TDU.css";
import { Link } from "react-router-dom";

function TermosDeUso() {
  return (
    <div className="termos-container">
      
      <header className="termos-header">
        <div className="container">
          <h1>Termos de <span className="destaque">Uso</span></h1>
          <p>Conheça as regras e diretrizes para uso da nossa plataforma</p>
          <br />
          <p>
            Ao utilizar os serviços da Finanças IA, você concorda com estes Termos de Uso. 
            Leia atentamente antes de começar a usar nossa plataforma.
          </p>
        </div>
      </header>

      
      <section className="termos-conteudo">
        <div className="container">
          <div className="grid-duas-colunas">
            <div className="card">
              <h2>1. Aceitação dos Termos</h2>
              <p>
                Ao criar uma conta ou utilizar nossos serviços, você declara que:
              </p>
              <ul>
                <li>É maior de 18 anos ou possui autorização legal</li>
                <li>Forneceu informações verdadeiras e precisas</li>
                <li>Concorda com todas as condições aqui estabelecidas</li>
                <li>Assume responsabilidade por todas as atividades em sua conta</li>
              </ul>
            </div>

            <div className="card">
              <h2>2. Uso da Plataforma</h2>
              <p>
                Você concorda em utilizar a plataforma Finanças IA para:
              </p>
              <ul>
                <li>Gestão financeira pessoal e profissional</li>
                <li>Análise e planejamento de investimentos</li>
                <li>Acesso a insights e recomendações financeiras</li>
                <li>Finalidades legais e lícitas</li>
              </ul>
            </div>
          </div>

          <div className="grid-duas-colunas">
            <div className="card">
              <h2>3. Responsabilidades do Usuário</h2>
              <p>
                Como usuário, você é responsável por:
              </p>
              <ul>
                <li>Manter a confidencialidade de suas credenciais</li>
                <li>Notificar acesso não autorizado imediatamente</li>
                <li>Fornecer informações precisas e atualizadas</li>
                <li>Utilizar a plataforma em conformidade com a lei</li>
              </ul>
            </div>

            <div className="card">
              <h2>4. Limitações de Uso</h2>
              <p>
                É expressamente proibido:
              </p>
              <ul>
                <li>Utilizar a plataforma para atividades ilegais</li>
                <li>Tentar acessar dados de outros usuários</li>
                <li>Realizar engenharia reversa do software</li>
                <li>Comercializar nossos serviços sem autorização</li>
              </ul>
            </div>
          </div>

        <div>
          <div className="card">
            <h2>5. Propriedade Intelectual</h2>
            <p>
              Todos os direitos de propriedade intelectual relacionados à plataforma 
              Finanças IA, incluindo algoritmos, interface, conteúdo e marcas, 
              são de nossa propriedade exclusiva. Você recebe uma licença limitada 
              e não exclusiva para uso pessoal dos serviços.
            </p>
          </div>
          <br />
          <div className="card">
            <h2>6. Isenção de Responsabilidade</h2>
            <p>
              <strong>Importante:</strong> As recomendações e insights fornecidos 
              pela Finanças IA são baseados em algoritmos de IA e análise de dados 
              históricos. Eles não constituem aconselhamento financeiro profissional 
              e não garantem resultados de investimento. Recomendamos que consulte 
              um advisor financeiro qualificado antes de tomar decisões de investimento 
              significativas.
            </p>
          </div>
        </div>

        </div>
      </section>

      
      <section className="termos-info">
        <div className="container">
          <div className="grid-duas-colunas">
            <div className="card">
              <h2>7. Modificações nos Termos</h2>
              <p>
                Reservamo-nos o direito de modificar estes Termos de Uso a qualquer 
                momento. Alterações significativas serão comunicadas com 30 dias de 
                antecedência através do e-mail cadastrado ou por notificação na plataforma.
              </p>
              <p className="versao">
                <strong>Versão vigente:</strong> 2.1 - Dezembro 2024
              </p>
            </div>

            <div className="card">
              <h2>8. Cancelamento e Suspensão</h2>
              <p>
                Podemos suspender ou cancelar contas que violarem estes termos ou 
                utilizarem a plataforma de maneira inadequada. Usuários podem 
                cancelar seus planos a qualquer momento através das configurações da conta.
              </p>
            </div>
          </div>
        </div>
      </section>


      <section className="termos-cta">
        <div className="container">
          <h2>Ainda com dúvidas?</h2>
          <p>Nossa equipe está pronta para esclarecer qualquer aspecto dos nossos Termos de Uso.</p>
          <br />
          <div>
            <Link to="/contato" className="fabutton">Fale Conosco</Link>

          </div>
        </div>
      </section>
    </div>
  );
}

export { TermosDeUso };