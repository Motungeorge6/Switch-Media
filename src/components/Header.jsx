import React, { useState, useEffect } from "react";
import Logo from "../assets/Switch logo.png";
import Logo2 from "../assets/switchlogo-dk.png";
import { FaInstagram, FaTwitter,FaLinkedin } from "react-icons/fa";

const Header = () => {
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const controlNavbar = () => {
    if (typeof window !== "undefined") {
      if (window.scrollY > lastScrollY) {
        setShow(false);
      } else {
        setShow(true);
      }
      setLastScrollY(window.scrollY);
    }
  };

  useEffect(() => {
    console.log(lastScrollY);
    if (typeof window !== "undefined") {
      window.addEventListener("scroll", controlNavbar);

      // cleanup function
      return () => {
        window.removeEventListener("scroll", controlNavbar);
      };
    }
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed z-10 transition ease-in-out delay-300 ${
        show ? "" : "hidden"
      }`}
    >
      {/* parent container */}
      <div
        className={`fixed w-full text-white justify-between flex p-4 items-center pt-6 ${
          lastScrollY < 400 ? "bg-transparent" : "bg-white"
        }`}
      >
        {/* logo container */}
        <div className="text-2xl font-bold">
          <img
            src={lastScrollY < 400 ? Logo : Logo2}
            alt="/"
            style={{ width: "18%" }}
          />
        </div>
        {/* link container */}
        <div className="flex md:flex-row sm:flex-row-reverse justify-between  w-4/5">
          {/* middle items */}
          <div>
            <ul
              className={`md:flex gap-8 pl-6 ${
                lastScrollY < 400 ? "text-white" : "text-black"
              }`}
            >
              <li>Services</li>
              <li>About Us</li>
              <li>Our works</li>
              <li>Contact Us</li>
            </ul>
          </div>
          {/* last icons container */}
          <div>
            <ul
              className={`flex gap-8 mt-1 
             ${lastScrollY < 800 ? "text-white" : "text-black"}`}
            >
              <li>
                <FaInstagram />
              </li>
              <li>
                <FaTwitter />
              </li>
              <li>
                <FaLinkedin/>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Header;
