import React, { useState } from "react";
import webDev from "../Images/webdev.png";
import appDev from "../Images/appdev.png";
import webdesign from "../Images/webdesign.png";
import myPhoto from "../Images/MyPhoto.png";
import { AiOutlineX } from "react-icons/ai";
import { RiAddLine, RiFacebookLine, RiInstagramLine } from "react-icons/ri";

const About = () => {
  const [isOpen, setIsOpen] = useState(false);
  const openSocialLinks = () => {
    isOpen ? setIsOpen(false) : setIsOpen(true);
  };

  return (
    <section>
      <aside className="lg:w-[90vw] h-[91vh] mx-auto flex flex-col-reverse gap-24 lg:flex-row lg:gap-150 items-center">
        <div className="profession flex flex-col">
          <h1 className="anurati text-2xl mb-10 pl-5 underline underline-offset-4">My Tech Playground</h1>
          <div className="flex">
            <img
              src={webDev}
              alt="Web Development"
              className="transform scale-[0.7] border-l-2 border-l-[#727fde] pl-5 mb-10"
            />
            <h1 className="quick pt-5 cursor-pointer transition duration-500 transform hover:translate-x-2 hover:text-[#727fde]">
              Web Development
            </h1>
          </div>
          <div className="flex">
            <img
              src={appDev}
              alt="App Development"
              className="transform scale-[0.7] border-l-2 border-l-[#727fde] pl-5 mb-10"
            />
            <h1 className="quick pt-5 cursor-pointer transition duration-500 transform hover:translate-x-2 hover:text-[#727fde]">
              App Development
            </h1>
          </div>
          <div className="flex">
            <img
              src={webdesign}
              alt="Web Design"
              className="transform scale-[0.7] border-l-2 border-l-[#727fde] pl-5"
            />
            <h1 className="quick pt-5 cursor-pointer transition duration-500 transform hover:translate-x-2 hover:text-[#727fde]">
              UI / UX Design
            </h1>
          </div>
        </div>
        <div className="about ml-12 lg:ml-0 self-start pt-16">
          <div className="about-me relative self-center w-80 h-[320px] rounded-2xl">
            <div className="box absolute block inset-[2px] rounded-2xl bg-[rgba(0,0,0,0.6)] z-10 pt-9">
              <div className="photo w-[135px] mx-auto h-[135px] rounded-full border-2 border-[#727fde] grid place-content-center">
                <img
                  src={myPhoto}
                  alt="Abdul Kader"
                  className="w-[120px] h-[120px] object-cover rounded-full"
                />
              </div>
              <h1 className="quick mt-5 font-semibold  text-center text-[#ffffff]">
                Abdul Kader Bhuiyan
              </h1>
              <p className="text-center">
                Web Developer & Software Enthausiast
              </p>
              <div className="link-container absolute w-54 h-14 bg-[#424a66] rounded-4xl bottom-[-30px] left-[50px] flex justify-center items-center overflow-hidden">
                <div
                  className={`link-control flex justify-between w-[90%] pr-1 ${
                    isOpen ? "social-open" : "social-close"
                  }`}
                >
                  <button
                    onClick={openSocialLinks}
                    className="btn relative z-10 top-0 bg-white w-7 h-7 p-0 rounded-full text-3xl text-[#424a66]"
                  >
                    <RiAddLine></RiAddLine>
                  </button>
                  <h1 className="absolute left-0 pl-12">My Social Networks</h1>
                  <div className="links absolute left-0 pl-12 flex gap-7 text-2xl">
                    <a href="www.facebook.com">
                      <RiFacebookLine></RiFacebookLine>
                    </a>
                    <a href="www.instagram.com">
                      <RiInstagramLine></RiInstagramLine>
                    </a>
                    <a href="www.x.com" target="_blank" className="text-xl">
                      <AiOutlineX></AiOutlineX>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </section>
  );
};

export default About;
