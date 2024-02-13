import React from "react";
import { GrClose } from "react-icons/gr";
import Camisani from "../assets/img/sweater.png";
import Camisani2 from "../assets/img/swater2.png";
import freak from "../assets/img/freak.png";
import freak2 from "../assets/img/freak1.png";
import moño from "../assets/img/moño.png";
import moño1 from "../assets/img/moño1.png";

export default function CamisasCollection({ handleCerrarModalCamisas }) {
  return (
    <div className="colleccionremerascontainer">
      <div className="remerasCollection">
        <div className="imagen1">
          <img src={freak} alt="" />
        </div>
        <div className="imagen1">
          <img src={freak2} alt="" />
        </div>
      </div>

      <div className="button-cerrar-remeras">
        <button
          onClick={handleCerrarModalCamisas}
          className="button-cerrar-remeras"
        >
          <GrClose />
        </button>
      </div>
    </div>
  );
}
