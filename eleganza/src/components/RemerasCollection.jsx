import React from "react";
import { GrClose } from "react-icons/gr";
import remera1 from "../assets/img/remerasvarias.png";
import remera2 from "../assets/img/remerasvarias1.png";

export default function RemerasCollection({ handleCerrarModalRemeras }) {
  return (
    <div className="colleccionremerascontainer">
      <div className="remerasCollection">
        <div className="imagen1">
          <img src={remera1} alt="" />
        </div>
        <div className="imagen1">
          <img src={remera2} alt="" />
        </div>
      </div>
      <div className="button-cerrar-remeras">
        <button
          onClick={handleCerrarModalRemeras}
          className="button-cerrar-remeras"
        >
          <GrClose />
        </button>
      </div>
    </div>
  );
}
