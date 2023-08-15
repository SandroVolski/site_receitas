import React, { useState, useEffect } from "react";
import { useParams, useLocation } from "react-router-dom"; // Importe o useLocation aqui
import axios from "axios";
import NutritionInfo from "./NutritionInfo";

const RecipeDetails = () => {
  const { uri } = useParams(); // Obtém o URI da rota
  const [recipeDetails, setRecipeDetails] = useState(null);
  const location = useLocation();
  const recipes = location.state.recipes;

  useEffect(() => {
    const apiKey = "009bd02f994854293ae55100b6ca6fdd";
    const apiUrl = `https://api.edamam.com/search?r=${encodeURIComponent(uri)}&app_id=c0d59e65&app_key=009bd02f994854293ae55100b6ca6fdd`;

    axios.get(apiUrl)
      .then(response => {
        const [fetchedRecipe] = response.data;
        setRecipeDetails(fetchedRecipe);
      })
      .catch(error => {
        console.error("Erro ao buscar detalhes da receita:", error);
      });
  }, [uri]);

  if (!recipeDetails) {
    return <div>Carregando...</div>;
  }

  return (
    <div className="recipe-details">
      <h2>{recipeDetails.label}</h2>
      <img src={recipeDetails.image} alt={recipeDetails.label} />

      <div className="recipe-content">
        <div className="ingredients">
          <h3>Ingredientes:</h3>
          <ul>
            {recipeDetails.ingredients.map((ingredient, index) => (
              <li key={index}>{ingredient.text}</li>
            ))}
          </ul>
        </div>

        <div className="nutrition-info">
          <ul>
            <NutritionInfo recipe={recipeDetails} />
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetails;
