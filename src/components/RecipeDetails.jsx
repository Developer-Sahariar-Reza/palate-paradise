import React from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import Button from "./Button";

const RecipeDetails = () => {
  const recipe = useLoaderData();
  const navigate = useNavigate();
  const handleGoBack = () => {
    navigate(-1);
  };
  return (
    <div className="md:my-40 my-96 container">
      <img
        src={recipe.meals[0].strMealThumb}
        alt=""
        className="w-[400px] border-2 rounded-lg block mx-auto mb-10"
      />
      <h1 className="header-text text-4xl font-bold mb-8">
        {recipe.meals[0].strMeal}
      </h1>
      <p className="text-primary text-2xl font-semibold mb-8">
        Instructions: {recipe.meals[0].strInstructions}
      </p>
      <div onClick={handleGoBack}>
        <Button>Go Back</Button>
      </div>
    </div>
  );
};

export default RecipeDetails;
