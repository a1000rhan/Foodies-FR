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

  const [categoryValue, setCategoryValue] = useState("Italian");
  const [chooseCato, setChooseCato] = useState([]);
  const [newCat, setNewCat] = useState("");

  const [ingValue, setIngValue] = useState("lemon");
  const [chooseIng, setChooseIng] = useState([]);
  const [newIngr, setNewIngr] = useState("");

  const [recipe, setRecipe] = useState({
    title: "",
    image: "",
    discerption: "",
    calories: "",
<<<<<<< HEAD
    category:[],
    ingredients: ["6203813e1e52e4e8912555ed"],
    amount: "",
=======
    category: "",
    ingredients: "",
>>>>>>> 25967478b7cb692f40eab5b62a4bdb961d9eebaa
  });

  const handleChange = (event) => {
    setRecipe({ ...recipe, [event.target.name]: event.target.value });
  };
  const handleSubmit = (event) => {
    event.preventDefault();

    recipeStore.createRecipe(recipe);

    setIsOpen(false);
  };

  //Add to Category Array
  const handleSelectCat = (event) => {
    setCategoryValue(event.target.value);
  };
  const addToCategory = (event) => {
    event.preventDefault();
    const myCato = categoryStore.category.find(
      (ca) => categoryValue === ca.title
    );
    setChooseCato([...chooseCato, myCato.title]);

    setRecipe({ ...recipe, category: myCato._id });
    //add
  };

  //Add New Category
  const handleChangeNewCat = (event) => {
    const newData = event.target.value;
    setNewCat({ title: newData });
  };
  const addNewCategory = (event) => {
    event.preventDefault();
    categoryStore.createCategory(newCat);
  };

  //Add to Ingerdient Array
  const handleChangeIng = (event) => {
    setIngValue(event.target.value);
  };
  const addToIngredient = (event) => {
    event.preventDefault();
    const myIng = ingredientStore.ingredient.find(
      (Ing) => ingValue === Ing.name
    );
    setChooseIng([...chooseIng, myIng.name]);
    //add
    setRecipe({ ...recipe, ingredients: myIng._id });
  };

  //add New Ingerdient
  const handleChangeNewIng = (event) => {
    const newIngr = event.target.value;
    setNewIngr({ name: newIngr });
  };
  const addNewIngrediants = (event) => {
    event.preventDefault();
    ingredientStore.createIngredient(newIngr);
  };
<<<<<<< HEAD
  const handleSelect = (event) => {
    setValue ({...categoryStore.category,category:event.target.value})
    
  }
=======
>>>>>>> 25967478b7cb692f40eab5b62a4bdb961d9eebaa

  const handleImage = (event) => {
    setRecipe({ ...recipe, image: event.target.files[0] });
  };
  const cat = categoryStore.category.map((ca) => <option>{ca.title}</option>);
  const ing = ingredientStore.ingredient.map((ca) => (
    <option value={ca.name}>{ca.name}</option>
  ));
  const categoryList = chooseCato.map((cato) => (
    <div>
      <i>{cato}</i>
    </div>
  ));
  const ingredientsList = chooseIng.map((ingr) => (
    <div>
      <i>{ingr}</i>
    </div>
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
              <Form.Select
                name="category"
                type="text"
                onChange={handleSelectCat}
              >
                {cat}
              </Form.Select>
              <button className="btn-regster" onClick={addToCategory}>
                Add Category
              </button>

              <lable>Category Name:</lable>
              <ol>{categoryList}</ol>
              <div>
                <button className="btn-regster" onClick={addNewCategory}>
                  New Category
                </button>
<<<<<<< HEAD
                <Form onSubmit={handleSubmit}>
                  <lable>
                    Category Name:  
                    <input type= "text" value={cato} onChange={handleChange}/>
                  </lable>
                  <p>


                  </p>
                  <lable>
                    Category Type:
                    <input type= "text" value={cato} onChange={handleChange}/>
                  </lable>
                </Form>
              <p></p>
=======
                <input
                  placeholder="type new category"
                  name="newCat"
                  onChange={handleChangeNewCat}
                />
              </div>
>>>>>>> 25967478b7cb692f40eab5b62a4bdb961d9eebaa
            </div>
            <div>
              <Form.Label>Ingredients</Form.Label>
              <Form.Select
                name="ingredients"
                type="text"
                onChange={handleChangeIng}
              >
                {ing}
              </Form.Select>
              <button className="btn-regster" onClick={addToIngredient}>
                Add Ingredients
              </button>
              <lable>Ingredients Name:</lable>
              <ol>{ingredientsList}</ol>
              <button className="btn-regster" onClick={addNewIngrediants}>
                New Ingredient
              </button>
              <input
                placeholder="type new Ingredient"
                name="newIng"
                onChange={handleChangeNewIng}
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

export default observer(RecipeModal);
