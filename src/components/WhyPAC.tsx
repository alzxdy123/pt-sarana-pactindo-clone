import { useEffect } from "react";
import { whyPac, whitepaper, whitepaperPDF } from "@/constants";
import { Button } from "./ui/button";
import { Dialog, DialogTrigger, DialogContent, DialogTitle } from "./ui/dialog";
import { animateWithGsap } from "@/utils/animations"; // Adjust the import path based on your file structure.

function WhyPAC() {
  useEffect(() => {
    animateWithGsap(
      ".whypac",
      { x: 0, opacity: 1, duration: 1.5, stagger: 1 },
      { start: "top 80%" }
    );

    animateWithGsap(
      ".whypac-box-image",
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.3 },
      { start: "top 90%" }
    );

    animateWithGsap(
      ".whypac-box-content",
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.3 },
      { start: "top 90%" }
    );
  }, []);

  return (
    <div className="relative w-full mb-20" id="whypac">
      {/* Header Section */}
      <div
        className="bg-[#e2f4ff] dark:bg-slate-800 w-52 h-40 flex justify-end items-center my-10 whypac relative"
        style={{ opacity: 0, transform: "translateX(-100px)" }}
      >
        <span
          className="absolute right-[-130px] text-5xl w-60 font-extrabold whypac"
          style={{ opacity: 0, transform: "translateX(-100px)" }}
        >
          Why PAC?
        </span>
      </div>

      {/* Content Section */}
      <div className="w-[90%] mx-auto">
        <div className="flex flex-col gap-10 xl:flex-row mb-20">
          {whyPac.map((item, i) => (
            <div key={i} className="flex flex-col items-start">
              {/* Image */}
              <img
                src={item.img}
                alt={item.title}
                width={item.width}
                className="mb-5 h-20 whypac-box-image"
                style={{ opacity: 0, transform: "translateY(-50px)" }}
              />
              {/* Content */}
              <div
                className="whypac-box-content"
                style={{ opacity: 0, transform: "translateY(50px)" }}
              >
                <h1 className="text-lg font-bold mt-5 mb-2">{item.title}</h1>
                <p className="text-sm text-slate-700 dark:text-slate-500">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
        {/* Paper */}
        <div className="bg-slate-200 dark:bg-slate-800 p-6 rounded-lg flex lg:justify-center gap-10">
          <img src={whitepaper} alt="" className="hidden lg:block" />
          <div>
            <h1 className="text-3xl font-bold">Read Us on IDC Whitepaper</h1>
            <p className="mt-2 mb-5">
              Kenali PAC lebih dekat dan lebih lengkap
            </p>
            <Dialog>
              <DialogTrigger asChild>
                <Button className="bg-[#1e96d1] text-lg rounded-3xl p-6">
                  Read Us
                </Button>
              </DialogTrigger>
              <DialogContent className="max-w-4xl">
                <DialogTitle className="sr-only">IDC Whitepaper</DialogTitle>
                <h2 className="text-xl font-bold mb-4">IDC Whitepaper</h2>
                <div className="w-full h-[600px] overflow-auto">
                  {whitepaperPDF}
                </div>
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </div>
    </div>
  );
}

export default WhyPAC;
