import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Medicos.module.css";

const Medicos = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <i className="fa-solid fa-heart-pulse"></i>
          <span>VitalMente</span>
        </div>

        <div className={styles.search}>
          <input type="text" placeholder="Pesquisar" />

          <button>
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>
        </div>

        <div className={styles.headerIcons}>
          <img
            src="https://i.pravatar.cc/45"
            alt="Perfil"
            className={styles.perfil}
            onClick={() => setMenuAberto(!menuAberto)}
          />

          {menuAberto && (
            <div className={styles.menuPerfil}>
              <div className={styles.perfilTopo}>
                <img
                  src="https://i.pravatar.cc/70"
                  alt="Perfil"
                />

                <div>
                  <h4>João</h4>
                  <span>joao@email.com</span>
                </div>
              </div>

              <hr />

              <Link to="/meuperfil">
                <i className="fa-solid fa-user"></i>
                Meu Perfil
              </Link>

              <Link to="/meusvideos">
                <i className="fa-solid fa-video"></i>
                Meus Vídeos
              </Link>

              <Link to="/videossalvos">
                <i className="fa-solid fa-bookmark"></i>
                Salvos
              </Link>

              <hr />

              <Link to="/ajuda">
                <i className="fa-solid fa-circle-question"></i>
                Ajuda
              </Link>

              <Link to="/login">
                <i className="fa-solid fa-right-from-bracket"></i>
                Sair
              </Link>
            </div>
          )}
        </div>
      </header>

      <div className={styles.container}>
        <aside className={styles.sidebar}>
          <Link to="/inicio">
            <i className="fa-solid fa-house"></i>
            <span>Início</span>
          </Link>

          <Link to="/inscritos">
            <i className="fa-solid fa-users"></i>
            <span>Inscritos</span>
          </Link>

          <Link
            to="/medicos"
            className={styles.active}
          >
            <i className="fa-solid fa-user-doctor"></i>
            <span>Médicos</span>
          </Link>

          <Link to="/config">
            <i className="fa-solid fa-gear"></i>
            <span>Config.</span>
          </Link>
        </aside>

        <main className={styles.main}>
  <div className={styles.title}>
    <h1>Médicos disponíveis</h1>

    <p>Escolha um especialista e marque sua consulta.</p>
  </div>

  <div className={styles.cards}>

    <div className={styles.card}>
            <img
              src="https://i.pravatar.cc/120?img=12"
              alt="Dr. Carlos Mendes"
            />

            <h3>Dr. Carlos Mendes</h3>

            <span>Cardiologista</span>

            <p>
              Especialista em doenças do coração e exames cardiológicos.
            </p>

            <button className={styles.btn}>
              Marcar consulta
            </button>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.pravatar.cc/120?img=25"
              alt="Dra. Ana Oliveira"
            />

            <h3>Dra. Ana Oliveira</h3>

            <span>Pediatra</span>

            <p>
              Atendimento especializado em saúde infantil.
            </p>

            <button className={styles.btn}>
              Marcar consulta
            </button>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.pravatar.cc/120?img=32"
              alt="Dr. Rafael Souza"
            />

            <h3>Dr. Rafael Souza</h3>

            <span>Neurologista</span>

            <p>
              Tratamento de doenças do sistema nervoso.
            </p>

            <button className={styles.btn}>
              Marcar consulta
            </button>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.pravatar.cc/120?img=48"
              alt="Dra. Juliana Santos"
            />

            <h3>Dra. Juliana Santos</h3>

            <span>Dermatologista</span>

            <p>
              Cuidados com pele, cabelo e unhas.
            </p>

            <button className={styles.btn}>
              Marcar consulta
            </button>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.pravatar.cc/120?img=15"
              alt="Dr. Marcos Lima"
            />

            <h3>Dr. Marcos Lima</h3>

            <span>Ortopedista</span>

            <p>
              Especialista em ossos, músculos e articulações.
            </p>

            <button className={styles.btn}>
              Marcar consulta
            </button>
          </div>

          <div className={styles.card}>
            <img
              src="https://i.pravatar.cc/120?img=45"
              alt="Dra. Fernanda Rocha"
            />

            <h3>Dra. Fernanda Rocha</h3>

            <span>Ginecologista</span>

            <p>
              Saúde feminina e acompanhamento preventivo.
            </p>

            <button className={styles.btn}>
              Marcar consulta
            </button>
          </div>
        </div>
      </main>
    </div>
  </>
);
};

export default Medicos;