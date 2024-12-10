import { useEffect, useState, useRef } from "react";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";
import SlideContent from "./SlideContent";
import SlideIndicator from "./SlideIndicator";
import {
  bgSlide1,
  bgSlide2,
  bgSlide3,
  carouselImage1,
  carouselImage3,
  carouselImage2,
  carouselImage4_1,
  carouselImage4_2,
  carouselImage5,
} from "@/constants";

// interface SlideImage {
//   src: string;
//   alt: string;
//   width: number;
// }

// interface Slide {
//   bg: string;
//   title: string;
//   description: string;
//   images?: SlideImage[];
// }

const slides = [
  {
    bg: bgSlide1,
    title: "Mobile Banking",
    description:
      "Providing every Bank’s needs for Customers to make transaction on Mobile Banking applications that convenient, safe, and fastest in the new digital era.",
    images: [{ src: carouselImage1, alt: "Mobile Banking", width: 600 }],
  },
  {
    bg: bgSlide2,
    title: "Internet Banking",
    description:
      "One of the needs of every Bank for Customers to conduct financial or non-financial transactions online through the Web, it is not only convenient but also a safe banking method.",
    images: [{ src: carouselImage2, alt: "Internet Banking", width: 900 }],
  },
  {
    bg: bgSlide3,
    title: "Internet Banking Corporate",
    description:
      "To help improve the quality of the Bank’s services in providing the needs of the Customer’s Company in conducting online financial transactions via Internet, safe and trusted.",
    images: [
      { src: carouselImage3, alt: "Internet Banking Corporate", width: 900 },
    ],
  },
  {
    bg: bgSlide1,
    title: "Customer On Boarding",
    description:
      "Facilitating the Bank to provide Out of Branch Services for New Customers who wish to open Time Deposits and Loans.",
    images: [
      { src: carouselImage4_2, alt: "Customer On Boarding Detail", width: 550 },
      {
        src: carouselImage4_1,
        alt: "Customer On Boarding Overview",
        width: 500,
      },
    ],
  },
  {
    bg: bgSlide1,
    title: "Bank Agent (Laku Pandai)",
    description:
      "Application that can help the Bank to reach People who have never done Banking Transactions and Support the Government program “Laku Pandai”.",
    images: [
      { src: carouselImage5, alt: "Bank Agent (Laku Pandai)", width: 400 },
    ],
  },
];

function Carousel(): JSX.Element {
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const slideContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => handleNextSlide(), 5000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    if (slideContainerRef.current) {
      const tl = gsap.timeline();
      tl.fromTo(
        slideContainerRef.current,
        { opacity: 0, x: 50 },
        { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
      );
    }
  }, [currentSlide]);

  const handleNextSlide = (): void =>
    setCurrentSlide((prev) => (prev + 1) % slides.length);

  const handlePrevSlide = (): void =>
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{
          backgroundImage: `url(${slides[currentSlide].bg})`,
        }}
      >
        <div
          ref={slideContainerRef}
          className="flex items-center justify-center h-full"
        >
          <SlideContent
            title={slides[currentSlide].title}
            description={slides[currentSlide].description}
            images={slides[currentSlide].images}
          />
        </div>

        <button
          onClick={handlePrevSlide}
          className="absolute left-5 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full cursor-pointer"
        >
          <FaArrowLeft />
        </button>
        <button
          onClick={handleNextSlide}
          className="absolute right-5 top-1/2 transform -translate-y-1/2 p-3 bg-white shadow-lg rounded-full cursor-pointer"
        >
          <FaArrowRight />
        </button>
      </div>

      <SlideIndicator
        slides={slides}
        currentSlide={currentSlide}
        setCurrentSlide={setCurrentSlide}
      />
    </div>
  );
}

export default Carousel;
