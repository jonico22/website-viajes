import React, { useState, useEffect } from "react";
import Link from "next/link";
// Import react scroll
import LogoVPN from "../../public/assets/Logo.svg";

const Header = () => {
  const [scrollActive, setScrollActive] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      setScrollActive(window.scrollY > 20);
    });
  }, []);
  return (
    <>
      <header
        className={
          "fixed top-0 w-full  z-30 bg-white-500 transition-all " +
          (scrollActive ? " shadow-md pt-0" : " pt-4")
        }
      >
        <nav className="max-w-screen-xl px-6 sm:px-8 lg:px-16 mx-auto grid grid-flow-col py-3 sm:py-4">
          <div className="col-start-1 col-end-2 flex items-center">
            <LogoVPN className="h-8 w-auto" /> <strong className="block ml-3">Viaje con Mary</strong>
          </div>
        </nav>
      </header>
    </>
  );
};

export default Header;
