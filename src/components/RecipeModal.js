import React, { useState } from "react";
import { Modal, Form, FormControl } from "react-bootstrap";
import { MdFoodBank } from "react-icons/md";
import Categorie from "../Categories";
import Ingredients from "../Ingredients";
import authstore from "../store/authStore";
import recipeStore from "../store/recipeStore";
import { observer } from "mobx-react";
import categoryStore from "../store/categoryStore";
import ingredientStore from "../store/ingredientStore";

const RecipeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [value, setValue] = useState("");
  const cato = [];
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    discerption: "",
    calories: "",
    category: ["62034e97daa5696682932387"],
    ingredients: ["6203813e1e52e4e8912555ed"],
    amount: "",
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    const categoryId = categoryStore.category[1]._id;
    console.log(categoryId);
    recipeStore.createRecipe(recipe);
    setIsOpen(false);
  };
  const addToCategory = (event) => {
    event.preventDefault();
    cato.push(value);
    console.log(cato);
    //add
  };
  const addToIngredient = (event) => {
    event.preventDefault();
    //add
  };
  const handleSelect = (event) => {
    setValue({ ...categoryStore.category, category: event.target.value.name });
    console.log(event.target.value.name);
  };

  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };
  const cat = categoryStore.category.map((ca) => <option>{ca.title}</option>);
  const ing = ingredientStore.ingredient.map((ca) => (
    <option>{ca.name}</option>
  ));
  return (
    <div>
      {authstore.user ? (
        <button className="btn-reg btn-m" onClick={() => setIsOpen(true)}>
          + Add Recipes
        </button>
      ) : (
        ""
      )}

      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <MdFoodBank /> Recipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Recipe Title </Form.Label>
            <Form.Control name="title" type="text" onChange={handleChange} />
            <div>
              <Form.Label>Image </Form.Label>
              <FormControl
                name="image"
                type="file"
                onChange={handleImage}
                placeholder="Image"
              />
            </div>
            <div>
              <Form.Label>Descrption</Form.Label>
              <Form.Control
                name="description"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Calories</Form.Label>
              <Form.Control
                name="calorie"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Category</Form.Label>
              <Form.Select name="category" type="text" onChange={handleSelect}>
                {cat}
              </Form.Select>
              <button className="btn-regster" onClick={addToCategory}>
                Add Category
              </button>
              <Form onSubmit={handleSubmit}>
                <lable>
                  Category Name:
                  <input type="text" value={cato} onChange={handleChange} />
                </lable>
                <lable>
                  Category Type:
                  <input type="text" value={cato} onChange={handleChange} />
                </lable>
              </Form>
            </div>
            <div>
              <Form.Label>Ingredients</Form.Label>
              <Form.Select
                name="ingredients"
                type="text"
                onChange={handleChange}
              >
                {ing}
              </Form.Select>
              <button className="btn-regster" onClick={addToIngredient}>
                Add Ingredients
              </button>
            </div>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <div>
            <button className="btn-regster" onClick={handleSubmit}>
              Add Recipe
            </button>
          </div>
        </Modal.Footer>
      </Modal>
    </div>
  );
};

export default observer(RecipeModal);
