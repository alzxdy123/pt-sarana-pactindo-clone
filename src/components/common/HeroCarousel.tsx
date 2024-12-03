import { useEffect, useState, useRef } from "react";
import {
  bgSlide1,
  bgSlide2,
  bgSlide3,
  carouselImage1,
  carouselImage2,
  carouselImage3,
  carouselImage4_1,
  carouselImage4_2,
  carouselImage5,
} from "@/constants";

import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { gsap } from "gsap";

function Carousel() {
  const slides = [
    {
      bg: bgSlide1,
      content: (
        <div className="w-[80%] mx-auto flex items-center gap-13 text-white dark:text-slate-800 xl:mt-32">
          <div className="flex flex-col items-center gap-5">
            <h1 className="text-4xl xl:text-5xl font-bold">Mobile Banking</h1>
            <p className="text-center text-xl xl:text-2xl">
              Providing every Bank’s needs for Customers to make transaction on
              Mobile Banking applications that convenient, safe, and fastest in
              the new digital era.
            </p>
          </div>
          <img
            src={carouselImage1}
            alt=""
            width={600}
            className="hidden xl:block"
          />
        </div>
      ),
    },
    {
      bg: bgSlide2,
      content: (
        <div className="w-[80%] mx-auto flex items-center justify-center gap-5 flex-col text-white dark:text-slate-800 xl:mt-32">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-4xl xl:text-5xl font-bold">Internet Banking</h1>
            <p className="text-center text-xl xl:text-2xl xl:w-[60%]">
              One of the needs of every Bank for Customers to conduct financial
              or non-financial transactions online through the Web, it is not
              only convenient but also a safe banking method.
            </p>
          </div>
          <img
            src={carouselImage2}
            alt=""
            width={900}
            className="hidden xl:block"
          />
        </div>
      ),
    },
    {
      bg: bgSlide3,
      content: (
        <div className="w-[80%] mx-auto flex items-center gap-5 flex-col text-white dark:text-slate-800 xl:mt-32">
          <div className="flex flex-col items-center gap-5 text-center">
            <h1 className="text-4xl xl:text-5xl font-bold">
              Internet Banking Corporate
            </h1>
            <p className="text-center text-xl xl:text-2xl">
              To help improve the quality of the Bank’s services in providing
              the needs of the Customer’s Company in conducting online financial
              transactions via Internet, safe and trusted.
            </p>
          </div>
          <img
            src={carouselImage3}
            alt=""
            width={900}
            className="hidden xl:block"
          />
        </div>
      ),
    },
    {
      bg: bgSlide1,
      content: (
        <div className="w-[80%] mx-auto flex items-center gap-5 flex-row-reverse text-white dark:text-slate-800 xl:mt-32">
          <div className="flex flex-col gap-5 items-center">
            <h1 className="text-4xl xl:text-5xl font-bold text-center">
              Customer On Boarding
            </h1>
            <p className="text-center text-xl xl:text-2xl">
              Facilitating the Bank to provide Out of Branch Services for New
              Customers who wish to open Time Deposits and Loans.
            </p>
            <img
              src={carouselImage4_2}
              alt=""
              width={550}
              className="hidden xl:block"
            />
          </div>
          <img
            src={carouselImage4_1}
            alt=""
            width={500}
            className="hidden xl:block"
          />
        </div>
      ),
    },
    {
      bg: bgSlide1,
      content: (
        <div className="w-[80%] mx-auto flex items-start gap-5 text-white dark:text-slate-800 xl:mt-32 flex-row-reverse">
          <div className="flex flex-col items-center gap-5 xl:mt-20">
            <h1 className="text-4xl xl:text-5xl text-center font-bold">
              Bank Agent (Laku Pandai)
            </h1>
            <p className="text-center text-xl xl:text-2xl">
              Application that can help the Bank to reach People who have never
              done Banking Transactions and Support the Government program “Laku
              Pandai”.
            </p>
          </div>
          <img
            src={carouselImage5}
            alt=""
            width={400}
            className="hidden xl:block "
          />
        </div>
      ),
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);
  const slideContainerRef = useRef(null);

  useEffect(() => {
    const slideInterval = setInterval(() => {
      handleNextSlide();
    }, 6000);

    return () => clearInterval(slideInterval);
  }, []);

  useEffect(() => {
    // GSAP animation for each slide change
    const tl = gsap.timeline();
    tl.fromTo(
      slideContainerRef.current,
      { opacity: 0, x: 100 },
      { opacity: 1, x: 0, duration: 1, ease: "power2.out" }
    );
  }, [currentSlide]);

  const handleNextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="absolute flex justify-center items-center inset-0 bg-cover bg-center transition-all duration-700 ease-in-out"
        style={{
          backgroundImage: `url(${slides[currentSlide].bg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div
          ref={slideContainerRef}
          className="w-full h-full flex items-center justify-center"
        >
          {slides[currentSlide].content}
        </div>

        <div
          onClick={handlePrevSlide}
          className="absolute hidden xl:block shadow-2xl left-20 p-4 rounded-full bg-white dark:bg-slate-900 cursor-pointer"
        >
          <FaArrowLeft className="dark:text-white" />
        </div>
        <div
          onClick={handleNextSlide}
          className="absolute hidden xl:block shadow-2xl right-20 p-4 rounded-full bg-white dark:bg-slate-900 cursor-pointer"
        >
          <FaArrowRight className="dark:text-white" />
        </div>
      </div>

      <div className="xl:hidden block">
        <div className="absolute bottom-5 left-1/2 transform -translate-x-1/2 flex gap-3">
          {slides.map((_, index) => (
            <button
              key={index}
              className={`w-4 h-4 rounded-full ${
                currentSlide === index ? "bg-blue-400" : "bg-gray-500"
              }`}
              onClick={() => setCurrentSlide(index)}
            ></button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
