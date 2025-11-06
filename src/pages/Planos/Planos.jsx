import "./Planos.css";
import { Link } from "react-router-dom";

function Planos() {
  const planos = [
    {
      nome: "Básico",
      preco: "Gratuito",
      periodo: "",
      descricao: "Perfeito para começar sua jornada financeira",
      popular: false,
      recursos: [
        "Análise básica de gastos",
        "Relatórios mensais simples",
        "Suporte por e-mail",
        "Até 5 transações/mês",
        "Acesso à comunidade"
      ],
      cor: "#666"
    },
    {
      nome: "Premium",
      preco: "R$ 29",
      periodo: "/mês",
      descricao: "Ideal para quem quer otimizar investimentos",
      popular: true,
      recursos: [
        "Análise avançada por IA",
        "Relatórios detalhados",
        "Suporte prioritário",
        "Transações ilimitadas",
        "Alertas personalizados",
        "Previsões de mercado",
        "Exportação de dados"
      ],
      cor: "#FFD700"
    },
    {
      nome: "Enterprise",
      preco: "R$ 99",
      periodo: "/mês",
      descricao: "Solução completa para empresas",
      popular: false,
      recursos: [
        "Todos os recursos Premium",
        "Multi-usuários",
        "API dedicada",
        "Consultoria personalizada",
        "Relatórios corporativos",
        "Suporte 24/7",
        "Treinamento da equipe",
        "Customização total"
      ],
      cor: "#00FF00"
    }
  ];

  return (
    <div className="planos-container">

      <header className="planos-header">
        <div className="container">
          <h1>Escolha seu <span className="destaque">Plano</span></h1>
          <p>Encontre o plano perfeito para suas necessidades financeiras</p>
          <br />
          <p>
            Da gestão básica às análises preditivas avançadas, temos uma 
            solução para cada etapa da sua jornada financeira.
          </p>
        </div>
      </header>


      <section className="planos-conteudo">
        <div className="container">
          <div className="planos-grid">
            {planos.map((plano, index) => (
              <div 
                key={index} 
                className={`plano-card ${plano.popular ? 'popular' : ''}`}
              >
                {plano.popular && <div className="badge-popular">Mais Popular</div>}
                
                <div className="plano-header">
                  <h3>{plano.nome}</h3>
                  <div className="preco">
                    <span className="valor">{plano.preco}</span>
                    <span className="periodo">{plano.periodo}</span>
                  </div>
                  <p className="descricao">{plano.descricao}</p>
                </div>

                <div className="plano-recursos">
                  <ul>
                    {plano.recursos.map((recurso, idx) => (
                      <li key={idx}>
                        <span className="check">✓</span>
                        {recurso}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="plano-acoes">
                  <Link 
                    to="/cadastro" 
                    className={`btn-plano ${plano.popular ? 'btn-popular' : ''}`}
                  >
                    Começar Agora
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  
      <section className="planos-faq">
        <div className="container">
          <h2 className="titulo-secao">Dúvidas sobre Planos</h2>
          <div className="faq-grid">
            <div className="faq-item">
              <h3>Posso mudar de plano depois?</h3>
              <p>
                Sim! Você pode fazer upgrade ou downgrade a qualquer momento. 
                O valor será ajustado proporcionalmente.
              </p>
            </div>

            <div className="faq-item">
              <h3>Há cobrança de setup?</h3>
              <p>
                Não! Todos os planos têm setup gratuito. Você paga apenas 
                a mensalidade do plano escolhido.
              </p>
            </div>

            <div className="faq-item">
              <h3>Oferecem teste gratuito?</h3>
              <p>
                Sim! Todos os planos pagos têm 14 dias de teste gratuito 
                com acesso completo a todas as funcionalidades.
              </p>
            </div>

            <div className="faq-item">
              <h3>Há desconto para anual?</h3>
              <p>
                Sim! Pagamento anual tem 20% de desconto em todos os planos.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export { Planos };