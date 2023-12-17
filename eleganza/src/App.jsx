import { useState } from "react";
import CAMISA5 from "../src/assets/img/CAMISA5.jpg";
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

      <div className="cards-container">
        {filteredCamisas.map((camisa) => (
          <Card key={camisa.id} {...camisa} />
        ))}
      </div>

      <img src={CAMISA5} alt="camisas" className="camisas" />
    </div>
  );
}
export default App;
