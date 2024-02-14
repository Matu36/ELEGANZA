import { useState, useEffect } from "react";
import CAMISA5 from "../src/assets/img/CAMISA5.jpg";
import NavBar from "./components/Navbar";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import Footer from "./pages/Footer";
import ELEGANZA from "../src/assets/img/ELEGANZA.png";
import SliderModels from "./components/SliderModels";
import foto from "../src/assets/img/foto1.png";
import AnimatedWord from "./components/Letras";
import AboutUs from "./components/AboutUs";
import CarritoModal from "./components/CarritoModal";
import { FiShoppingCart } from "react-icons/fi";
import Contact from "./components/Contact";
import CamisasCollection from "./components/CamisasCollection";
import RemerasCollection from "./components/RemerasCollection";

function App() {
  const [selectedMarca, setSelectedMarca] = useState();
  const [modal, setModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [modalCarrito, setModalCarrito] = useState(false);
  const [carritoC, setCarritoC] = useState(0);
  const [contact, setContact] = useState(false);
  const [remerasCollection, setRemerasCollection] = useState(false);
  const [camisasCollection, setCamisasCollection] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 0;
      setScrolled(isScrolled);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const filteredCamisas =
    selectedMarca === "Todas las marcas"
      ? camisas
      : camisas.filter((c) => c.marca === selectedMarca);

  const carrito = JSON.parse(localStorage.getItem("carrito")) || [];
  const carritoCount = carrito.length;

  const actualizarContadorCarrito = () => {
    const carritoActualizado =
      JSON.parse(localStorage.getItem("carrito")) || [];
    const count = carritoActualizado.length;
    setCarritoC(count);
  };

  const handleInicioClick = () => {
    setSelectedMarca(null);
  };

  const handleMostrarModalRemeras = () => {
    setRemerasCollection(true);
  };

  const handleCerrarModalRemeras = () => {
    setRemerasCollection(false);
  };

  const handleMostrarModalCamisas = () => {
    setCamisasCollection(true);
  };

  const handleCerrarModalCamisas = () => {
    setCamisasCollection(false);
  };

  const handleMostrarModalAbout = () => {
    setModal(true);
  };

  const handleCerrarModalAbout = () => {
    setModal(false);
  };

  const handleMostrarModalContact = () => {
    setContact(true);
  };

  const handleCerrarModalContact = () => {
    setContact(false);
  };

  const handleMostrarModalCarrito = () => {
    setModalCarrito(true);
    actualizarContadorCarrito();
  };

  const handleCerrarModalCarrito = () => {
    setModalCarrito(false);
    actualizarContadorCarrito();
  };

  useEffect(() => {
    actualizarContadorCarrito();
  }, []);

  return (
    <div className={`container ${scrolled ? "scrolled" : ""}`}>
      {modalCarrito && (
        <div>
          <CarritoModal
            actualizarContadorCarrito={actualizarContadorCarrito}
            handleCerrarModalCarrito={handleCerrarModalCarrito}
          />
        </div>
      )}

      <button className="shoppingButton" onClick={handleMostrarModalCarrito}>
        <FiShoppingCart />
        {carritoCount > 0 && <span className="badge">{carritoC}</span>}
      </button>
      <div className="eleganzaContainer">
        <div>
          <NavBar
            onSelectMarca={setSelectedMarca}
            onInicio={handleInicioClick}
          />
        </div>
        <div className="eleganzaImgContainer">
          <img src={ELEGANZA} alt="ELEGANZA" />
        </div>

        <div className="onSale">
          <h1>On Sale!</h1>
          <h6 style={{ marginTop: "-4rem" }}>
            <AnimatedWord word="Ropa original de marca" />
          </h6>
        </div>
      </div>
      <div className="cards-container" id="cards">
        {filteredCamisas.map((camisa) => (
          <Card
            key={camisa.id}
            {...camisa}
            actualizarContadorCarrito={actualizarContadorCarrito}
          />
        ))}
      </div>
      <div className="sliderContainer">
        <SliderModels />
      </div>

      <div className="camisasContainer">
        <img src={foto} alt="foto" className="camisasImg" />
      </div>

      <Footer
        handleMostrarModalAbout={handleMostrarModalAbout}
        handleMostrarModalContact={handleMostrarModalContact}
        handleMostrarModalRemeras={handleMostrarModalRemeras}
        handleMostrarModalCamisas={handleMostrarModalCamisas}
      />
      <br />
      {contact && (
        <div className="modal">
          {/* <div className="modal-content"> */}
          <Contact handleCerrarModalContact={handleCerrarModalContact} />
          {/* </div> */}
        </div>
      )}
      {modal && (
        <div className="modal">
          <AboutUs handleCerrarModalAbout={handleCerrarModalAbout} />
        </div>
      )}
      {camisasCollection && (
        <div className="modal">
          <CamisasCollection
            handleCerrarModalCamisas={handleCerrarModalCamisas}
          />
        </div>
      )}
      {remerasCollection && (
        <div className="modal">
          <RemerasCollection
            handleCerrarModalRemeras={handleCerrarModalRemeras}
          />
        </div>
      )}

      <span className="copy">
        Copyright © 2024 | Eleganza Shirts Todos los derechos reservados
      </span>
    </div>
  );
}
export default App;
