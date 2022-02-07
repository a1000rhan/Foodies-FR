import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";
const Slider = () => {
  return (
    <div className="contain ">
      <Carousel
        autoPlay={true}
        interval={3000}
        infiniteLoop={true}
        emulateTouch={true}
        showThumbs={false}
        showArrows={true}
        className="carousel"
      >
        <div>
          <img
            src="https://images.kitchenstories.io/recipeImages/03_07_SchnellePastaNachCarbonaraArt_titlePicture/03_07_SchnellePastaNachCarbonaraArt_titlePicture-large-landscape-150.jpg"
            alt="spagiti"
          />
        </div>
        <div>
          <img
            src="https://images.kitchenstories.io/recipeImages/pasta-with-mushrooms-truffle-oil-4x3/pasta-with-mushrooms-truffle-oil-4x3-large-landscape-150.jpg"
            alt="mashroom"
          />
        </div>
        <div>
          <img
            src="https://images.kitchenstories.io/wagtailOriginalImages/R2523-photo-final-2/R2523-photo-final-2-large-landscape-150.jpg"
            alt="mashroom"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default Slider;
