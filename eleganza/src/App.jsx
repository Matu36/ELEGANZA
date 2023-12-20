import { useState } from "react";
import CAMISA5 from "../src/assets/img/CAMISA5.jpg";
import NavBar from "./components/navbar";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";
import Footer from "./pages/footer";

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
      <NavBar onSelectMarca={setSelectedMarca} onInicio={handleInicioClick} />
      <br />
      {filteredCamisas.length > 0 ? (
        <div className="cards-container">
          {filteredCamisas.map((camisa) => (
            <Card key={camisa.id} {...camisa} />
          ))}
        </div>
      ) : (
        <div className="CAMISAS">
          <img src={CAMISA5} alt="camisas" className="camisas" />
        </div>
      )}
      <br />
      <br />
      <Footer />
    </div>
  );
}
export default App;
