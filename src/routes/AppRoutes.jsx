import { Routes, Route } from "react-router-dom";

import Login from "../pages/Login/Login";
import Cadastro from "../pages/Cadastro/Cadastro";
import Inicio from "../pages/Inicio/Inicio";
import MeuPerfil from "../pages/MeuPerfil/MeuPerfil";
import MeusVideos from "../pages/MeusVideos/MeusVideos";
import VideosSalvos from "../pages/VideosSalvos/VideosSalvos";
import Inscritos from "../pages/Inscritos/Inscritos";
import Medicos from "../pages/Medicos/Medicos";
import Config from "../pages/Config/Config";
import Ajuda from "../pages/Ajuda/Ajuda";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/cadastro" element={<Cadastro />} />
      <Route path="/inicio" element={<Inicio />} />
      <Route path="/meuperfil" element={<MeuPerfil />} />
      <Route path="/meusvideos" element={<MeusVideos />} />
      <Route path="/videossalvos" element={<VideosSalvos />} />
      <Route path="/inscritos" element={<Inscritos />} />
      <Route path="/medicos" element={<Medicos />} />
      <Route path="/config" element={<Config />} />
      <Route path="/ajuda" element={<Ajuda />} />
    </Routes>
  );
};

export default AppRoutes;