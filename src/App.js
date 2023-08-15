import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import RecipeDetails from "./components/RecipeDetails"; // Importe o componente

function App() {
  return (
    <Router>
      <div className="App">
        <h1>Aplicativo de Receitas</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/receita/:uri" element={<RecipeDetails />} /> {/* Rota para os detalhes da receita */}
        </Routes>
      </div>
    </Router>
  );
}

export default App;