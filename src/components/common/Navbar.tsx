import React, { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

import { GiHamburgerMenu } from "react-icons/gi";
import { IoLanguageSharp } from "react-icons/io5";

import { navBarLists, pacLogoWhite, amerika, indonesia } from "@/constants";
import { ModeToggle } from "./ModeToggle";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";

function Navbar() {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const [lang, setLang] = useState(localStorage.getItem("lang") || "id");

  const { t, i18n } = useTranslation();

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node) &&
        hamburgerRef.current &&
        !hamburgerRef.current.contains(event.target as Node)
      ) {
        setNavToggle(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [dropdownRef]);

  useEffect(() => {
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
  }, [lang]);

  const handleMouseEnter = (e: any) => {
    const animationElement = e.currentTarget.querySelector(".link-animation");
    gsap.to(animationElement, { width: "100%", duration: 0.3, left: 0 });
  };

  const handleMouseLeave = (e: any) => {
    const animationElement = e.currentTarget.querySelector(".link-animation");
    gsap.to(animationElement, { width: "0%", duration: 0.3, left: "100%" });
  };

  return (
    <div className="flex flex-col w-full bg-transparent my-2 absolute top-0 z-50">
      <div className="flex justify-end w-[90%] mx-auto text-white">
        {t("nav.question")}{" "}
        <span className="font-bold ml-1 cursor-pointer">+6222 - 5229880</span>
      </div>

      <nav className="flex justify-between items-center w-[90%] mx-auto my-5 relative ">
        <Link to="/">
          <img src={pacLogoWhite} alt="PAC Logo" className="w-20" />
        </Link>

        {navBarLists.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="text-lg font-sm h-8 flex justify-between flex-col"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-white">{t(item.name)}</div>
            <div
              className="link-animation bg-white h-4 left-0 top-full"
              style={{ width: "0%" }}
            ></div>
          </Link>
        ))}

        <div className="flex gap-5">
          <ModeToggle />

          <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="bg-transparent border-none hover:bg-transparent"
            >
              <Button variant="outline" size="icon" className="w-11 h-11">
                <IoLanguageSharp />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuRadioGroup value={lang} onValueChange={setLang}>
                <DropdownMenuRadioItem value="id">
                  <img
                    src={indonesia}
                    alt="Indonesian Flag"
                    width={15}
                    className="mr-1 mt-1"
                  />{" "}
                  Indonesia
                </DropdownMenuRadioItem>
                <DropdownMenuRadioItem value="en">
                  <img src={amerika} width={15} className="mr-1 mt-1" />{" "}
                  Engglish
                </DropdownMenuRadioItem>
              </DropdownMenuRadioGroup>
            </DropdownMenuContent>
          </DropdownMenu>

          <div
            onClick={() => setNavToggle(!navToggle)}
            className={`border-2 border-slate-200 dark:border-slate-700  rounded-md cursor-pointer hover:bg-slate-100 dark:hover:bg-slate-800 lg:hidden ${
              navToggle === true ? "dark:border-slate-200" : ""
            } `}
            ref={hamburgerRef}
          >
            <GiHamburgerMenu className="text-2xl m-2" />
          </div>
        </div>

        {navToggle && (
          <div
            ref={dropdownRef}
            className="absolute w-full bg-white dark:bg-slate-800 top-16 rounded-xl overflow-hidden"
          >
            {navBarLists.map((list) => (
              <div
                className="p-3 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg cursor-pointer "
                key={list.name}
              >
                {t(list.name)}
              </div>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
