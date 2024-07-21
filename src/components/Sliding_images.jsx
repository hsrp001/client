import React, { useState } from "react";
import './css/Sliding_images.css';
import left from "../icons/left arrow.svg";
import right from "../icons/right arrow.svg";

function Sliding_images({ images }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleNext = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const handlePrev = () => {
    setCurrentImageIndex(
      (prevIndex) => (prevIndex - 1 + images.length) % images.length
    );
  };

  const handleBulletClick = (index) => {
    setCurrentImageIndex(index);
  };

  return (
    <div> 
      <div className="slide-images">
        <div className="arrows">
          <img src={left} alt="Left-icon" onClick={handlePrev} />
          <img src={right} alt="Right-icon" onClick={handleNext} />
        </div>
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt=""
            className={`slide-image ${
              index === currentImageIndex ? "active-image" : "hide"
            }`}
          />
        ))}
      </div>
      <div className="swiper-pagination">
        {images.map((_, index) => (
          <span
            key={index}
            className={`swiper-pagination-bullet ${
              index === currentImageIndex
                ? "active-swiper-pagination-bullet"
                : ""
            }`}
            onClick={() => handleBulletClick(index)}
          ></span>
        ))}
      </div>
    </div>
  );
}

export default Sliding_images;
