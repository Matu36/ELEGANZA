import React from "react";

const Card = ({ id, marca, talle, precio, imagen }) => {
  return (
    <div className="card" id={id}>
      <img src={imagen} alt="" className="card-image" />
      <div className="card-content">
        <h2>{marca}</h2>
        <p>Talle: {talle}</p>
        <p>Precio: $ {precio}</p>
      </div>
      <br />
      <div>
        <button className="comprar"> Comprar </button>
      </div>
    </div>
  );
};

export default Card;
