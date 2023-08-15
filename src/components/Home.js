// https://spoonacular.com/recipes/instant-pot-buffalo-garlic-butter-wings-1747683

import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import AddRecipe from "./AddRecipe";


const Home = () => {
  const [recipes, setRecipes] = useState([]);

  const handleRecipeAdd = (newRecipe) => {
    setRecipes([...recipes, newRecipe]);
  };

  useEffect(() => {
    const apiKey = "009bd02f994854293ae55100b6ca6fdd";
    const apiUrl = `https://api.edamam.com/search?q=chicken&app_id=c0d59e65&app_key=009bd02f994854293ae55100b6ca6fdd`;

    axios.get(apiUrl)
      .then(response => {
        const fetchedRecipes = response.data.hits;
        setRecipes(fetchedRecipes);
      })
      .catch(error => {
        console.error("Erro ao buscar receitas:", error);
      });
  }, []);

  return (
    <div className="home-container">
      <div className="banner">
      <img src={process.env.PUBLIC_URL + "/banner-image.jpg"} alt="Banner" />
        <h1>Receitas Deliciosas</h1>
      </div>
      {/* Restante do conteúdo */}
    

      
      <h2>Lista de Receitas</h2>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index}>
            <Link to={`/receita/${encodeURIComponent(recipe.recipe.uri)}`}>
              {recipe.recipe.label}
            </Link>
          </li>
        ))}
      </ul>
      <AddRecipe onRecipeAdd={handleRecipeAdd} />
    </div>
  );
};

export default Home;