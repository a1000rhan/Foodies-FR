import { makeAutoObservable } from "mobx";
import api from "./api";

class CategoryStore {
  category = [];
  loading = true;
  constructor() {
    makeAutoObservable(this, {});
  }
  fetchCategory = async () => {
    try {
      const response = await api.get("/category");
      this.category = response.data;
      this.loading = false;
    } catch (e) {
      console.log(e);
    }
  };

  createCategory = async (addNewCategory) => {
    try {
      const response = await api.post("/category", addNewCategory);
      this.loading = false;
      this.category.push(response.data);
    } catch (e) {
      console.log(e);
    }
  };
}

const categoryStore = new CategoryStore();
categoryStore.fetchCategory();

export default categoryStore;
