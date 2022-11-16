import React from "react";
import "../components/inicioSesionMesero.css";
import imagenes from "../assets/imagenes";
import GoogleButton from "react-google-button";
const InicioSesionMesero = () => {
  return (
    <>
      <div className="logo">
        <img className="logoMiriam" src={imagenes.imgLogo} alt="logoMiriam" />
      </div>
      <div className="portalServour">
        <h1>Portail pour les serveurs</h1>
      </div>
      <div className="containerLogIn">
        <div className="labelUser">
          <div>
            <h3>User:</h3>
          </div>
          <div>
            <h3>Password:</h3>
          </div>
        </div>
        <div>
          <div>
            <input
              className="inputUser1"
              placeholder="Escriba su usuario"
            ></input>
          </div>
          <div>
            <input
              className="inputUser2"
              placeholder="Escriba su password"
            ></input>
          </div>
        </div>
      </div>
      <div className="loginButton">
        <a href="../menu1">
          <img className="logInCup" src={imagenes.imgCup} alt="cup logIn" />
        </a>
      </div>
      <div className="googleButton">
          <GoogleButton />
      </div>
    </>
  );
};

export default InicioSesionMesero;
