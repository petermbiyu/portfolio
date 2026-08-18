import React from "react";
import { FaLinkedinIn, FaFacebookF, FaYoutube } from "react-icons/fa";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <section className="text-white my-0 border-1 border-[#121212] relative bg-[url(/footer-bg.png)] bg-cover bg-center bg-no-repeat">
      <div className="flex justify-between items-center pt-10 mx-5 sm:mx-10 md:mx-20">
        <div>
          <img
            src={assets.logo}
            alt="logo"
            className="cursor-pointer w-[50%]"
          />
        </div>
        <div>
          <span className="flex justify-end items-center gap-3 z-101">
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
        </div>
      </div>
      <div>
        <p className="my-5 text-right mx-5 sm:mx-10 md:mx-20">
          &copy; copyright {new Date().getFullYear()}. All rights reserved
        </p>
      </div>
    </section>
  );
};

export default Footer;
