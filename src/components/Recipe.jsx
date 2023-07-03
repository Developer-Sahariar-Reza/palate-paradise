import React from "react";
import Button from "./Button";
import { Link, useNavigate } from "react-router-dom";

const Recipe = ({ recipe }) => {
  const { idMeal, strMeal, strCategory, strArea, strMealThumb, strYoutube } =
    recipe;
  const navigate = useNavigate();
  const handleShowInstruction = () => {
    navigate(`/recipe/${idMeal}`);
  };
  console.log(idMeal);
  return (
    <div className="card-box">
      <div>
        <img src={strMealThumb} alt="" className="card-img" />
      </div>
      <div>
        <h1 className="food-name">{strMeal}</h1>
        <p className="food-category">{strCategory}</p>
        <p className="food-area">{strArea}</p>
        <div className="mb-5" onClick={handleShowInstruction}>
          <Button>Food Instruction</Button>
        </div>
        <div className="mb-5">
          <Button>
            <Link to={strYoutube}>Watch Video in Youtube</Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Recipe;
