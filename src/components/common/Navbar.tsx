import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { gsap } from "gsap";

import { GiHamburgerMenu } from "react-icons/gi";

import { navBarLists, pacLogoWhite } from "@/constants";
import { ModeToggle } from "./ModeToggle";

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
        <Link to="/">
          <img src={pacLogoWhite} alt="PAC Logo" className="w-20" />
        </Link>

        {navBarLists.map((item, index) => (
          <Link
            to={item.path}
            key={index}
            className="text-lg font-sm h-8 flex justify-between flex-col hidden lg:block px-2"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="text-white dark:text-slate-800">{t(item.name)}</div>
            <div
              className="link-animation bg-white dark:bg-slate-800 h-1 left-0 top-full"
              style={{ width: "0%" }}
            ></div>
          </Link>
        ))}

        <div className="flex gap-5">
          <ModeToggle />

          {/* <DropdownMenu>
            <DropdownMenuTrigger
              asChild
              className="bg-transparent border-slate-200 dark:border-slate-800 hover:bg-transparent"
            >
              <Button variant="outline" size="icon" className="w-11 h-11">
                <IoLanguageSharp className="text-white dark:text-slate-800" />
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
          </DropdownMenu> */}

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
            className="absolute w-full bg-white dark:bg-slate-800 top-16 rounded-xl overflow-hidden"
          >
            {navBarLists.map((list) => (
              <a href="whypac">
                <div
                  className="p-3 hover:bg-slate-200 dark:hover:bg-slate-700 text-lg cursor-pointer "
                  key={list.name}
                >
                  {t(list.name)}
                </div>
              </a>
            ))}
          </div>
        )}
      </nav>
    </div>
  );
}

export default Navbar;
