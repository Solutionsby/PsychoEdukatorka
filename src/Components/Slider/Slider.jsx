import PropTypes from "prop-types";
import { useState } from "react";
import "./slider.scss";

export const Slider = ({ slides }) => {
  const [currentIndex, setCurentIndex] = useState(0);

  const slideNavigation = (previous) => {
    if (previous) {
      const isFirstSlide = currentIndex === 0;
      const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
      setCurentIndex(newIndex);
    } else {
      const isLastSlide = currentIndex === slides.length - 1;
      const newIndex = isLastSlide ? 0 : currentIndex + 1;
      setCurentIndex(newIndex);
    }
  };
  const goToSlide = (slideIndex) => {
    setCurentIndex(slideIndex);
  };
  return (
    <div className="slider-wrapper">
      {slides[currentIndex].text.map(({ id, line }) => (
        <p key={id} className={slides[currentIndex].className}>
          {line}
        </p>
      ))}
      <div className={currentIndex === 0 ? "one-arrow" : "arrows"}>
        {currentIndex > 0 && (
          <div className="arrow" onClick={() => slideNavigation(true)}>
            &#10096;
          </div>
        )}
        {slides.map((_slide, slideIndex) => (
          <div
            key={slideIndex}
            className={currentIndex === slideIndex ? "active" : "dots"}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
        <div onClick={() => slideNavigation(false)} className="arrow">
          &#10097;
        </div>
      </div>
    </div>
  );
};
Slider.propTypes = {
  slides: PropTypes.array.isRequired,
};
