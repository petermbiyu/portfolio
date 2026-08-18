import React from "react";
import { assets } from "../assets/assets";
import { BsArrowUpRightCircleFill } from "react-icons/bs";

const ProjectCard = ({ title, description, imgUrl }) => {
  return (
    <div className=" relative group overflow-hidden ">
      <img src={imgUrl} alt="image card" />
      <div className="absolute flex items-center justify-center flex-col top-0 w-full h-full bg-linear-to-t from-[rgba(170,54,124,0.7)] to-[rgba(74,47,169)] translate-y-[-100%] rounded-[20px] group-hover:translate-y-[0px] transition-all duration-300 ease-in-out">
        <h3 className="text-[1.3rem] font-bold ">{title}</h3>
        <p className="italic tracking-wide mb-5">{description}</p>
        <BsArrowUpRightCircleFill className="text-[2rem] cursor-pointer" />
      </div>
    </div>
  );
};

export default ProjectCard;
