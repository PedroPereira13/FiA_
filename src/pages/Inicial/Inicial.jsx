import "./Inicial.css";

const Inicial = () => {
  return (
    <div class="container">
      <section class="hero">
        <h1>Revolucione suas finanças com IA</h1>
        <p>
          Nossa plataforma utiliza inteligência artificial para otimizar seus
          investimentos, reduzir custos e maximizar seus rendimentos de forma
          automática e inteligente.
        </p>
        <button class="cta-button">Comece Agora</button>
      </section>

      <section class="features">
        <div class="feature-card">
          <div class="feature-icon">📈</div>
          <h3>Análise Preditiva</h3>
          <p>
            Nossa IA analisa padrões de mercado para prever tendências e
            oferecer recomendações de investimento personalizadas.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🤖</div>
          <h3>Automação Inteligente</h3>
          <p>
            Automatize suas finanças com algoritmos que aprendem com seus
            hábitos e otimizam suas decisões financeiras.
          </p>
        </div>
        <div class="feature-card">
          <div class="feature-icon">🔒</div>
          <h3>Segurança Máxima</h3>
          <p>
            Proteção de dados de nível bancário com criptografia avançada e
            monitoramento contínuo contra fraudes.
          </p>
        </div>
      </section>

      <section class="demo-section">
        <h2>Visualize seu Potencial</h2>
        <div class="demo-container">
          <div class="demo-chart"></div>
          <div class="demo-text">
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

      <section class="testimonials">
        <h2>O que nossos clientes dizem</h2>
        <div class="testimonial-cards">
          <div class="testimonial-card">
            <p class="testimonial-text">
              A FinAI transformou completamente minha relação com o dinheiro. Em
              3 meses já obtive retornos que não conseguiria em anos com meus
              métodos anteriores.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">MC</div>
              <div>
                <h4>Maria Carvalho</h4>
                <p>Investidora</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">
              Como pequeno empresário, a análise preditiva da FinAI me ajudou a
              tomar decisões cruciais que aumentaram meu fluxo de caixa em 45%.
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">PS</div>
              <div>
                <h4>Pedro Silva</h4>
                <p>Empresário</p>
              </div>
            </div>
          </div>
          <div class="testimonial-card">
            <p class="testimonial-text">
              A interface intuitiva e os insights profundos tornaram a gestão
              das minhas finanças algo simples e prazeroso. Recomendo para
              todos!
            </p>
            <div class="testimonial-author">
              <div class="author-avatar">AS</div>
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
};

export { Inicial };
