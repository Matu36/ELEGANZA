import React from "react";
import { GrClose } from "react-icons/gr";

export default function CamisasCollection({ handleCerrarModalCamisas }) {
  return (
    <div>
      <button onClick={handleCerrarModalCamisas} className="button-cerrar">
        <GrClose />
      </button>
      Holissss
    </div>
  );
}
