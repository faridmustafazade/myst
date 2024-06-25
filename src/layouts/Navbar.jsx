import React, { useState } from "react";
import logo from "../assets/images/svgs/65c08b0ac960fc6db96874be_logo.svg";
import { Link } from "react-router-dom";
import { CgMenu } from "react-icons/cg";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <>
      <div>
        <div className="flex items-center justify-between py-6 px-6 border-b border-primaryBorder">
          <Link to={""}>
            <img className="w-32" src={logo} alt="" />
          </Link>
          <div
            className="md:hidden border border-primaryBorder p-5"
            onClick={toggleMenu}
          >
            <CgMenu />
          </div>
          <div className="hidden md:flex items-center gap-2 px-4 py-1 rounded-full border border-primaryBorder">
            <p className="font-mono-regular">we are available for work</p>
            <div className="w-2 h-2 rounded-full bg-[#70d800]"></div>
          </div>
        </div>
        <div className="hidden md:flex items-start justify-center">
          <Link
            to={""}
            className="pl-6 flex flex-col gap-5 w-[24.5%] border-l border-b border-primaryBorder py-5"
          >
            <p className="font-mono-regular flex justify-center items-center w-5 h-5 border border-primaryBorder p-4">
              1
            </p>
            <p className="font-big-extralight text-5xl">HOME</p>
          </Link>
          <Link
            to={"/about"}
            className="pl-6 flex flex-col gap-5 w-[24.5%] border-l border-b border-primaryBorder py-5"
          >
            <p className="font-mono-regular flex justify-center items-center w-5 h-5 border border-primaryBorder p-4">
              2
            </p>
            <p className="font-big-extralight text-5xl">ABOUT</p>
          </Link>
          <Link
            to={"/blog"}
            className="pl-6 flex flex-col gap-5 w-[24.5%] border-l border-b border-primaryBorder py-5"
          >
            <p className="font-mono-regular flex justify-center items-center w-5 h-5 border border-primaryBorder p-4">
              3
            </p>
            <p className="font-big-extralight text-5xl">BLOG</p>
          </Link>
          <Link
            to={"/contact"}
            className="pl-6 flex flex-col gap-5 w-[24.5%] border-l border-r border-b border-primaryBorder py-5"
          >
            <p className="font-mono-regular flex justify-center items-center w-5 h-5 border border-primaryBorder p-4">
              4
            </p>
            <p className="font-big-extralight text-5xl">CONTACT</p>
          </Link>
        </div>
      </div>

      {/* Dropdown menu */}
      <div
        className={`bg-black absolute z-50 w-full transition-transform duration-500 ease-in-out ${
          menuOpen ? "max-h-screen" : "max-h-0 overflow-hidden"
        }`}
      >
        <Link
          to={""}
          onClick={() => setMenuOpen(false)}
          className="flex flex-col items-center gap-5 border-l border-b border-primaryBorder py-5"
        >
          <p className="font-mono-regular flex justify-center items-center w-5 h-5 border border-primaryBorder p-4">
            1
          </p>
          <p className="font-big-extralight text-5xl">HOME</p>
        </Link>
        <Link
          to={"/about"}
          onClick={() => setMenuOpen(false)}
          className="flex flex-col items-center gap-5 border-l border-b border-primaryBorder py-5"
        >
          <p className="font-mono-regular flex justify-center items-center w-5 h-5 border border-primaryBorder p-4">
            2
          </p>
          <p className="font-big-extralight text-5xl">ABOUT</p>
        </Link>
        <Link
          to={"/blog"}
          onClick={() => setMenuOpen(false)}
          className="flex flex-col items-center gap-5 border-l border-b border-primaryBorder py-5"
        >
          <p className="font-mono-regular flex justify-center items-center w-5 h-5 border border-primaryBorder p-4">
            3
          </p>
          <p className="font-big-extralight text-5xl">BLOG</p>
        </Link>
        <Link
          to={"/contact"}
          onClick={() => setMenuOpen(false)}
          className="flex flex-col items-center gap-5 border-l border-r border-b border-primaryBorder py-5"
        >
          <p className="font-mono-regular flex justify-center items-center w-5 h-5 border border-primaryBorder p-4">
            4
          </p>
          <p className="font-big-extralight text-5xl">CONTACT</p>
        </Link>
      </div>
    </>
  );
};

export default Navbar;
