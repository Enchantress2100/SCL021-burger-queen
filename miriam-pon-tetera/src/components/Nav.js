import React from "react";
// enable users to navigate without changing the url
// this specifies that we must follow a path
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
        <button>
          <Link to="/">Inicio</Link>
        </button>
        <button>
          <Link to="/inicioMesero">Inicio Meseros</Link>
        </button>
        <button>
          <Link to="/inicioMaestro">Inicio Maestro</Link>
        </button>
        <button>
          <Link to="/menu1">Menu1</Link>
        </button>
        <button>
          <Link to="/menu2">Menu2</Link>
        </button>
        <button>
          <Link to="/menu3">Menu3</Link>
        </button>
        <button>
          <Link to="/menu4">Menu4</Link>
        </button>
        <button>
          <Link to="/comandas">Comandas</Link>
        </button>
        <button>
          <Link to="/ordenProceso">OrdenProcesoMaestro</Link>
        </button>
        <button>
        <Link to="/ordenEntregada">OrdenProcesoEntrega</Link>
        </button>
      <button>
      <Link to="/cierre">Cierre sesión</Link>
      </button>
        
    </>
  );
};

export default Nav;
