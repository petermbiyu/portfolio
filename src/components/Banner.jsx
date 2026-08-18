import React, { useEffect, useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import { assets } from "../assets/assets";

const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState("");
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["Web Developer", "Web Designer", "UI/UX Designer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    const tick = () => {
      let i = loopNum % toRotate.length;
      let fullText = toRotate[i];
      let updatedText = isDeleting
        ? fullText.substring(0, text.length - 1)
        : fullText.substring(0, text.length + 1);

      setText(updatedText);
      if (isDeleting) {
        setDelta((prev) => prev / 2);
      }
      if (!isDeleting && updatedText === fullText) {
        setIsDeleting(true);
        setDelta(period);
      } else if (isDeleting && updatedText === "") {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setDelta(500);
      }
    };
    return () => {
      clearInterval(ticker);
    };
  });
  return (
    <section
      id="home"
      className="text-[#B8B8B8] mt-0 min-h-screen relative pt-[260px] pb-[100px] bg-[url(../banner-bg.png)] bg-cover bg-no-repeat bg-center bg-linear-[90deg] from-[rgba(170,54,124,0.5)] to-[rgba(74,47,169,0.5)]"
    >
      <div className="mx-5 sm:mx-10 md:mx-15 lg:mx-20">
        <div className="w-full md:w-[90%] lg:w-[70%] relative z-[2]">
          <span className="font-bold spacing-[0.8px] px-[10px] py-[8px] text-[20px] mb-[16px] inline-block border-1 border-gray-500 bg-linear-to-bl from-violet-500 to-fuchsia-500">
            Welcome to my Portfolio
          </span>
          <h1 className="text-[30px] md:text-[40] lg:text-[50px] font-bold spacing-[0.8px] mb-[20px] block leading-none">
            Hi, Peter Muigai here
            <br />
            and I'm a <span>{text}</span>
          </h1>
          <p className="text-[#B8B8B8] text-[18px] spacing-[0.8px] leading-relaxed w-[96%]">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis
            at voluptas pariatur, itaque culpa provident quo dicta enim omnis
            corrupti fugit alias. Asperiores consequatur laudantium quas placeat
            nostrum commodi magnam molestias fugiat ipsam, reprehenderit rem,
            facilis odio autem consequuntur! Voluptates temporibus quos quidem
            odit delectus quod molestias officia accusantium modi magnam iusto
            earum veritatis, reiciendis dolorem nemo harum soluta magni
            suscipit?
          </p>
          <button
            className="py-2 px-5 border-1 rounded-full font-bold text-[20px] mt-[60px] "
            onClick={() => console.log("connected")}
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
