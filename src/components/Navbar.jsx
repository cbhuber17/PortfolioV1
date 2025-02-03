import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";
import LanguageSwitch from "./LanguageSwitch";
import { useLanguage } from "../contexts/LanguageContext";
import useWindowDimensions from "../hooks/useWindowDimensions";

/* eslint react/prop-types: 0 */
const Navbar = () => {
  // Language switch
  const { isForeign, dispatch } = useLanguage();

  const { width } = useWindowDimensions();
  let isMobile = false;
  if (width < 500) isMobile = true;

  // Determines where the user is on the page
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  const [searchParams, setSearchParams] = useSearchParams();
  const oppositeLanguageSwitch = isForeign ? "eng" : "vie";

  function switchChange() {
    searchParams.set("lang", oppositeLanguageSwitch);
    setSearchParams(searchParams);
    dispatch({ type: "toggle" });
  }

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Colin &nbsp;
            <span className="lg:block hidden">
              |&nbsp;{" "}
              {isForeign
                ? "Kỹ sư địa tin học GNSS, P.Eng"
                : "Geomatics Engineer, P.Eng"}
            </span>
          </p>
        </Link>
        <LanguageSwitch
          checked={isForeign}
          switchChange={switchChange}
          isMobile={isMobile}
        />
        <ul className="list-none hidden lg:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title || active === link.titlevn
                  ? "text-white"
                  : "text-secondary"
              } hover:text-white text-[18-px] font-medium cursor-pointer`}
              onClick={() => setActive(isForeign ? link.titlevn : link.title)}
            >
              <a href={link.id === "addendum" ? `${link.id}` : `/#${link.id}`}>
                {isForeign ? link.titlevn : link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="lg:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title || active === link.titlevn
                      ? "text-white"
                      : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(isForeign ? link.titlevn : link.title);
                  }}
                >
                  <a
                    href={link.id === "addendum" ? `${link.id}` : `#${link.id}`}
                  >
                    {isForeign ? link.titlevn : link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
