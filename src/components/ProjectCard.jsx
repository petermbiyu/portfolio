import React, { useState } from "react";
import { assets } from "../assets/assets";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ProjectCard = ({ title, description, imgUrl }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    const isDesktop = window.matchMedia("(hover:hover)").matches;
    if (!isDesktop) {
      setIsOverlayVisible((prev) => !prev);
    }
  };
  return (
    <div
      onClick={toggleOverlay}
      className=" relative group overflow-hidden cursor-pointer"
    >
      <img src={imgUrl} alt="image card" />
      <div
        className={`absolute flex items-center justify-center flex-col top-0 w-full h-full bg-linear-to-t from-[rgba(170,54,124,0.7)] to-[rgba(74,47,169)]  rounded-[20px]  transition-all duration-300 ease-in-out ${isOverlayVisible ? "translate-y-0" : "translate-y-[-100%] group-hover:translate-y-0"}`}
      >
        <h3 className="text-[1.3rem] font-bold ">{title}</h3>
        <p className="italic tracking-wide mb-5">{description}</p>
        <BsArrowUpRightCircleFill className="text-[2rem] cursor-pointer" />
      </div>
    </div>
  );
};

export default ProjectCard;
