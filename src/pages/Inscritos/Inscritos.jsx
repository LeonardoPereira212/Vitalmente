import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Inicio/Inicio.module.css";

const Inscritos = () => {
  const [menuAberto, setMenuAberto] = useState(false);

  return (
    <>
      <header className={styles.header}>
        <div className={styles.logo}>
          <i className="fa-solid fa-heart-pulse"></i>
          <span>VitalMente</span>
        </div>

        <div className={styles.search}>
          <input
            type="text"
            placeholder="Pesquisar"
          />

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

          <Link
            to="/inscritos"
            className={styles.active}
          >
            <i className="fa-solid fa-users"></i>
            <span>Inscritos</span>
          </Link>

          <Link to="/medicos">
            <i className="fa-solid fa-user-doctor"></i>
            <span>Médicos</span>
          </Link>

          <Link to="/config">
            <i className="fa-solid fa-gear"></i>
            <span>Config.</span>
          </Link>
        </aside>

        <main className={styles.main}>
          <h1>Seus canais inscritos</h1>

         <p className={styles.subtitle}>
  Você está acompanhando estes profissionais e instituições.
</p>

<div className={styles.channels}>

<div className={styles.channel}>
              <img
                src="https://i.pravatar.cc/150?img=12"
                alt="Dr. Carlos Mendes"
              />

              <div className={styles.info}>
                <h3>Dr. Carlos Mendes</h3>
                <p>Cardiologista • 125 mil inscritos</p>
              </div>

              <button>Inscrito</button>
            </div>

            <div className={styles.channel}>
              <img
                src="https://i.pravatar.cc/150?img=25"
                alt="Dra. Ana Oliveira"
              />

              <div className={styles.info}>
                <h3>Dra. Ana Oliveira</h3>
                <p>Pediatra • 82 mil inscritos</p>
              </div>

              <button>Inscrito</button>
            </div>

            <div className={styles.channel}>
              <img
                src="https://i.pravatar.cc/150?img=32"
                alt="Hospital Vida+"
              />

              <div className={styles.info}>
                <h3>Hospital Vida+</h3>
                <p>Hospital • 210 mil inscritos</p>
              </div>

              <button>Inscrito</button>
            </div>

            <div className={styles.channel}>
              <img
                src="https://i.pravatar.cc/150?img=48"
                alt="Clínica Bem Estar"
              />

              <div className={styles.info}>
                <h3>Clínica Bem Estar</h3>
                <p>Clínica Médica • 97 mil inscritos</p>
              </div>

              <button>Inscrito</button>
            </div>

            <div className={styles.channel}>
              <img
                src="https://i.pravatar.cc/150?img=15"
                alt="Dr. Rafael Souza"
              />

              <div className={styles.info}>
                <h3>Dr. Rafael Souza</h3>
                <p>Neurologista • 54 mil inscritos</p>
              </div>

              <button>Inscrito</button>
            </div>

            <div className={styles.channel}>
              <img
                src="https://i.pravatar.cc/150?img=45"
                alt="Instituto Saúde Total"
              />

              <div className={styles.channel}>
             ...
             <button>Inscrito</button>
            </div>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Inscritos;