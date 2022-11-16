import React from "react";
import imagenes from "../assets/imagenes";
import "../components/inicio.css"
const Inicio = () => {
  return (
    <>
      <div className="logo">
        <img className="logoMiriam" src={imagenes.imgLogo} alt="logoMiriam" />
      </div>
      <div className="portalEmployee">
        <h1>Portail de l'employé</h1>
      </div>
      <div className="imgEmployee">
        <div>
          <a href="../inicioMesero">
            <img className="kettle" src={imagenes.imgKettle} alt="cup" />
          </a>
        </div>
        <div>
          <a href="../inicioMaestro">
            <img className="cakeIndex" src={imagenes.imgCakeIndex} alt="cake" />
          </a>
        </div>
      </div>
      <div className="titleEmployee">
        <div>
          <h2 className="servour">Servour</h2>
        </div>
        <div>
          <h2 className="maitre">Maître</h2>
        </div>
      </div>
    </>
  );
};

export default Inicio;
