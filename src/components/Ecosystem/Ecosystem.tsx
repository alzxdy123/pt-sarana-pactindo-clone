import React, { useEffect } from "react";

import Carousel from "../common/Carousel";
import { ecoImage1, ecoImage2, ecoImage3 } from "@/constants";
import { animateWithGsap } from "@/utils/animations";

function Ecosystem() {
  const slides = [ecoImage1, ecoImage2, ecoImage3];

  useEffect(() => {
    animateWithGsap(".text-anim", { y: 0, opacity: 1, duration: 0.6 }, {});
  }, []);

  return (
    <div className="dark:bg-slate-900 my-10">
      <div className="w-[90%] mx-auto h-screen flex flex-col py-10 ">
        <h1
          className="text-5xl mb-10 text-center font-bold text-anim"
          style={{ opacity: 0, transform: "translateY(-50px)" }}
        >
          Ecosystem
        </h1>
        <Carousel content={slides} />
      </div>
    </div>
  );
}

export default Ecosystem;
