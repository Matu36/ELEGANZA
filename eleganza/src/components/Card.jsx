import React from "react";

const Card = ({ id, marca, talle, precio, imagen }) => {
  return (
    <div className="card" id={id}>
      <img src={imagen} alt="" />
      <h2>{marca}</h2>
      <p>Talle: {talle}</p>

      <p>Precio: $ {precio}</p>
    </div>
  );
};

export default Card;
