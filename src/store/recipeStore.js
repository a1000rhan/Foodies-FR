import { makeAutoObservable } from "mobx";
import api from "./api";

class RecipeStore {
  recipe = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchRecipe = async () => {
    try {
      const response = await api.get("/recipes");
      this.recipe = response.data;
      this.loading = false;
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
          "🚀 ~ file: recipeStore.js ~ line 22 ~ RecipeStore ~ createRecipe= ~ newRecipe[key]",
          newRecipe[key]
        );
      }

      const response = await api.post(`/recipes`, newRecipe);

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
