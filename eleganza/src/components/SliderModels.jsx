import React from "react";
import Slider from "react-slick";
import { SliderModel } from "../utils/Camisas";

export default function SliderModels() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: false,
    fade: true,
    cssEase: "linear",
    arrows: false,
  };

  return (
    <div>
      <Slider {...settings}>
        {SliderModel.map((imagen) => (
          <div key={imagen.id}>
            <img src={imagen.imagen} alt="imagen" />
          </div>
        ))}
      </Slider>
    </div>
  );
}
