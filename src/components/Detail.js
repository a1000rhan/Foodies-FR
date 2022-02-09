import React from "react";
import { Link, useParams } from "react-router-dom";
import recipeStore from "../store/recipeStore";

const Detail = () => {
  const { slug } = useParams();
  const recipe = recipeStore.recipe.find(
    (onereicpe) => onereicpe.slug === slug
  );
  const ing = recipe.ingredients.map((inger) => <p>{inger} | </p>);
  return (
    <div>
      <h1 className="title-page">D E T I A L S</h1>
      <div className="header-dark">
        <div className="header-detail"></div>
      </div>
      <div className="in-body-detail">
        <div className="img-detail">
          <img className="img-size" src={recipe.image} alt="food" />
        </div>

        <div className="detail-title">
          <hr />
          <h1>{recipe.title}</h1>
        </div>
        <div className="user-info">
          <div className="img-user">
            <img
              className="user-in"
              alt="avatar"
              src=""/>
          </div>

          <h5>{recipe.owner.username}</h5>
        </div>
        <div className="ingredients">
          <hr />
          <h2>Ingredients</h2>

          <div className="ing-el">{ing}</div>
        </div>
        <div className="descption">
          <h2>Discretions</h2>
          <p>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry’s standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum
          </p>
        </div>
        <div className="back">
          <Link to="/recipes">
            <button className="btn-back">Back</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Detail;
