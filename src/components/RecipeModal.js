import React, { useState } from "react";
import { Modal, Form, FormControl } from "react-bootstrap";
import { MdFoodBank } from "react-icons/md";
import Categorie from "../Categories";

const RecipeModal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    discerption: "",
    calories: "",
    category: "",
    ingredjents: "",
    amount: "",
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    setIsOpen(false);
  };
  const addToCategory = (event) => {
    event.preventDefault();
    //add
  };
  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };
  const cat = Categorie.map((ca) => <option>{ca.name}</option>);

  return (
    <div>
      <button className="btn-reg btn-m" onClick={() => setIsOpen(true)}>
        + Add Repise
      </button>

      <Modal centered show={isOpen} onHide={() => setIsOpen(false)}>
        <Modal.Header closeButton>
          <Modal.Title>
            <MdFoodBank /> Recipe
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Label>Recipe Title </Form.Label>
            <Form.Control
              name="title"
              value={recipe.title}
              type="text"
              onChange={handleChange}
            />
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
              <Form.Label>descrption</Form.Label>
              <Form.Control
                name="calorie"
                type="text"
                value={recipe.description}
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Calories</Form.Label>
              <Form.Control
                name="calorie"
                type="text"
                value={recipe.calories}
                onChange={handleChange}
              />
            </div>
            <div>
              <Form.Label>Category</Form.Label>
              <Form.Select
                name="category"
                type="text"
                value={recipe.category}
                onChange={handleChange}
              >
                {cat}
              </Form.Select>
              <button className="btn-regster" onClick={addToCategory}>
                Add Category
              </button>
            </div>
            <div>
              <Form.Label>Ingredjents</Form.Label>
              <Form.Control
                name="ingredjents"
                type="text"
                value={recipe.ingredjents}
                onChange={handleChange}
              />
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

export default RecipeModal;
