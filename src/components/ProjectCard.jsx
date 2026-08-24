import { useState } from "react";
import { FaGithub, FaEye } from "react-icons/fa";

const ProjectCard = ({ title, description, imgUrl, prevLink, gitLink }) => {
  const [isOverlayVisible, setIsOverlayVisible] = useState(false);
  const toggleOverlay = () => {
    const isDesktop = window.matchMedia("(hover:hover)").matches;
    if (!isDesktop) {
      setIsOverlayVisible((prev) => !prev);
    }
  };
  return (
    <div onClick={toggleOverlay} className=" relative group overflow-hidden">
      <img
        src={imgUrl}
        alt="image card"
        className="w-full h-full rounded-[20px] max-h-[290px]"
      />
      <div
        className={`absolute flex items-center justify-center flex-col top-0 w-full h-full bg-linear-to-t from-[rgba(170,54,124,0.7)] to-[rgba(74,47,169)]  rounded-[20px]  transition-all duration-300 ease-in-out ${isOverlayVisible ? "translate-y-0" : "translate-y-[-100%] group-hover:translate-y-0"}`}
      >
        <h3 className="text-[1.3rem] font-bold ">{title}</h3>
        <p className="italic tracking-wide mb-5">{description}</p>
        <div className="w-full flex items-center justify-evenly ">
          <a href={prevLink} target="_blank">
            <FaEye className="text-[2rem] cursor-pointer" />
          </a>
          <a href={gitLink} target="_blank">
            <FaGithub className="text-[2rem] cursor-pointer" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
