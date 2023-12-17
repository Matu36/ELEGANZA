import React from "react";
import "../App.css";

export default function NavBar({ onSelectMarca }) {
  const handleMarcaClick = (marca) => {
    onSelectMarca(marca);
  };

  return (
    <div>
      <button
        className="marca"
        onClick={() => handleMarcaClick("Todas las marcas")}
      >
        Todas las marcas
      </button>
      <button className="marca" onClick={() => handleMarcaClick("tommy")}>
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
