import React from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

type CarouselType = {
  content: string[]; // Array of image URLs
};

function Carousel({ content }: CarouselType) {
  const [currentSlide, setCurrentSlide] = React.useState(0);

  const handleNext = () => {
    setCurrentSlide((prev) => (prev + 1) % content.length);
  };

  const handlePrev = () => {
    setCurrentSlide((prev) => (prev - 1 + content.length) % content.length);
  };

  const handleIndicatorClick = (index: number) => {
    setCurrentSlide(index);
  };

  return (
    <div className="relative w-full h-full flex justify-center items-center overflow-hidden rounded-xl">
      {/* Slide */}
      <div className="relative w-full h-full flex justify-center items-center">
        <img
          src={content[currentSlide]}
          alt={`Slide ${currentSlide + 1}`}
          className="max-w-full max-h-full object-contain"
        />
      </div>

      {/* Left Arrow */}
      <button
        onClick={handlePrev}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-slate-200 dark:bg-slate-800 text-black p-2 rounded-full z-10"
      >
        <FaArrowLeft className="dark:text-white" />
      </button>

      {/* Right Arrow */}
      <button
        onClick={handleNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-slate-200 dark:bg-slate-800 text-black p-2 rounded-full z-10"
      >
        <FaArrowRight className="dark:text-white" />
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {content.map((_, index) => (
          <button
            key={index}
            onClick={() => handleIndicatorClick(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? "bg-blue-500" : "bg-gray-300"
            }`}
          ></button>
        ))}
      </div>
    </div>
  );
}

export default Carousel;
