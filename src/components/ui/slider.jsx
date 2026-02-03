import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const images = [
  "Giftcards-100.jpeg",
  "controller.jpeg",
  "gadgets.jpeg",
  "sample.jpeg",
  "games.jpeg"
];

function SimpleSlider() {
  const settings = {
    dots: true,          // pagination
    arrows: true,        // arrows
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  return (
    <div className="w-full ">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="w-full h-[70vh]">
            <img
              src={`/src/assets/images/slider/${img}`}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;
