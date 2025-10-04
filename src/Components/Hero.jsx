import React from "react";
import Myphoto from "../Images/HeroPhoto.png";
import { FaFacebook, FaGithub, FaLinkedin } from "react-icons/fa";

const Hero = () => {
  return (
    <section className="hero">
      <div className="hidden animate__animated animate__fadeInDown animate__slow lg:flex flex-row-reverse justify-between mt-8 overflow-hidden">
        <img
          src={Myphoto}
          alt=""
          className="animate__animated animate__fadeInTopLeft w-[600px] top-35 lg:top-auto lg:bottom-0 lg:right-20 "
        />
        <div className="info animate__animated animate__fadeInTopRight lg:ml-20 lg:mt-60 pl-10 lg:pl-0">
          <h1 className="info_name anurati uppercase text-[36px] lg:text-[55px] drop-shadow drop-shadow-[#727fde] mb-8">
            abdul kader bhuiyan
          </h1>
          <div className="info-title w-48 h-11 relative flex justify-center items-center rounded-3xl overflow-hidden mb-8 -ml-2.5">
            <p className="flex items-center justify-center absolute z-10 quick font-bold bg-[#0f0325] w-46.5 h-9.5 text-center rounded-4xl">
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
      <div className="block h-[93vh] py-20 animate__animated animate__fadeInDown lg:hidden overflow-hidden">
        <img
          src={Myphoto}
          alt=""
          className="w-[600px] top-35 lg:top-auto lg:bottom-0 lg:right-20 "
        />
        <div className="info lg:ml-20 lg:mt-60 pl-10 lg:pl-0">
          <h1 className="info_name anurati uppercase text-[36px] lg:text-[55px] drop-shadow drop-shadow-[#727fde] mb-8">
            abdul kader bhuiyan
          </h1>
          <div className="info-title w-48 h-11 relative flex justify-center items-center rounded-3xl overflow-hidden mb-8 -ml-2.5">
            <p className="flex items-center justify-center absolute z-10 quick font-bold bg-[#0f0325] w-46.5 h-9.5 text-center rounded-4xl">
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
    </section>
  );
};

export default Hero;
