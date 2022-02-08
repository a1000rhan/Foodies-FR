import React from "react";

const RecipeItem = ({ recipe }) => {
  return (
    <div>
      <div className="post">
        <div className="img-post">
          <img className="img-size-recipe" src={recipe.image} alt="" />
        </div>
        <h3 className="m-2">{recipe.title}</h3>
        <div className="owner">
          <img
            className="avator"
            src="https://upload.wikimedia.org/wikipedia/commons/a/a0/Pierre-Person.jpg"
            alt="owner"
          />
          <h6 className="owner-name">{recipe.owner}</h6>
        </div>
      </div>
    </div>
  );
};

export default RecipeItem;
