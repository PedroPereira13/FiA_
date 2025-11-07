import { Link } from "react-router-dom";
import style from "./Rodape.module.css";
import { Linkedin, Twitter, Instagram } from "lucide-react";

const Rodape = ({ criador }) => {
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={style.rodape}>
      <div className={style.container}>
        <div className={style.links}>
          <div className={style.coluna}>
            <h4>Produto</h4>
            <ul>
              <li><Link to="/planos">Planos</Link></li>
            </ul>
          </div>

          <div className={style.coluna}>
            <h4>Empresa</h4>
            <ul>
              <li><Link to="/sobrenos">Sobre nós</Link></li>
              <li><Link to="/contato">Contato</Link></li>
            </ul>
          </div>

          <div className={style.coluna}>
            <h4>Legal</h4>
            <ul>
              <li><Link to="/privacidade">Privacidade</Link></li>
              <li><Link to="/termos">Termos de uso</Link></li>
            </ul>
          </div>

          <div className={style.coluna}>
            <h4>Conecte-se</h4>
            <div className={style.redesSociais}>
              <a
                href="https://www.linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <Linkedin size={24} />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Twitter"
              >
                <Twitter size={24} />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Instagram size={24} />
              </a>
            </div>
          </div>
        </div>

        <div className={style.assinatura}>
          <p>&copy; {anoAtual} Finanças IA. Todos os direitos reservados.</p>
          {criador && (
            <p className={style.criador}>Desenvolvido por {criador}</p>
          )}
        </div>
      </div>
    </footer>
  );
};

export { Rodape };
