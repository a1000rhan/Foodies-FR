import { makeAutoObservable } from "mobx";
import api from "./api";

class RecipeStore {
  recipe = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchRecipe = async () => {
    try {
      const response = await api.get("/recipes");
      this.recipe = response.data;
    } catch (e) {
      console.log(e);
    }
  };
  createRecipe = async (newRecipe) => {
    console.log(
      "🚀 ~ file: recipeStore.js ~ line 18 ~ RecipeStore ~ createRecipe= ~ newRecipe",
      newRecipe
    );

    try {
      const formData = new FormData();
      for (const key in newRecipe) {
        formData.append(key, newRecipe[key]);
        console.log(
          "🚀 ~ file: recipeStore.js ~ line 27 ~ RecipeStore ~ createRecipe= ~ key",
          key
        );
        console.log(
          "🚀 ~ file: recipeStore.js ~ line 26 ~ RecipeStore ~ createRecipe= ~ newRecipe[key]",
          newRecipe[key]
        );
      }

      const response = await api.post(`/recipes`, formData);

      this.recipe.push(response.data);
    } catch (e) {
      alert("cannot create new rcipe");
      console.log(e);
    }
    // to do : call BE to create a rcipe
  };
}
const recipeStore = new RecipeStore();
recipeStore.fetchRecipe();

export default recipeStore;
