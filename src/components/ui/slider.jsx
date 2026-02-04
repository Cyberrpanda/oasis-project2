import React from "react";
import Slider from "react-slick";

// Import slick styles
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

// Custom Arrow Components for better control
const NextArrow = ({ onClick }) => (
  <div
    className="absolute right-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
    </svg>
  </div>
);

const PrevArrow = ({ onClick }) => (
  <div
    className="absolute left-4 top-1/2 -translate-y-1/2 z-20 cursor-pointer bg-black/30 hover:bg-black/50 text-white p-3 rounded-full transition-all opacity-0 group-hover:opacity-100"
    onClick={onClick}
  >
    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" className="w-6 h-6">
      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
    </svg>
  </div>
);

const images = [
  "Giftcards-100.jpeg",
  "controller.jpeg",
  "screen.jpeg",
  "switch.jpeg",
  "games.jpeg"
];

function SimpleSlider() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    // Custom dots styling via appendDots
    appendDots: (dots) => (
      <div style={{ bottom: "20px" }}>
        <ul className="flex justify-center items-center gap-2"> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div className="w-3 h-3 bg-white/50 rounded-full transition-all hover:bg-white active-dot:bg-white"></div>
    ),
  };

  return (
    <div className="relative w-full max-w-[1440px] mx-auto group overflow-hidden">
      <Slider {...settings}>
        {images.map((img, i) => (
          <div key={i} className="relative w-full h-[50vh] md:h-[70vh] outline-none">
            {/* Overlay to make dots/arrows pop */}
            <div className="absolute inset-0 bg-black/10 z-10 pointer-events-none" />
            
            <img
              src={`/src/assets/images/slider/${img}`}
              alt={`slide-${i}`}
              className="w-full h-full object-cover"
              // Adding loading="priority" to the first image can help LCP
              loading={i === 0 ? "eager" : "lazy"}
            />
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default SimpleSlider;