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
    try {
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
