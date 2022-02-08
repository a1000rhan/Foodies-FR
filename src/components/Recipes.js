import React from "react";
import { Link } from "react-router-dom";
import Categorie from "../Categories";
import RecipeModal from "./RecipeModal";
import recipeStore from "../store/recipeStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";

const Recipes = () => {
  const cat = Categorie.map((ca) => <option>{ca.name}</option>);
  const recpielist = recipeStore.recipe.map((recipe) => (
    <RecipeItem recipe={recipe} />
  ));
  return (
    <div>
      <h1 className="title-page">R E C I P E S </h1>
      <div className="header-dark">
        <div className="header-menu"></div>
      </div>
      <div className="in-body-menu">
        <div>
          <div className="tools">
            <h4 className="cat">Categories</h4>
            <select name="categories" className="checklist" id="categories">
              {cat}
            </select>
            <RecipeModal />
          </div>
          <div className="posts">
            {/* card */}
            {recpielist}
          </div>
        </div>
      </div>
    </div>
  );
};

export default observer(Recipes);
