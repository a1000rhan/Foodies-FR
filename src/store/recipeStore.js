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
<<<<<<< HEAD
      const response = await api.post("/recipes", newRecipe);
=======
      const response = await api.post(`/recipes`, newRecipe);
>>>>>>> 6898128cc7d867abfef5434e35fc3bebb469b3a6

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
