import { makeAutoObservable } from "mobx";
import api from "./api";

class CategoryStore {
  category = [];
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchCategory = async () => {
    try {
      const response = await api.get("/category");
      this.category = response.data;
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
const categoryStore = new CategoryStore();
categoryStore.fetchCategory();

export default categoryStore;