import './Sobrenos.css';

import { Route } from "react-router-dom";
import { Servicos } from "../Servicos";

const SobreNos = () => {
  return (
    <div className="sobre-nos-container">
      {/* Header */}
      <header className="sobre-header">
        <div className="container">
            <div>
                
            </div>
          <h1>Sobre a <span className="destaque">FiA</span></h1>
          <p>Revolucionando o mundo das finanças com inteligência artificial</p><br></br>
          <p>Nossa trajetória teve início através da participação no projeto Hackateen, um desafio acadêmico promovido pela Venturus na Faculdade de Tecnologia de Americana (Fatec).
             Durante o evento, os organizadores nos apresentaram todas as diretrizes, regulamentos e objetivos que deveríamos seguir no desenvolvimento do nosso projeto, estabelecendo as
              bases para o que viria a se tornar nossa empresa de finanças com inteligência artificial</p>
        </div>
</header>

      {/* Missão e Visão */}
      <section className="missao-visao">
        <div className="container">
          <div className="grid-duas-colunas">
            <div className="card">
              <h2>Nossa Missão</h2>
              <p>Democratizar o acesso a ferramentas financeiras inteligentes, utilizando IA para oferecer insights precisos e personalizados que ajudam pessoas e empresas a tomar decisões financeiras mais assertivas.</p>
            </div>
            <div className="card">
              <h2>Nossa Visão</h2>
              <p>Ser a plataforma de referência em soluções financeiras com IA na América Latina, transformando a maneira como as pessoas gerenciam e investem seu dinheiro.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Diferenciais */}
      <section className="diferenciais">
        <div className="container">
          <h2 className="titulo-secao">Nossos Diferenciais</h2>
          <div className="grid-tres-colunas">
            <div className="diferencial-item">
              <div className="icone">🤖</div>
              <h3>IA Especializada</h3>
              <p>Algoritmos treinados especificamente para o mercado financeiro brasileiro e latino-americano.</p>
            </div>
            <div className="diferencial-item">
              <div className="icone">🔒</div>
              <h3>Segurança de Dados</h3>
              <p>Proteção de última geração para garantir a confidencialidade das suas informações financeiras.</p>
            </div>
            <div className="diferencial-item">
              <div className="icone">📈</div>
              <h3>Previsões Precisas</h3>
              <p>Análise preditiva com alto índice de acerto para orientar suas decisões de investimento.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Equipe */}
      <section className="equipe">
        <div className="container">
          <h2 className="titulo-secao">Nossa Equipe</h2>
          <p className="descricao-equipe">Combinamos expertise em finanças, tecnologia e ciência de dados para criar soluções inovadoras.</p>
          <div className="grid-quatro-colunas">
            <div className="membro-equipe">
              <div className="avatar"></div>
              <h3>Pedro Pereira</h3>
            </div>
            <div className="membro-equipe">
              <div className="avatar"></div>
              <h3>Edgar Cavalini</h3>
            </div>
            <div className="membro-equipe">
              <div className="avatar"></div>
              <h3>Lucca Faria</h3>
            </div>
            <div className="membro-equipe">
              <div className="avatar"></div>
              <h3>Raphael Garcia</h3>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-final">
        <div className="container">
          <h2>Pronto para transformar sua vida financeira?</h2>
          <p>Junte-se a milhares de clientes que já confiam em nossa tecnologia.</p>
          <Route path="/servicos" element={<Servicos />} className="btn-primario">Começar Agora</Route>
        </div>
      </section>
    </div>
  );
};

export {SobreNos};
