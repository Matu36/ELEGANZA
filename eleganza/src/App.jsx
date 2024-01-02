import { useState } from "react";
import CAMISA5 from "../src/assets/img/CAMISA5.jpg";
import NavBar from "./components/navbar";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import Footer from "./pages/footer";
import ELEGANZA from "../src/assets/img/ELEGANZA.png";

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
      </div>
      {filteredCamisas.length > 0 ? (
        <div className="cards-container">
          {filteredCamisas.map((camisa) => (
            <Card key={camisa.id} {...camisa} />
          ))}
        </div>
      ) : (
        <div className="camisasContainer">
          <img src={CAMISA5} alt="camisas" className="camisasImg" />
        </div>
      )}

      <Footer />
    </div>
  );
}
export default App;
