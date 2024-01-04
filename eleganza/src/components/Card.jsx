import React, { useState, useEffect } from "react";

const Card = ({ id, marca, talle, precio, imagen }) => {
  const [showAlert, setShowAlert] = useState(false);

  const handleComprarClick = () => {
    const productoComprado = {
      id,
      marca,
      talle,
      precio,
      imagen,
    };

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    carrito.push(productoComprado);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    setShowAlert(true);

    setTimeout(() => {
      setShowAlert(false);
    }, 2000);
  };

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
        <button className="comprar" onClick={handleComprarClick}>
          {" "}
          Comprar{" "}
        </button>
      </div>
      {showAlert && (
        <div className="alert-container">
          <div className="alert-message">
            El producto ha sido añadido al carrito
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
