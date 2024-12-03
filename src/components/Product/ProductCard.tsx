import React from "react";
import { Button } from "../ui/button";

interface ProductCardProps {
  image: string; // URL atau path gambar
  title: string; // Judul produk
  path: string; // URL untuk navigasi
}

function ProductCard({ image, title, path }: ProductCardProps) {
  return (
    <div className="bg-white dark:bg-black p-8 w-60 justify-between rounded-3xl flex flex-col h-full items-center">
      <img
        src={image}
        alt={title}
        className="rounded-lg object-center h-56"
        width={180}
      />
      <h1 className="text-xl font-bold text-left w-full mt-4">{title}</h1>
      <div className="w-full flex justify-center mt-8">
        <Button className="bg-[#1e96d1] px-10 rounded-3xl mt-20">
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default ProductCard;
