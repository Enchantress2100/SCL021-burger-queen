import './App.css';
import React from "react";

// import files to create routes 
import Inicio from './pages/inicio';
import InicioSesionMaestro from "./pages/inicioSesionMaestro";
import InicioSesionMesero from ".//pages/inicioSesionMesero";
import Menu1 from "./pages/menuMesero1";
import Menu2 from "./pages/menuMesero2";
import Menu3 from "./pages/menuMesero3";
import Menu4 from "./pages/menuMesero4";
import ComandasMaestro from "./pages/comandasMaestro";
import OrdenProcesoMaestro from "./pages/ordenesProceso";
import OrdenEntregadaMesero from "./pages/ordenEntregada";
import Cierre from "./pages/cierre";

//import 
import { Routes, Route } from "react-router-dom";

//import nav para visualizar, despues lo sacamos

import Nav from './components/Nav';

//development of routes

const App = () => {
  return (
    <>
      <Nav/>
      <Routes>
        <Route path="/" element={<Inicio />} />
        <Route path="inicioMesero" element={<InicioSesionMesero />} />
        <Route path="inicioMaestro" element={<InicioSesionMaestro />} />
        <Route path="menu1" element={<Menu1 />} />
        <Route path="menu2" element={<Menu2 />} />
        <Route path="menu3" element={<Menu3 />} />
        <Route path="menu4" element={<Menu4 />} />
        <Route path="comandas" element={<ComandasMaestro />} />
        <Route path="ordenProceso" element={<OrdenProcesoMaestro/>} />
        <Route path="ordenEntregada" element={<OrdenEntregadaMesero/>} />
        <Route path="cierre" element={<Cierre/>}/>
      </Routes>
    </>
  );
};

export default App;