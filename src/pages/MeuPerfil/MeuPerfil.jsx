import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Inicio/Inicio.module.css";

const MeuPerfil = () => {
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

        <main className={styles.main}>
          <section className={styles.perfilContainer}>
            <img
              src="https://i.pravatar.cc/180?img=12"
              alt="Foto de Perfil"
              className={styles.fotoPerfil}
            />

            <div className={styles.perfilInfo}>
              <h1>João Silva</h1>

              <span>@joaosilva</span>

              <p>
                Compartilhando conteúdos sobre saúde mental,
                bem-estar e qualidade de vida.
              </p>

              <button>
                <i className="fa-solid fa-pen"></i>{" "}
                Editar Perfil
              </button>
            </div>
          </section>

          <section className={styles.estatisticas}>
            <div className={styles.infoCard}>
              <i className="fa-solid fa-video"></i>
              <h2>0</h2>
              <p>Vídeos</p>
            </div>

            <div className={styles.infoCard}>
              <i className="fa-solid fa-users"></i>
              <h2>0</h2>
              <p>Inscritos</p>
            </div>

            <div className={styles.infoCard}>
              <i className="fa-solid fa-eye"></i>
              <h2>0</h2>
              <p>Visualizações</p>
            </div>
          </section>

          <section className={styles.ultimosVideos}>
            <h2>Últimos vídeos</h2>

            <div className={styles.semConteudo}>
              <i className="fa-solid fa-circle-play"></i>

              <p>Você ainda não publicou nenhum vídeo.</p>
            </div>
          </section>
        </main>
      </div>
    </>
  );
};

export default MeuPerfil;