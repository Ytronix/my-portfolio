import React from "react";
import logo from "../Images/AK.png";
import { AiOutlineSend } from "react-icons/ai";

const Navbar = ({ active, setActive, setToggle }) => {
  return (
    <div className="animate__animated animate__fadeInUp">
      <div className="w-[90vw] mx-auto flex justify-between items-center py-1 px-5 lg:px-10 bg-[#f5f5f520] rounded-full relative top-2.5 backdrop-blur shadow">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu dropdown-content bg-base-100 rounded-box z-1 mt-3 w-40 p-2 shadow gap-2.5"
            >
              <li
                onClick={() => {
                  setToggle("projects");
                  setActive("projects");
                }}
                className={`${
                  active === "projects" ? "active-state" : ""
                } nav-btn btn w-full relative z-10 bg-transparent border-none shadow-none rounded-3xl`}
              >
                <a>Projects</a>
              </li>
              <li
                onClick={() => {
                  setToggle("skills");
                  setActive("skills");
                }}
                className={`${
                  active === "skills" ? "active-state" : ""
                } nav-btn btn w-full relative z-10 bg-transparent border-none shadow-none rounded-3xl`}
              >
                <a>Skills</a>
              </li>
              <li
                onClick={() => {
                  setToggle("about");
                  setActive("about");
                }}
                className={`${
                  active === "about" ? "active-state" : ""
                } nav-btn btn w-full relative z-10 bg-transparent border-none shadow-none rounded-3xl`}
              >
                <a>About</a>
              </li>
            </ul>
          </div>
          <img
            onClick={() => {
              setToggle("home");
              setActive("home");
            }}
            src={logo}
            alt="Logo"
            className="w-16 cursor-pointer"
          />
        </div>
        <div className="navbar-mid hidden lg:flex bg-[rgba(0,0,69,0.3)] w-[700px] rounded-full backdrop-blur">
          <ul className="w-full flex justify-between items-center">
            <li
              onClick={() => {
                setToggle("projects");
                setActive("projects");
              }}
              className={`${
                active === "projects" ? "active-state" : ""
              } nav-btn btn relative z-10 px-5 bg-transparent border-none shadow-none rounded-3xl`}
            >
              <a>Projects</a>
            </li>
            <li
              onClick={() => {
                setToggle("skills");
                setActive("skills");
              }}
              className={`${
                active === "skills" ? "active-state" : ""
              } nav-btn btn relative z-10 px-5 bg-transparent border-none shadow-none rounded-3xl`}
            >
              <a>Skills</a>
            </li>
            <li
              onClick={() => {
                setToggle("about");
                setActive("about");
              }}
              className={`${
                active === "about" ? "active-state" : ""
              } nav-btn btn relative z-10 px-5 bg-transparent border-none shadow-none rounded-3xl`}
            >
              <a>About</a>
            </li>
          </ul>
        </div>
        <div className="navbar-end">
          <button
            onClick={() => {
              setToggle("contact");
              setActive("contact");
            }}
            className="nav-btn contact btn relative bg-transparent w-34 h-10 shadow rounded-3xl z-10 overflow-x-hidden"
          >
            <AiOutlineSend className="text-lg"></AiOutlineSend>
            <span>Contact Me</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
