import { useRef } from "react";

import Carousel from "../common/Carousel";
import { ecoImage1, ecoImage2, ecoImage3 } from "@/constants";
import { useGSAP } from "@gsap/react";
import { animFromTopToBottom } from "@/utils/animations";

function Ecosystem() {
  const slides = [ecoImage1, ecoImage2, ecoImage3];
  const titleRef = useRef(null);

  useGSAP(() => {
    animFromTopToBottom(titleRef.current);
  });

  return (
    <div className="dark:bg-slate-900 my-10">
      <div className="w-[90%] mx-auto h-screen flex flex-col py-10 ">
        <h1 className="text-5xl mb-10 text-center font-bold" ref={titleRef}>
          Ecosystem
        </h1>
        <Carousel content={slides} />
      </div>
    </div>
  );
}

export default Ecosystem;
