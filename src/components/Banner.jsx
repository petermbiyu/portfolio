import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets";

const Banner = () => {
  return (
    <section
      id="home"
      className="text-[#B8B8B8] mt-0 min-h-screen relative pt-[100px] lg:pt-[260px] pb-[100px] bg-[url(/banner-bg.png)] bg-cover bg-no-repeat bg-center "
    >
      <div className="mx-5 sm:mx-10 md:mx-15 lg:mx-20">
        <div className="w-full md:w-[90%] lg:w-[70%] relative z-[2]">
          <span className="font-bold spacing-[0.8px] px-[10px] py-[8px] text-[20px] mb-[16px] inline-block border-1 border-gray-500 bg-linear-[90deg] from-[rgba(170,54,124)] to-[rgba(74,47,169)] ">
            Welcome to my Portfolio
          </span>
          <h1 className="text-[25px] md:text-[35] lg:text-[45px] font-bold spacing-[0.8px] mb-[20px] block leading-none">
            Hi, I'm Peter Muigai
          </h1>
          <p className="text-[#B8B8B8] md:text-[18px] spacing-[0.8px] leading-relaxed text-justify md:text-left ">
            A passionate Frontend and Backend Developer, Blogger, Vlogger, and
            Teacher.
          </p>
          <p className="backdrop-blur-[15px] md:text-[18px] text-justify md:text-left">
            I enjoy building modern, responsive, and user-friendly web
            applications that solve real-world problems. From creating engaging
            frontend experiences to developing powerful backend systems and
            working with databases, I love turning ideas into functional digital
            solutions. Beyond coding, I share knowledge and experiences through
            blogging and vlogging, covering topics around technology, personal
            growth, education, and everyday life. As a teacher, I’m also
            passionate about helping others learn, grow, and discover their
            potential.
            <br /> I believe in continuous learning, creativity, and using
            technology and knowledge to make a meaningful impact.
          </p>
          <button
            className="py-2 px-5 border-1 rounded-full font-bold text-[20px] mt-[20px] md:mt-[60px] hover:bg-white hover:text-[#121212] translate-all duration-300 ease"
            onClick={() => {
              document
                .getElementById("contacts")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Let's connect <FaArrowRight className="inline" />
          </button>
        </div>
        <div className="absolute right-20 top-[70px] z-[0]">
          <img
            src={assets.profileBg}
            alt="profile img"
            className="w-120 rounded-full animate-[float_4s_linear_infinite]"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner;
