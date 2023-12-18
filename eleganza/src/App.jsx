import { useState } from "react";
import ELEGANZA from "../src/assets/img/ELEGANZA.png";
import NavBar from "./components/navbar";
import { camisas } from "../src/utils/Camisas";
import Card from "./components/Card";

function App() {
  const [selectedMarca, setSelectedMarca] = useState();
  const filteredCamisas =
    selectedMarca === "Todas las marcas"
      ? camisas
      : camisas.filter((c) => c.marca === selectedMarca);

  return (
    <div className="landing">
      <NavBar onSelectMarca={setSelectedMarca} />
      <br />
      <div className="cards-container">
        {filteredCamisas.map((camisa) => (
          <Card key={camisa.id} {...camisa} />
        ))}
      </div>
      <br />
      <div className="ELEGANZA">
        <img src={ELEGANZA} alt="camisas" className="camisas" />
      </div>
    </div>
  );
}
export default App;
