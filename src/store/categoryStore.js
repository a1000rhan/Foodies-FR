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

  createCategory = async (addNewCategory) => {
    try {
      const response = api.post("/category", addNewCategory);
      this.category.push(response.data);
    } catch (e) {
      console.log(e);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategory();

export default categoryStore;
