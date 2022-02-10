import { makeAutoObservable } from "mobx";
import api from "./api";

class IngredientStore {
  ingredient = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchIngredient = async () => {
    try {
      const response = await api.get("/ingredient");
      this.ingredient = response.data;
    } catch (e) {
      console.log(e);
    }
  };

  createIngredient = async (addNewIng) => {
    try {
      const response = api.post("/ingredient", addNewIng);
      this.ingredient.push(response.data);
    } catch (e) {
      console.log(e);
    }
  };
  //   createRecipe = async (newRecipe) => {
  //     try {
  //       const response = await api.post("/recipies", newRecipe);

  //       this.recipe.push(response.data);
  //     } catch (e) {
  //       alert("cannot create new rcipe");
  //       console.log(e);
  //     }
  //     // to do : call BE to create a rcipe
  //   };
}
const ingredientStore = new IngredientStore();
ingredientStore.fetchIngredient();

export default ingredientStore;
