import { useState, useRef, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

import { GiHamburgerMenu } from "react-icons/gi";

import { navBarLists, pac, pacLogoCash, pacLogoWhite } from "@/constants";
import { ModeToggle } from "./ModeToggle";
import { Link as ScrollLink } from "react-scroll";
import { Link as RouterLink } from "react-router-dom";

interface NavbarInterface {
  fincloud?: any;
}

function Navbar({ fincloud }: NavbarInterface) {
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
      {/* Baris Atas */}
      <div
        className={`flex justify-end w-[90%] mx-auto ${
          fincloud
            ? "text-black dark:text-white"
            : "text-white dark:text-slate-800"
        }`}
      >
        {t("nav.question")}{" "}
        <span className="font-bold ml-1 cursor-pointer">+6222 - 5229880</span>
      </div>

      {/* Navigasi */}
      <nav className="flex justify-between items-center w-[90%] mx-auto my-5 relative">
        {/* Logo */}
        <RouterLink to="/">
          {fincloud ? (
            <>
              <img src={pac} alt="PAC Logo" className="w-20 cursor-pointer" />
            </>
          ) : (
            <>
              <img
                src={pacLogoWhite}
                alt="PAC Logo"
                className="w-20 cursor-pointer"
              />
            </>
          )}
        </RouterLink>

        {/* Daftar Navigasi */}
        {navBarLists.map((item, index) => {
          const textColor = fincloud
            ? "text-black dark:text-white"
            : "text-white dark:text-slate-800";

          if (item.name === "nav.career") {
            return (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className={`text-lg font-sm h-8 flex justify-between flex-col hidden lg:block px-2 cursor-pointer ${textColor}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div>{t(item.name)}</div>
                <div
                  className="link-animation bg-white dark:bg-slate-800 h-1 left-0 top-full"
                  style={{ width: "0%" }}
                ></div>
              </a>
            );
          }

          if (item.isRouterLink) {
            return (
              <RouterLink
                to={item.path!}
                key={index}
                className={`text-lg font-sm h-8 flex justify-between flex-col hidden lg:block px-2 cursor-pointer ${textColor}`}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
              >
                <div>{t(item.name)}</div>
                <div
                  className="link-animation bg-white dark:bg-slate-800 h-1 left-0 top-full"
                  style={{ width: "0%" }}
                ></div>
              </RouterLink>
            );
          }

          return (
            <ScrollLink
              to={item.path!}
              key={index}
              smooth={true}
              duration={500}
              className={`text-lg font-sm h-8 flex justify-between flex-col hidden lg:block px-2 cursor-pointer ${textColor}`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <div>{t(item.name)}</div>
              <div
                className="link-animation bg-white dark:bg-slate-800 h-1 left-0 top-full"
                style={{ width: "0%" }}
              ></div>
            </ScrollLink>
          );
        })}

        {/* Tombol Toggle */}
        <div className="flex gap-5">
          {fincloud ? <div></div> : <ModeToggle />}
          <div
            onClick={() => setNavToggle(!navToggle)}
            className={`border-2 border-slate-200 dark:border-slate-800 text-white dark:text-slate-800 rounded-md cursor-pointer lg:hidden ${
              navToggle === true ? "dark:bg-slate-800" : ""
            }`}
            ref={hamburgerRef}
          >
            <GiHamburgerMenu
              className={`text-2xl m-2 ${
                navToggle === true ? "text-white" : ""
              }`}
            />
          </div>
        </div>

        {/* Menu Dropdown */}
        {navToggle && (
          <div
            ref={dropdownRef}
            className="absolute w-full bg-white dark:bg-slate-800 top-16 rounded-xl overflow-hidden flex flex-col"
          >
            {navBarLists.map((list, index) => {
              const dropdownTextColor = fincloud
                ? "text-black dark:text-white"
                : "text-slate-800 dark:text-white";

              if (list.name === "nav.career") {
                return (
                  <a
                    key={index}
                    href={list.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg cursor-pointer ${dropdownTextColor}`}
                    onClick={() => setNavToggle(false)}
                  >
                    {t(list.name)}
                  </a>
                );
              }

              if (list.isRouterLink) {
                return (
                  <RouterLink
                    to={list.path!}
                    key={index}
                    onClick={() => setNavToggle(false)}
                    className={`p-3 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg cursor-pointer ${dropdownTextColor}`}
                  >
                    {t(list.name)}
                  </RouterLink>
                );
              }

              return (
                <ScrollLink
                  to={list.path!}
                  key={index}
                  smooth={true}
                  duration={500}
                  onClick={() => setNavToggle(false)}
                  className={`p-3 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg cursor-pointer ${dropdownTextColor}`}
                >
                  {t(list.name)}
                </ScrollLink>
              );
            })}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
