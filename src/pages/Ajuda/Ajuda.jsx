import { useState } from "react";
import { Link } from "react-router-dom";
import styles from "../Inicio/Inicio.module.css";

const Ajuda = () => {
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
            placeholder="Pesquisar ajuda"
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
  <h1>Central de Ajuda</h1>

  <p>Como podemos ajudar você?</p>

  <div className={styles.ajudaContainer}>          <div className={styles.ajudaCard}>
              <i className="fa-solid fa-circle-question"></i>

              <h3>Como publicar um vídeo?</h3>

              <p>
                Clique no botão de publicar, selecione o vídeo e
                preencha as informações antes de enviá-lo.
              </p>
            </div>

            <div className={styles.ajudaCard}>
              <i className="fa-solid fa-bookmark"></i>

              <h3>Como salvar um vídeo?</h3>

              <p>
                Clique no ícone de marcador abaixo do vídeo para
                adicioná-lo aos seus vídeos salvos.
              </p>
            </div>

            <div className={styles.ajudaCard}>
              <i className="fa-solid fa-user-doctor"></i>

              <h3>Como encontrar médicos?</h3>

              <p>
                Acesse a página "Médicos" e utilize os filtros para
                localizar especialistas.
              </p>
            </div>

            <div className={styles.ajudaCard}>
              <i className="fa-solid fa-lock"></i>

              <h3>Minha conta é segura?</h3>

              <p>
                Sim. Seus dados são protegidos e utilizados apenas
                para melhorar sua experiência.
              </p>
            </div>

            <div className={styles.ajudaCard}>
              <i className="fa-solid fa-envelope"></i>

              <h3>Entrar em contato</h3>

              <p>
                Não encontrou sua resposta? Entre em contato com
                nossa equipe de suporte.
              </p>

              <a href="#">
                Falar com o suporte
              </a>
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default Ajuda;