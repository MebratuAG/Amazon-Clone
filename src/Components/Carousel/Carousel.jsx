import React from "react";
import { Carousel } from "react-responsive-carousel";
import { img } from "./img/data.jsx";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import classes from "./Carousel.module.css";

function CarouselEffect() {
  return (
    <div>
      <Carousel
        autoPlay={true}
        infiniteLoop={true}
        showIndicators={false}
        showThumbs={false}
      >
        {img.map((imageItemLink, index) => {
          return (
            <img
              src={imageItemLink}
              alt={`Carousel item ${index}`}
              key={index}
            />
          );
        })}
      </Carousel>
      <div className={classes.hero__img}></div>
    </div>
  );
}

export default CarouselEffect;
