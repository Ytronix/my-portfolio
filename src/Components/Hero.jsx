import React from "react";
import Myphoto from "../Images/HeroPhoto.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <div>
      <img
        src={Myphoto}
        alt=""
        className="w-[600px] absolute -z-10 top-35 lg:top-auto lg:bottom-0 lg:right-20"
      />
      <div className="info mt-126 lg:mt-60 ml-8 lg:ml-20">
        <h1 className="info_name anurati uppercase text-[36px] lg:text-6xl drop-shadow drop-shadow-[#727fde] mb-8">
          abdul kader bhuiyan
        </h1>
        <div className="info-title w-48 h-11 relative flex justify-center items-center rounded-3xl overflow-hidden mb-8 -ml-2.5">
          <p className="flex items-center justify-center absolute z-10 quick font-bold bg-[#121212] w-46.5 h-9.5 text-center rounded-4xl">
            web developer
          </p>
        </div>
        <div className=" info-links flex gap-10 items-center ml-1.5 lg:ml-0">
          <a href="#home">
            <FaFacebook className="info_link relative text-3xl"></FaFacebook>
          </a>
          <a href="#github">
            <FaGithub className="info_link relative text-3xl"></FaGithub>
          </a>
          <a href="#linkedin">
            <FaLinkedin className="info_link relative text-3xl"></FaLinkedin>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Hero;
