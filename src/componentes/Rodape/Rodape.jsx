import style from "./Rodape.module.css";
import { Linkedin, Twitter, Facebook, Instagram } from "lucide-react";

const Rodape = (props) => {
  const { criador } = props;
  const anoAtual = new Date().getFullYear();

  return (
    <footer className={style.rodape}>
      <div className={style.container}>
        <div className={style.links}>
          <div className={style.coluna}>
            <h4>Produto</h4>
            <ul>
              <li><a href="#recursos">Recursos</a></li>
              <li><a href="#planos">Planos</a></li>
              <li><a href="#faq">FAQ</a></li>
            </ul>
          </div>

          <div className={style.coluna}>
            <h4>Empresa</h4>
            <ul>
              <li><a href="#sobre">Sobre nós</a></li>
              <li><a href="#blog">Blog</a></li>
              <li><a href="#contato">Contato</a></li>
            </ul>
          </div>

          <div className={style.coluna}>
            <h4>Legal</h4>
            <ul>
              <li><a href="#privacidade">Privacidade</a></li>
              <li><a href="#termos">Termos de uso</a></li>
              <li><a href="#seguranca">Segurança</a></li>
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
                href="https://Instagram.com"
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
