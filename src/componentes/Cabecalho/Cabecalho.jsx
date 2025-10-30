import { Link } from "react-router-dom";
import styles from "./Cabecalho.module.css";
import { useAuthContext } from "../../context/AuthContext";

const Cabecalho = () => {
  const { user, logout } = useAuthContext();

  return (
    <header className={styles.Cabecalho}>
      <nav className={styles.container}>
        <div className={styles.logoContainer}>
          <Link to="/"><img src="Logo.png" alt="logo" width="100px" /></Link>
        </div>

        <div className={styles.navLinks}>
          <Link to="/" className={styles.navLink}>Home</Link>
          <Link to="/sobrenos" className={styles.navLink}>Sobre Nós</Link>
          <Link to="/servicos" className={styles.navLink}>Serviços</Link>
        </div>

        {user ? (
          <div className={styles.userMenu}>
            <div className={styles.userAvatar}>{user.initials}</div>
            <button className={styles.logoutButton} onClick={logout}>Sair</button>
          </div>
        ) : (
          <Link to="/login">
            <button className={styles.signInButton}>Login</button>
          </Link>
        )}
      </nav>
    </header>
  );
};

export { Cabecalho };
