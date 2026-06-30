import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "./Inicio.module.css";

const Inicio = () => {
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
                  alt=""
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
          <Link
            to="/inicio"
            className={styles.active}
          >
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
       
        <main className={styles.main}>
          <h1>Olá! 👋</h1>

          <p>O que deseja ver hoje?</p>

          <section className={styles.videos}></section>           
           <div className={styles.videoCard}>
              <div className={styles.thumbnail}>
                <img
                  src="https://picsum.photos/500/280?random=1"
                  alt="Vídeo"
                />
                <span className={styles.duracao}>12:35</span>
              </div>

              <div className={styles.videoInfo}>
                <img
                  className={styles.canal}
                  src="https://i.pravatar.cc/45?img=12"
                  alt=""
                />

                <div className={styles.descricao}>
                  <h3>Como controlar a ansiedade no dia a dia</h3>
                  <p>VitalMente</p>
                  <span>24 mil visualizações • há 2 dias</span>
                </div>
              </div>
            </div>

            <div className={styles.videoCard}>
              <div className={styles.thumbnail}>
                <img
                  src="https://picsum.photos/500/280?random=2"
                  alt="Vídeo"
                />
                <span className={styles.duracao}>8:47</span>
              </div>

              <div className={styles.videoInfo}>
                <img
                  className={styles.canal}
                  src="https://i.pravatar.cc/45?img=20"
                  alt=""
                />

                <div className={styles.descricao}>
                  <h3>5 hábitos para melhorar sua saúde mental</h3>
                  <p>VitalMente</p>
                  <span>12 mil visualizações • há 5 dias</span>
                </div>
              </div>
            </div>

            <div className={styles.videoCard}>
              <div className={styles.thumbnail}>
                <img
                  src="https://picsum.photos/500/280?random=3"
                  alt="Vídeo"
                />
                <span className={styles.duracao}>21:09</span>
              </div>

              <div className={styles.videoInfo}>
                <img
                  className={styles.canal}
                  src="https://i.pravatar.cc/45?img=30"
                  alt=""
                />

                <div className={styles.descricao}>
                  <h3>Depressão: como identificar os primeiros sinais</h3>
                  <p>VitalMente</p>
                  <span>30 mil visualizações • há 1 semana</span>
                </div>
              </div>
            </div>

            <div className={styles.videoCard}>
              <div className={styles.thumbnail}>
                <img
                  src="https://picsum.photos/500/280?random=4"
                  alt="Vídeo"
                />
                <span className={styles.duracao}>15:02</span>
              </div>

              <div className={styles.videoInfo}>
                <img
                  className={styles.canal}
                  src="https://i.pravatar.cc/45?img=40"
                  alt=""
                />

                <div className={styles.descricao}>
                  <h3>Como dormir melhor naturalmente</h3>
                  <p>VitalMente</p>
                  <span>9 mil visualizações • há 3 dias</span>
                </div>
              </div>
            </div>

                 
        </main>
      </div>
    </>
  );
};

export default Inicio;