import { useState } from "react";
import CAMISA5 from "../src/assets/img/CAMISA5.jpg";
import NavBar from "./components/navbar";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import Footer from "./pages/footer";
import ELEGANZA from "../src/assets/img/ELEGANZA.png";
import SliderModels from "./components/SliderModels";

function App() {
  const [selectedMarca, setSelectedMarca] = useState();
  const filteredCamisas =
    selectedMarca === "Todas las marcas"
      ? camisas
      : camisas.filter((c) => c.marca === selectedMarca);

  const handleInicioClick = () => {
    setSelectedMarca(null);
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
        </div>
      </div>

      <div className="cards-container" id="cards">
        {filteredCamisas.map((camisa) => (
          <Card key={camisa.id} {...camisa} />
        ))}
      </div>

      <div className="camisasContainer">
        <img src={CAMISA5} alt="camisas" className="camisasImg" />
      </div>
      {/* <SliderModels /> */}
      <Footer />
      <br />
      <span className="copy">
        Copyright © 2024 | Eleganza Shirts Todos los derechos reservados
      </span>
    </div>
  );
}
export default App;
