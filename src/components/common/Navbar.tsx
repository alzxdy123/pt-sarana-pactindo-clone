import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

import { GiHamburgerMenu } from "react-icons/gi";

import { navBarLists, pacLogoWhite } from "@/constants";
import { ModeToggle } from "./ModeToggle";
import { Link as ScrollLink } from "react-scroll";

function Navbar() {
  const [navToggle, setNavToggle] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement | null>(null);
  const hamburgerRef = useRef<HTMLDivElement | null>(null);
  const [lang] = useState(localStorage.getItem("lang") || "id");

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
    <div className="flex flex-col w-full bg-transparent py-2 pb-11 absolute top-0 z-50">
      <div className="flex justify-end w-[90%] mx-auto text-white dark:text-slate-800">
        {t("nav.question")}{" "}
        <span className="font-bold ml-1 cursor-pointer">+6222 - 5229880</span>
      </div>

      <nav className="flex justify-between items-center w-[90%] mx-auto my-5 relative ">
        <ScrollLink to="hero" smooth={true} duration={500}>
          <img
            src={pacLogoWhite}
            alt="PAC Logo"
            className="w-20 cursor-pointer"
          />
        </ScrollLink>

        {navBarLists.map((item, index) =>
          item.name === "nav.career" ? ( // Cek jika item adalah "career"
            <a
              key={index}
              href={item.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-lg font-sm h-8 flex justify-between flex-col hidden lg:block px-2 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-white dark:text-slate-800">
                {t(item.name)}
              </div>
              <div
                className="link-animation bg-white dark:bg-slate-800 h-1 left-0 top-full"
                style={{ width: "0%" }}
              ></div>
            </a>
          ) : (
            <ScrollLink
              to={item.path!}
              key={index}
              smooth={true}
              duration={500}
              className="text-lg font-sm h-8 flex justify-between flex-col hidden lg:block px-2 cursor-pointer"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div className="text-white dark:text-slate-800">
                {t(item.name)}
              </div>
              <div
                className="link-animation bg-white dark:bg-slate-800 h-1 left-0 top-full"
                style={{ width: "0%" }}
              ></div>
            </ScrollLink>
          )
        )}

        <div className="flex gap-5">
          <ModeToggle />
          <div
            onClick={() => setNavToggle(!navToggle)}
            className={`border-2 border-slate-200 dark:border-slate-800 text-white dark:text-slate-800 rounded-md cursor-pointer lg:hidden ${
              navToggle === true ? "dark:bg-slate-800" : ""
            } `}
            ref={hamburgerRef}
          >
            <GiHamburgerMenu
              className={`text-2xl m-2 ${
                navToggle === true ? "text-white" : ""
              }`}
            />
          </div>
        </div>

        {navToggle && (
          <div
            ref={dropdownRef}
            className="absolute w-full bg-white dark:bg-slate-800 top-16 rounded-xl overflow-hidden flex flex-col"
          >
            {navBarLists.map((list, index) =>
              list.name === "nav.career" ? (
                <a
                  key={index}
                  href={list.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg cursor-pointer"
                  onClick={() => setNavToggle(false)}
                >
                  {t(list.name)}
                </a>
              ) : (
                <ScrollLink
                  to={list.path!}
                  key={index}
                  smooth={true}
                  duration={500}
                  onClick={() => setNavToggle(false)}
                  className="p-3 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg cursor-pointer"
                >
                  {t(list.name)}
                </ScrollLink>
              )
            )}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
