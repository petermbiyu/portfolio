import CarouselModule from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { FaHtml5, FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiPostgresql, SiTypescript } from "react-icons/si";
import { assets } from "../assets/assets";

const Skills = () => {
  const Carousel = CarouselModule.default || CarouselModule;
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };
  return (
    <section id="skills" className="text-white mt-0  pb-[50px] relative ">
      <div className="bg-[#151515] mx-0 md:mx-10 lg:mx-20 relative z-[1] rounded-[64px] text-center px-[50px] py-[60px] mt-[-60px]">
        <div>
          <h2 className="text-[45px] font-bold">Technical Skills</h2>
          <p className="text-[#B8B8B8] text-[18px] leading-[1.5] mt-[14px] mb-[75px]">
            I work across the full web development stack, using modern frontend
            technologies like React, JavaScript, Tailwind CSS, and Vite,
            alongside Node.js and Express.js for backend development. I also
            have experience working with sql (PostgreSQL, MySQL, SQLite,)
            MongoDB, Prisma, and Mongoose to build complete and reliable web
            applications.
          </p>
          <Carousel
            responsive={responsive}
            infinite={true}
            className="w-full sm:w-[90%] md:w-[80%] mx-auto px-3 sm:px-10"
          >
            <div>
              <img
                src={assets.meter1}
                alt="html"
                className="w-[50%] min-w-[200px] mx-auto mb-[15px]"
              />
              <h2 className="text-[1rem] font-bold">
                HTML{" "}
                <FaHtml5 className="inline text-orange-500 text-[1.3rem]" />
              </h2>
            </div>
            <div>
              <img
                src={assets.meter2}
                alt="tailwindcss"
                className="w-[50%] min-w-[200px]  mx-auto mb-[15px] "
              />
              <h2 className="text-[1rem] font-bold">
                Tailwind CSS{" "}
                <RiTailwindCssFill className="inline text-blue-400 text-[1.3rem]" />
              </h2>
            </div>
            <div>
              <img
                src={assets.meter3}
                alt="react"
                className="w-[50%] min-w-[200px]  mx-auto mb-[15px]"
              />
              <h2 className="text-[1rem] font-bold">
                React <FaReact className="inline text-blue-500 text-[1.3rem]" />
              </h2>
            </div>
            <div>
              <img
                src={assets.meter2}
                alt="postgres"
                className="w-[50%] min-w-[200px]  mx-auto mb-[15px]"
              />
              <h2 className="text-[1rem] font-bold">
                Postgres SQL{" "}
                <SiPostgresql className="inline text-blue-600 text-[1.3rem]" />
              </h2>
            </div>
            <div>
              <img
                src={assets.meter1}
                alt="typescript"
                className="w-[50%] min-w-[200px]  mx-auto mb-[15px]"
              />
              <h2 className="text-[1rem] font-bold">
                TypeScript{" "}
                <SiTypescript className="inline text-blue-500 text-[1.3rem]" />
              </h2>
            </div>
          </Carousel>
        </div>
      </div>
      <img
        src={assets.colorSharp}
        alt="skill img1"
        className="absolute top-[28%] z-[0] w-[40%] bottom-0"
      />
    </section>
  );
};

export default Skills;
