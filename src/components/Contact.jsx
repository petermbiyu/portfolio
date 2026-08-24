import React, { useRef, useState } from "react";
import { assets } from "../assets/assets";
import emailjs from "@emailjs/browser";

const Contact = () => {
  const form = useRef();
  const [status, setStatus] = useState("");
  const sendMail = async (e) => {
    e.preventDefault();
    setStatus("...sending");
    try {
      const result = await emailjs.sendForm(
        import.meta.env.VITE_EMAILJS_SERVICE_ID,
        import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
        form.current,
        import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
      );
      if (result.status === 200) {
        setStatus("Message sent successfully");
        form.current.reset();
      } else {
        setStatus(
          "Unable to send message at the moment. Please try again later",
        );
      }
    } catch (error) {
      setStatus("Something went wrong. Please try again later!");
      console.log(error.text);
    }
  };

  return (
    <section id="contacts" className="text-white mt-0 relative ">
      <div className="w-full py-20 px-5 sm:px-10 md:px-20 bg-linear-[90deg] from-[rgba(170,54,124)] to-[rgba(74,47,169)] flex justify-center items-center">
        <div className="px-10 hidden flex-1 sm:flex sm:w-[30%] md:w-[40%] lg:w-[50%]">
          <img src={assets.contactImg} alt="contact image" />
        </div>
        <div className="w-full flex-1 sm:w-[70%] md:w-[60%] lg:w-[50%]">
          <h2 className="text-[45px] font-bold mb-[20px]">Get in Touch</h2>
          <form ref={form} onSubmit={sendMail}>
            <div className="lg:flex items-center justify-center gap-2 mb-[10px]">
              <input
                type="text"
                placeholder="First Name"
                name="first_name"
                required
                className="w-full lg:w-[50%] py-3 sm:py-4 px-5 outline-none border-2 border-[#B8B8B8] rounded-[15px]  bg-gray-200/10"
              />
              <input
                type="text"
                name="last_name"
                placeholder="Last Name"
                required
                className="w-full mt-2 lg:w-[50%] py-3 sm:py-4 px-5 outline-none border-2 border-[#B8B8B8] rounded-[15px] bg-gray-200/10"
              />
            </div>
            <div className="lg:flex items-center justify-center gap-2 mb-[10px]">
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                required
                className="w-full lg:w-[50%] py-3 sm:py-4 px-5 outline-none border-2 border-[#B8B8B8] rounded-[15px] w-[50%] bg-gray-200/10"
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone No."
                className="w-full mt-2 lg:w-[50%] py-3 sm:py-4 px-5 outline-none border-2 border-[#B8B8B8] rounded-[15px] w-[50%] bg-gray-200/10"
              />
            </div>
            <div className="mb-[10px] sm:mb-[20px]">
              <textarea
                name="message"
                required
                className="py-4 px-5 outline-none border-2 border-[#B8B8B8] rounded-[15px] w-[100%] h-40 md:h-60 bg-gray-200/10"
              ></textarea>
            </div>
            <button
              type="submit"
              className=" px-11 py-3 font-bold bg-white hover:bg-[#B8B8B8] text-black rounded-[5px] cursor-pointer translate-all duration-300 ease"
            >
              Send
            </button>
          </form>
          <div>
            <p>{status}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
