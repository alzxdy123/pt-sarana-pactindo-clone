import React from "react";

interface SlideIndicatorProps {
  slides: { bg: string; title: string; description: string; image?: string }[];
  currentSlide: number;
  setCurrentSlide: (index: number) => void;
}

const SlideIndicator: React.FC<SlideIndicatorProps> = ({
  slides,
  currentSlide,
  setCurrentSlide,
}) => {
  return (
    <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
      {slides.map((_, index) => (
        <button
          key={index}
          className={`w-4 h-4 rounded-full transition-all ${
            currentSlide === index ? "bg-blue-500 scale-110" : "bg-gray-400"
          }`}
          onClick={() => setCurrentSlide(index)}
        ></button>
      ))}
    </div>
  );
};

export default SlideIndicator;
