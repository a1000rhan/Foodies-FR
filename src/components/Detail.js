import React from "react";
import { Link } from "react-router-dom";

const Detail = () => {
  return (
    <div>
      <h1 className="title-page">D E T I A L S</h1>
      <div className="header-dark">
        <div className="header-detail"></div>
      </div>
      <div className="in-body-detail">
        <div className="img-detail">
          <img
            className="img-size"
            src="https://st.depositphotos.com/1900347/4146/i/600/depositphotos_41466555-stock-photo-image-of-slice-of-pizza.jpg"
            alt="food"
          />
        </div>

        <div className="detail-title">
          <hr />
          <h1>Need More Everyday Cooking Tips? Here Are 23 Of Our Favorites</h1>
        </div>
        <div className="user-info">
          <div className="img-user">
            <img
              className="user-in"
              alt="avatar"
              src="https://www.nicepng.com/png/detail/128-1280406_view-user-icon-png-user-circle-icon-png.png"
            />
          </div>

          <h5>User Name</h5>
        </div>
        <div className="ingredients">
          <hr />
          <h2>Ingredients</h2>

          <div className="ing-el">
            <p>cloves garlic | </p>
            <p>10 g parsley | </p>
            <p>100 g orzo | </p>
            <p>250 ml vegetable stock | </p>
            <p>2 cloves garlic | </p>
          </div>
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
