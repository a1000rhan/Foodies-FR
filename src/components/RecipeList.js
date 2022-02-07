import SearchBar from "./SearchBar";
import { useState } from "react";
import Recipes from "./Recipes";

const WandList = () => {
  const [query, setQuery] = useState("");
  const resipelist = Recipes.filter((recipe) =>
    recipe.core.toLocaleLowerCase().includes(query.toLowerCase())
  ).map((wand) => <RecipeList recipe={recipe} key={recipe} />);
  return (
    <>
      <SearchBar setQuery={setQuery} />
      <div>{resipelist}</div>
    </>
  );
};

export default WandList;
