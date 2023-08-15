import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const RecipeApp = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    const apiKey = "009bd02f994854293ae55100b6ca6fdd";
    const apiUrl = `https://api.edamam.com/search?q=chicken&app_id=c0d59e65&app_key=009bd02f994854293ae55100b6ca6fdd`;

    // Fazendo a chamada à API
    axios.get(apiUrl)
      .then(response => {
        // Processar os dados da resposta
        const fetchedRecipes = response.data.hits;
        setRecipes(fetchedRecipes);
      })
      .catch(error => {
        console.error("Erro ao buscar receitas:", error);
      });
  }, []);

  return (
    <div>
      <h1>Lista de Receitas</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <h2>{recipe.recipe.label}</h2>
            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
            <Link to={`/receita/${encodeURIComponent(recipe.recipe.uri)}`}>
              Ver Detalhes
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecipeApp;
