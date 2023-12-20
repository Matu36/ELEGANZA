import React from "react";
import "../App.css";
import ELEGANZA from "../assets/img/ELEGANZA.png";

export default function NavBar({ onSelectMarca, onInicio }) {
  const handleMarcaClick = (marca) => {
    onSelectMarca(marca);
  };

  return (
    <div className="navbar">
      <button className="marca" onClick={() => onInicio()}>
        Inicio
      </button>
      <button
        className="marca"
        onClick={() => handleMarcaClick("Todas las marcas")}
      >
        Todas las marcas
      </button>
      <button className="marca" onClick={() => handleMarcaClick("Tommy")}>
        Tommy
      </button>
      <button className="marca" onClick={() => handleMarcaClick("GAP")}>
        GAP
      </button>
      <button className="marca" onClick={() => handleMarcaClick("POLO")}>
        Polo
      </button>
      <button className="marca" onClick={() => handleMarcaClick("Kevingston")}>
        Kevingston
      </button>
      <img src={ELEGANZA} alt="" className="footerimage" />
    </div>
  );
}
