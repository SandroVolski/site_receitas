// src/components/NutritionInfo.js

import React from "react";

const NutritionInfo = ({ recipe }) => {
  const { totalNutrients } = recipe;
  
  return (
    <div>
      <h3>Informações Nutricionais:</h3>
      <ul>
        {Object.keys(totalNutrients).map((nutrientName) => (
          <li key={nutrientName}>
            {totalNutrients[nutrientName].label}:{" "}
            {totalNutrients[nutrientName].quantity.toFixed(2)}{" "}
            {totalNutrients[nutrientName].unit}
          </li>
        ))}
      </ul>
      {/* Adicione o código para listar os ingredientes aqui */}
    </div>
  );
};

export default NutritionInfo;
