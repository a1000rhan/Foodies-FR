import SearchBar from "./SearchBar";
import { useState } from "react";
import Recipes from "./Recipes";

const RecipeList = () => {
  const [query, setQuery] = useState("");
  const resipelist = Recipes.filter((recipe) =>
    recipe.core.toLocaleLowerCase().includes(query.toLowerCase())
  ).map((recipe) => <RecipeList recipe={recipe} key={recipe.id} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div>{resipelist}</div>
    </>
  );
};

export default WandList;
