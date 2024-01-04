import { useState } from "react";
import CAMISA5 from "../src/assets/img/CAMISA5.jpg";
import NavBar from "./components/navbar";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import Footer from "./pages/footer";
import ELEGANZA from "../src/assets/img/ELEGANZA.png";
import SliderModels from "./components/SliderModels";
import miami from "../src/assets/img/miami.jpg";
import AnimatedWord from "./components/Letras";
import AboutUs from "./components/AboutUs";

function App() {
  const [selectedMarca, setSelectedMarca] = useState();
  const [modal, setModal] = useState(false);

  const filteredCamisas =
    selectedMarca === "Todas las marcas"
      ? camisas
      : camisas.filter((c) => c.marca === selectedMarca);

  const handleInicioClick = () => {
    setSelectedMarca(null);
  };

  const handleMostrarModalAbout = () => {
    setModal(true);
  };

  const handleCerrarModalAbout = () => {
    setModal(false);
  };

  return (
    <div className="root">
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
          <h1>On Sale !</h1>
          <h6 style={{ marginTop: "-4rem" }}>
            <AnimatedWord word="Ropa original de marca" />
          </h6>
        </div>
      </div>

      <SliderModels />
      <div className="cards-container" id="cards">
        {filteredCamisas.map((camisa) => (
          <Card key={camisa.id} {...camisa} />
        ))}
      </div>

      <div className="camisasContainer">
        <img src={CAMISA5} alt="camisas" className="camisasImg" />
        <img src={miami} alt="miami" className="camisasImg" />
      </div>

      <Footer handleMostrarModalAbout={handleMostrarModalAbout} />
      <br />
      {modal && (
        <div className="modal">
          <div className="modal-content">
            <AboutUs handleCerrarModalAbout={handleCerrarModalAbout} />
          </div>
        </div>
      )}
      <span className="copy">
        Copyright © 2024 | Eleganza Shirts Todos los derechos reservados
      </span>
    </div>
  );
}
export default App;
