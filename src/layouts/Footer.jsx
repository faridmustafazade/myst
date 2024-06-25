import React from "react";
import Slider from "../components/Slider";
import facebook from "../assets/images/65c08b0a176f96ac450460ee_facebook.png";
import linkedin from "../assets/images/65c08b0b487000790bee2b48_linkedin.png";
import instagram from "../assets/images/65c08b0a6594ac3a73eec7bd_instagram.png";
import dribbble from "../assets/images/65c08b0a67c2d3e364c83bbe_dribbble.png";
import x from "../assets/images/65c08b09daccf3250bcd998e_x.png";
import { Link } from "react-router-dom";
const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <>
      <Slider />
      <div className="my-10 flex md:flex-row flex-col md:items-center md:justify-between px-2 md:px-5">
        <p className="cursor-pointer flex items-center justify-center font-big-regular text-3xl border border-primaryBorder md:w-[487px] h-[85px]">
          info@myst.webflow.io
        </p>
        <p className="cursor-pointer flex items-center justify-center font-big-regular text-3xl border border-primaryBorder md:w-[487px] h-[85px]">
          +399 123 456-78-90
        </p>
        <div className="flex items-center md:justify-normal justify-center gap-1 border border-primaryBorder p-2">
          <img
            className="cursor-pointer py-3 px-3 md:px-6 border border-primaryBorder bg-[#090909]"
            src={facebook}
            alt=""
          />
          <img
            className="cursor-pointer py-3 px-3 md:px-6 border border-primaryBorder bg-[#090909]"
            src={linkedin}
            alt=""
          />
          <img
            className="cursor-pointer py-3 px-3 md:px-6 border border-primaryBorder bg-[#090909]"
            src={instagram}
            alt=""
          />
          <img
            className="cursor-pointer py-3 px-3 md:px-6 border border-primaryBorder bg-[#090909]"
            src={dribbble}
            alt=""
          />
          <img
            className="cursor-pointer py-3 px-3 md:px-6 border border-primaryBorder bg-[#090909]"
            src={x}
            alt=""
          />
        </div>
      </div>
      <p className="font-big-regular text-xl pb-8 text-center">
        © {year} Myst - Made by{" "}
        <Link
          to={"https://faridmustafazade.vercel.app/"}
          target="_blank"
          className="underline"
        >
          Farid Mustafazade
        </Link>
      </p>
    </>
  );
};

export default Footer;
