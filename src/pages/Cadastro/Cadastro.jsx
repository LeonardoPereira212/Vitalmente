import { Link } from "react-router-dom";
import styles from "./Cadastro.module.css";

const Cadastro = () => {
  return (
    <main className={styles.container}>
      {/* Lado esquerdo */}
      <section className={styles.banner}>
        <div className={styles.overlay}></div>

        <div className={styles.bannerContent}>
          <div className={styles.logo}>
            <i className="fa-solid fa-heart-pulse"></i>
            <span>VitalMente</span>
          </div>

          <h1>Junte-se a nós</h1>

          <p>
            Crie sua conta gratuitamente e tenha acesso a consultas,
            histórico médico, exames e muito mais em um ambiente seguro.
          </p>
        </div>
      </section>

      {/* Lado direito */}
      <section className={styles.formArea}>
        <div className={styles.formBox}>
          <h2>Criar Conta</h2>

          <p className={styles.subtitle}>
            Preencha os dados abaixo.
          </p>

          <form>
            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <i className="fa-solid fa-user"></i>

                <input
                  type="text"
                  placeholder="Nome"
                />
              </div>

              <div className={styles.inputGroup}>
                <i className="fa-solid fa-user-tag"></i>

                <input
                  type="text"
                  placeholder="Sobrenome"
                />
              </div>
            </div>

            <div className={styles.inputGroup}>
              <i className="fa-solid fa-envelope"></i>

              <input
                type="email"
                placeholder="E-mail"
              />
            </div>

            <div className={styles.inputGroup}>
              <i className="fa-solid fa-phone"></i>

              <input
                type="tel"
                placeholder="Telefone"
              />
            </div>

            <div className={styles.row}>
              <div className={styles.inputGroup}>
                <i className="fa-solid fa-lock"></i>

                <input
                  type="password"
                  placeholder="Senha"
                />
              </div>

              <div className={styles.inputGroup}>
                <i className="fa-solid fa-lock"></i>

                <input
                  type="password"
                  placeholder="Confirmar senha"
                />
              </div>
            </div>

            <label className={styles.terms}>
              <input type="checkbox" />

              Concordo com os{" "}
              <a href="#">
                Termos de Uso
              </a>{" "}
              e a{" "}
              <a href="#">
                Política de Privacidade
              </a>
            </label>

            <button type="submit">
              Criar Conta
            </button>
          </form>

          <div className={styles.divider}>
            <span>ou</span>
          </div>

          <button className={styles.google}>
            <i className="fa-brands fa-google"></i>

            Cadastrar com Google
          </button>

          <p className={styles.loginLink}>
            Já possui uma conta?{" "}

            <Link to="/login">
              Entrar
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Cadastro;