import React from "react";
import { useLoaderData } from "react-router-dom";
import Recipe from "./Recipe";

const Recipes = () => {
  const recipes = useLoaderData();
  return (
    <div className="md:my-40 my-96 container">
      <div>
        {recipes.meals.map((recipe) => (
          <Recipe key={recipe.idMeal} recipe={recipe} />
        ))}
      </div>
    </div>
  );
};

export default Recipes;
