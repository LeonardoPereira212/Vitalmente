import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Inicio/Inicio.module.css";

const MeusVideos = () => {
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

          <Link to="/inscritos">
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

        <main className={styles.main}></main>          <div className={styles.semVideos}>
            <i className="fa-solid fa-circle-play"></i>

            <h2>Você não postou nada</h2>

            <p>
              Quando você publicar seu primeiro vídeo,
              ele aparecerá aqui.
            </p>
          </div>
      </div>
    </>
  );
};

export default MeusVideos;