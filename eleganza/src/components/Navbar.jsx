import React from "react";
import "../App.css";

export default function NavBar({ onSelectMarca, onInicio }) {
  const handleMarcaClick = (marca) => {
    onSelectMarca(marca);
  };

  return (
    <div className="navbar">
      <button className="marca" onClick={() => onInicio()}>
        Inicio
      </button>
      <br />
      <br />
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
    </div>
  );
}
