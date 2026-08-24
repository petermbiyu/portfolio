import { useState } from "react";
import ProjectCard from "./ProjectCard";
import { assets } from "../assets/assets";

const Projects = () => {
  const projects = [
    {
      title: "Business Startup",
      description: "Design and develop",
      imgUrl: assets.projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design and develop",
      imgUrl: assets.projectImg2,
    },
    {
      title: "Business Startup",
      description: "Design and develop",
      imgUrl: assets.projectImg3,
    },
    {
      title: "Business Startup",
      description: "Design and develop",
      imgUrl: assets.projectImg1,
    },
    {
      title: "Business Startup",
      description: "Design and develop",
      imgUrl: assets.projectImg2,
    },
    {
      title: "Business Startup",
      description: "Design and develop",
      imgUrl: assets.projectImg3,
    },
  ];

  const [tabs, setTabs] = useState(1);
  const handleTabs = (index) => {
    setTabs(index);
  };
  return (
    <section id="projects" className="text-white mt-0  pb-[50px] relative ">
      <div className="mx-5 md:mx-10 lg:mx-20 text-center py-[60px]">
        <h2 className="text-[45px] font-bold">Projects</h2>
        <p className="text-[#B8B8B8] text-[18px] leading-[1.5] mt-[14px] mb-[75px]">
          This section present a curated list of most of my work using different
          technologies. Many of this projects have allowed me learn and
          understand the logic behind these technologies
        </p>
        <div className="flex justify-center mb-[50px]">
          <span
            onClick={() => handleTabs(1)}
            className={
              tabs === 1
                ? "w-[20%] inline-block text-center font-bold py-4 border-2 rounded-l-full cursor-pointer bg-linear-[90deg] from-[rgba(170,54,124)] to-[rgba(74,47,169)] transition-all duration-300 ease"
                : "w-[20%] inline-block text-center font-bold py-4 border-2 rounded-l-full cursor-pointer text-[#B8B8B8] bg-[#151515] transition-all duration-400 ease-in-out"
            }
          >
            Tab 1
          </span>
          <span
            onClick={() => handleTabs(2)}
            className={
              tabs === 2
                ? "w-[20%] inline-block text-center font-bold py-4 border-y-2  cursor-pointer bg-linear-[90deg] from-[rgba(170,54,124)] to-[rgba(74,47,169)] transition-all duration-300 ease"
                : "w-[20%] inline-block text-center font-bold py-4 border-y-2 cursor-pointer text-[#B8B8B8] bg-[#151515] transition-all duration-400 ease-in-out"
            }
          >
            Tab 2
          </span>
          <span
            onClick={() => handleTabs(3)}
            className={
              tabs === 3
                ? "w-[20%] inline-block text-center font-bold py-4 border-2 rounded-r-full cursor-pointer bg-linear-[90deg] from-[rgba(170,54,124)] to-[rgba(74,47,169)] transition-all duration-300 ease"
                : "w-[20%] inline-block text-center font-bold py-4 border-2 rounded-r-full cursor-pointer text-[#B8B8B8] bg-[#151515] transition-all duration-400 ease-in-out"
            }
          >
            Tab 3
          </span>
        </div>
        <div>
          {/* tab 1 content */}
          <div
            className={
              tabs === 1
                ? "w-full flex flex-wrap justify-center gap-6"
                : "hidden"
            }
          >
            {projects.map((project, index) => {
              return (
                <div key={index} className="w-full max-w-[400px]">
                  <ProjectCard {...project} />
                </div>
              );
            })}
          </div>
          {/* tab 2 content */}
          <div className={tabs === 2 ? "block" : "hidden"}>
            <h2>content 2</h2>
          </div>
          {/* tab 3 content */}
          <div className={tabs === 3 ? "block" : "hidden"}>
            <h2>content 3</h2>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
