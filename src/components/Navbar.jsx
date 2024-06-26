/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";

import { HiMenu } from "react-icons/hi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSticky, setIsSticky] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className="w-full fixed top-0 left-0 right-0">
      <nav
        className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}
      >
        <div className="flex items-center justify-between">
          <div className="text-black font-bold text-lg cursor-pointer">
           
            <h1>Samuel Melomey</h1>
          </div>

          {/* for larger device */}
          <div className="lg:flex items-center gap-3 hidden text-body">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="home"
              className="block text-primary hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="skills"
              className="block hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="about"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              About
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="portfolio"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="blog"
              className="block  hover:text-gray-400 py-2 px-4 cursor-pointer"
            >
              Blog
            </Link>
          </div>

          {/* contact me btn */}
          <Link
          activeClass="active"
          smooth={true}
          spy={true}
          offset={-100}
          to="contact"
          className="block  hover:text-gray-400 py-2 px-4 cursor-pointer">
          <div className="lg:block hidden">
            <button className="px-4 py-2 bg-transparent border border-indigo-500 text-indigo-700 rounded hover:bg-primary hover:text-white transition-all duration-300">
              Contact Me
            </button>
          </div>
          </Link>
          {/* btn for small devices */}
          <button onClick={toggleMenu} className="lg:hidden text-body text-3xl">
            <HiMenu />
          </button>
        </div>

        {/* Mobile menu */}
        {isMenuOpen && (
          <div className="mt-4 bg-body p-4 rounded-lg text-white">
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="/home"
              className="block hover:text-gray-400 py-2"
            >
              Home
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="/skills"
              className="block hover:text-gray-400 py-2"
            >
              Skills
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="/about"
              className="block hover:text-gray-400 py-2"
            >
              About
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="/portfolio"
              className="block hover:text-gray-400 py-2"
            >
              Portfolio
            </Link>
            <Link
              activeClass="active"
              smooth={true}
              spy={true}
              offset={-100}
              to="/blog"
              className="block hover:text-gray-400 py-2"
            >
              Blog
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
