import "./Inicial.css";

import { Link } from "react-router-dom";

function Inicial() {
  return (
    <div className="caixa">
      <section className="principal">
        <h1>Revolucione suas finanças com IA</h1>
        <p>
          Nossa plataforma utiliza inteligência artificial para otimizar seus
          investimentos, reduzir custos e maximizar seus rendimentos de forma
          automática e inteligente.
        </p>
        
        <Link to="/Servicos" className="botao">Comece Agora</Link>
      </section>

      <section className="recursos">
        <div className="card-recurso">
          <div className="icone-recurso">📈</div>
          <h3>Análise Preditiva</h3>
          <p>
            Nossa IA analisa padrões de mercado para prever tendências e
            oferecer recomendações de investimento personalizadas.
          </p>
        </div>
        <div className="card-recurso">
          <div className="icone-recurso">🤖</div>
          <h3>Automação Inteligente</h3>
          <p>
            Automatize suas finanças com algoritmos que aprendem com seus
            hábitos e otimizam suas decisões financeiras.
          </p>
        </div>
        <div className="card-recurso">
          <div className="icone-recurso">🔒</div>
          <h3>Segurança Máxima</h3>
          <p>
            Tenha seu dinheiro nos investimentos mais seguros e mais lucrativos.
          </p>
        </div>
      </section>

      <section className="demo">
        <h2>Visualize seu Potencial</h2>
        <div className="caixa-demo">
          <div className="grafico-demo"></div>
          <div className="texto-demo">
            <h3>+70% de eficiência em investimentos</h3>
            <p>
              Nossos algoritmos de machine learning analisam milhares de
              variáveis de mercado em tempo real para identificar as melhores
              oportunidades de investimento específicas para seu perfil.
            </p>
            <p>
              Usuários relatam em média um aumento de 70% na eficiência de seus
              investimentos após 6 meses usando nossa plataforma.
            </p>
          </div>
        </div>
      </section>

      <section className="comentarios">
        <h2>O que nossos clientes dizem</h2>
        <div className="caixa-comentario">
          <div className="card-comentario">
            <p className="texto-comentario">
              A FiA transformou completamente minha relação com o dinheiro. Em
              3 meses já obtive retornos que não conseguiria em anos com meus
              métodos anteriores.
            </p>
            <div className="autor">
              <div className="foto-autor">MC</div>
              <div>
                <h4>Maria Carvalho</h4>
                <p>Investidora</p>
              </div>
            </div>
          </div>
          <div className="card-comentario">
            <p className="texto-comentario">
              Como pequeno empresário, a análise preditiva da FiA me ajudou a
              tomar decisões cruciais que aumentaram meu fluxo de caixa em 45%.
            </p>
            <div className="autor">
              <div className="foto-autor">PS</div>
              <div>
                <h4>Pedro Silva</h4>
                <p>Empresário</p>
              </div>
            </div>
          </div>
          <div className="card-comentario">
            <p className="texto-comentario">
              A interface intuitiva e os insights profundos tornaram a gestão
              das minhas finanças algo simples e prazeroso. Recomendo para
              todos!
            </p>
            <div className="autor">
              <div className="foto-autor">AS</div>
              <div>
                <h4>Ana Souza</h4>
                <p>Arquiteta</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Inicial };