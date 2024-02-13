import React from "react";
import CAMISA6 from "../assets/img/CAMISA6.jpg";

export default function Footer({
  handleMostrarModalAbout,
  handleMostrarModalContact,
  handleMostrarModalRemeras,
  handleMostrarModalCamisas,
}) {
  return (
    <div className="footer">
      <div className="footerSpan">
        <span className="spantitle">Colección</span>
        <button onClick={handleMostrarModalCamisas} className="spanbody">
          Camisas
        </button>
        <button onClick={handleMostrarModalRemeras} className="spanbody">
          Remeras
        </button>
      </div>
      <div className="footerSpan">
        <span className="spantitle">Atención al cliente</span>
        <button onClick={handleMostrarModalContact} className="spanbody">
          Contacto
        </button>
      </div>
      <div className="footerSpan">
        <span className="spantitle">Institucional</span>
        <button onClick={handleMostrarModalAbout} className="spanbody">
          Sobre Nosotros
        </button>
      </div>
      <img src={CAMISA6} className="footerImage" />
    </div>
  );
}
