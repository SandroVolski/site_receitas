import React, { useState } from "react";

const AddRecipe = ({ onRecipeAdd }) => {
  const [title, setTitle] = useState("");
  const [ingredients, setIngredients] = useState("");
  const [instructions, setInstructions] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newRecipe = {
      title,
      ingredients: ingredients.split("\n"), // Transforma em array
      instructions: instructions.split("\n"), // Transforma em array
    };
    onRecipeAdd(newRecipe);
    setTitle("");
    setIngredients("");
    setInstructions("");
  };

  return (
    <div>
      <h2>Adicionar Nova Receita</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Título:
          <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        </label>
        <label>
          Ingredientes (um por linha):
          <textarea value={ingredients} onChange={(e) => setIngredients(e.target.value)} />
        </label>
        <label>
          Modo de Preparo (um por linha):
          <textarea value={instructions} onChange={(e) => setInstructions(e.target.value)} />
        </label>
        <button type="submit">Adicionar Receita</button>
      </form>
    </div>
  );
};

export default AddRecipe;
