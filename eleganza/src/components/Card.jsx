import React from "react";

const Card = ({ id, marca, talle, precio, imagen }) => {
  const handleComprarClick = () => {
    const productoComprado = {
      id,
      marca,
      talle,
      precio,
      imagen,
    };

    const carrito = JSON.parse(localStorage.getItem("carrito")) || [];

    console.log(carrito);

    carrito.push(productoComprado);

    localStorage.setItem("carrito", JSON.stringify(carrito));

    alert("Producto añadido al carrito");
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
    </div>
  );
};

export default Card;
