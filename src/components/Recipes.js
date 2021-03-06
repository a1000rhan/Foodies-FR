import React from "react";
import RecipeModal from "./RecipeModal";
import recipeStore from "../store/recipeStore";
import RecipeItem from "./RecipeItem";
import { observer } from "mobx-react";
import { useState } from "react";
import SearchBar from "./SearchBar";
import categoryStore from "../store/categoryStore";

const Recipes = () => {
  const [query, setQuery] = useState("");
  const [list, setList] = useState("all");
  if (categoryStore.loading || recipeStore.loading) return <h1>loading</h1>;
  const cat = categoryStore.category.map((ca) => <option>{ca.title}</option>);

  const recpielist = recipeStore.recipe
    .filter((recipe) =>
      recipe.title.toLowerCase().includes(query.toLowerCase())
    )
    .filter((fCat) => {
      if (list === "all") {
        return fCat;
      } else if (fCat.category.title === list) {
        return list;
      }
    })
    .map((recipe) => <RecipeItem recipe={recipe} key={recipe} />);

  const categorySelect = (event) => {
    setList(event.target.value);
  };
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
            <select
              name="categories"
              className="checklist"
              id="categories"
              onChange={categorySelect}
            >
              <option value="all">All</option>
              {cat}
            </select>
            <RecipeModal />
          </div>
          <div className="d-flex justify-content-start search">
            <SearchBar setQuery={setQuery} />
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
