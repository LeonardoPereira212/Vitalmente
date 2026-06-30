import { Link } from "react-router-dom";
import styles from "./Login.module.css";

const Login = () => {
  return (
    <main className={styles.container}>
      <section className={styles.banner}>
        <div className={styles.overlay}></div>

        <div className={styles.bannerContent}>
          <div className={styles.logo}>
            <i className="fa-solid fa-heart-pulse"></i>
            <span>VitalMente</span>
          </div>

          <h1>Bem-vindo!</h1>

          <p>
            VitalMente é uma plataforma focada em vídeos educativos sobre saúde
            e bem-estar!
          </p>
        </div>
      </section>

      <section className={styles.loginArea}>
        <div className={styles.loginBox}>
          <h2>Entrar</h2>

          <p className={styles.subtitle}>
            Faça login para acessar sua conta.
          </p>

          <form>
            <div className={styles.inputGroup}>
              <i className="fa-solid fa-envelope"></i>

              <input
                type="email"
                placeholder="E-mail"
              />
            </div>

            <div className={styles.inputGroup}>
              <i className="fa-solid fa-lock"></i>

              <input
                type="password"
                placeholder="Senha"
              />
            </div>

            <div className={styles.options}>
              <label>
                <input type="checkbox" />

                Lembrar de mim
              </label>

              <a href="#">
                Esqueceu a senha?
              </a>
            </div>

            <button type="submit">
              Entrar
            </button>
          </form>

          <div className={styles.divider}>
            <span>ou</span>
          </div>

          <button className={styles.google}>
            <i className="fa-brands fa-google"></i>

            Entrar com Google
          </button>

          <p className={styles.register}>
            Não possui uma conta?{" "}
            <Link to="/cadastro">
              Criar conta
            </Link>
          </p>

          <p className={styles.guestAccess}>
            ou
          </p>

          <Link
            to="/inicio"
            className={styles.guestButton}
          >
            <i className="fa-solid fa-user"></i>

            Avançar sem conta
          </Link>
        </div>
      </section>
    </main>
  );
};

export default Login;