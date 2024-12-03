import React, { useEffect } from "react";

import { ProductServices } from "@/constants";
import ProductCard from "./ProductCard";
import { animateWithGsap } from "@/utils/animations";

function Product() {
  useEffect(() => {
    animateWithGsap(
      ".card-anim",
      { y: 0, duration: 0.9, opacity: 1, stagger: 0.3 },
      {}
    );

    animateWithGsap(
      ".text-anim",
      {
        y: 0,
        duration: 1,
        opacity: 1,
      },
      {}
    );
  }, []);

  return (
    <div
      className="w-full p-16"
      style={{
        background: "linear-gradient(to bottom left, #3cb4ff, #342b88)",
      }}
    >
      <h1 className="text-4xl text-center mb-10 font-bold text-white dark:text-slate-800 text-anim opacity-0 translate-y-[-50px]">
        Our Product & Services
      </h1>
      <div className="flex justify-center flex-wrap gap-14">
        {ProductServices.map((item, i) => (
          <div className="card-anim opacity-0 translate-y-[50px]" key={i}>
            <ProductCard
              image={item.image}
              title={item.title}
              path={item.path}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default Product;
