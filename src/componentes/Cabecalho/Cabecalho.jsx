import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import { useAuth } from "../../hooks/useAuth";

const Cabecalho = () => {
  const { user, logout } = useAuth();

  return (
    <header className={styles.Cabecalho}>
      <nav className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/" ><img src="Logo.png" alt="logo" width="100px" /></Link>
        </div>

        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>
            Home
          </Link>
          <Link to="/Sobrenos" className={styles.navLink}>
            Sobre Nós
          </Link>
          <Link to="/servicos" className={styles.navLink}>
            Serviços
          </Link>
        </div>

        {user ? (
          <div className={styles.userMenu}>
            <div className={styles.userAvatar}>{user.initials}</div>
            <button className={styles.logoutButton} onClick={logout}>
              Sair
            </button>
          </div>
        ) : (
          <Link to="/servicos">
            <button className={styles.signInButton}>Sign In</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export { Cabecalho };
