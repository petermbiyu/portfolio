import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import { FaLinkedinIn, FaFacebookF, FaYoutube, FaTimes } from "react-icons/fa";
import { IoMdMenu } from "react-icons/io";

const Navbar = () => {
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const [menu, setMenu] = useState(false);

  const haddleNavigate = (item) => {
    setActive(item);
    setMenu(!menu);
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    const onScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  return (
    <div
      className={
        scrolled
          ? "fixed px-5 md:px-10 lg:px-20 top-0 w-full z-100 h-[70px] flex justify-between items-center text-white fixed bg-[#121212] transition-all duration-320 ease-in-out"
          : "absolute px-5 md:px-10 lg:px-20 top-0 w-full z-100 h-[70px] flex justify-between items-center text-white p-0 transition-all duration-320 ease-in-out"
      }
    >
      <div>
        <img src={assets.logo} alt="logo" className="cursor-pointer w-[50%]" />
      </div>
      <div className="sm:hidden">
        {menu ? (
          <FaTimes
            className="text-2xl cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
        ) : (
          <IoMdMenu
            className="text-2xl cursor-pointer"
            onClick={() => setMenu(!menu)}
          />
        )}
      </div>
      {/* large screen and computers */}
      <div className="hidden sm:flex w-[60%] justify-between items-center gap-4">
        <ul className="flex justify-center items-center text-[1.2rem] gap-3 tracking-[0.8px]">
          <li
            className={
              active === "home"
                ? "opacity-[75%] cursor-pointer text-red-500"
                : "opacity-[75%] cursor-pointer"
            }
            onClick={() => haddleNavigate("home")}
          >
            Home
          </li>
          <li
            className={
              active === "skills"
                ? "cursor-pointer text-red-500"
                : "cursor-pointer"
            }
            onClick={() => haddleNavigate("skills")}
          >
            Skills
          </li>
          <li
            className={
              active === "projects"
                ? "cursor-pointer text-red-500"
                : "cursor-pointer"
            }
            onClick={() => haddleNavigate("projects")}
          >
            Projects
          </li>
        </ul>
        <span className="flex justify-center items-center gap-3 z-101">
          <a
            href=""
            className="w-10 h-10 text-[1.1rem] border-2 border-[rgba(255,255,255,0.4)] bg-gray-300/10 hover:bg-white hover:text-[#121212] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ease"
          >
            <FaLinkedinIn />
          </a>
          <a
            href=""
            className="w-10 h-10 text-[1.1rem] border-2 border-[rgba(255,255,255,0.4)] bg-gray-300/10 hover:bg-white hover:text-[#121212] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ease"
          >
            <FaFacebookF />
          </a>
          <a
            href=""
            className="w-10 h-10 text-[1.1rem] border-2 border-[rgba(255,255,255,0.4)] bg-gray-300/10 hover:bg-white hover:text-[#121212] rounded-full flex justify-center items-center cursor-pointer transition-all duration-300 ease"
          >
            <FaYoutube />
          </a>
        </span>
        <button
          className="hidden lg:inline border-2 border-white w-40 h-[60px] font-semibold text-[1.1rem] cursor-pointer hover:bg-white hover:text-[#121212] transition-all duration-300 ease"
          onClick={() => haddleNavigate("contacts")}
        >
          Let's Connect
        </button>
      </div>
      {/* small screen menu toggle */}
      <div
        className={
          menu
            ? "sm:hidden absolute left-0 top-[70px] translate-x-[0px] h-[calc(100vh-70px)] w-full z-[100] transition-all duration-300 ease-in"
            : "sm:hidden absolute left-0 top-[70px] translate-x-[-100%] h-[calc(100vh-70px)] w-full z-[100] transition-all duration-300 ease-in"
        }
      >
        <div className="flex flex-col h-full justify-center items-center gap-10 bg-[#121212] transition-all duration-300 ease-in-out">
          <ul className="flex flex-col justify-center items-center text-[1.2rem] gap-3 tracking-[0.8px]">
            <li
              className={
                active === "home"
                  ? "opacity-[75%] cursor-pointer text-orange-400"
                  : "opacity-[75%] cursor-pointer"
              }
              onClick={() => haddleNavigate("home")}
            >
              Home
            </li>
            <li
              className={
                active === "skills"
                  ? "cursor-pointer text-orange-400"
                  : "cursor-pointer"
              }
              onClick={() => haddleNavigate("skills")}
            >
              Skills
            </li>
            <li
              className={
                active === "projects"
                  ? "cursor-pointer text-orange-400"
                  : "cursor-pointer"
              }
              onClick={() => haddleNavigate("projects")}
            >
              Projects
            </li>
          </ul>
          <span className="flex justify-center items-center gap-5">
            <a
              href=""
              className="w-10 h-10 text-[1.1rem] border-2 border-[rgba(255,255,255,0.4)] bg-[rgba(217,217,217,0.5)] rounded-full flex justify-center items-center cursor-pointer "
            >
              <FaLinkedinIn />
            </a>
            <a
              href=""
              className="w-10 h-10 text-[1.1rem] border-2 border-[rgba(255,255,255,0.4)] bg-[rgba(217,217,217,0.5)]  rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaFacebookF />
            </a>
            <a
              href=""
              className="w-10 h-10 text-[1.1rem] border-2 border-[rgba(255,255,255,0.4)] bg-[rgba(217,217,217,0.5)]  rounded-full flex justify-center items-center cursor-pointer"
            >
              <FaYoutube />
            </a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
