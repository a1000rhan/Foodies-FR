import React from "react";

import RecipeModal from "./RecipeModal";
import recipeStore from "../store/RecipeStore";
import RecpieItem from "./RecpieItem";

const Recipes = () => {
  // const catogory = Catogory.map((e) => e);
  const recpiesList = recipeStore.recipe.map((recpie) => (
    <RecpieItem recpie={recpie} />
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
              <option value="lunch">Lunch</option>
              <option value="breakfast">Breakfast</option>
            </select>
            <RecipeModal />
          </div>
          <div className="posts">{recpiesList}</div>
        </div>
      </div>
    </div>
  );
};

export default Recipes;
