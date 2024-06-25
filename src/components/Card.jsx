import React from "react";
import plus from "../assets/images/65c09ec6bc19eafdb0616d39_plus_icon_03.png";
import { Link } from "react-router-dom";
const Card = ({ url, title }) => {
  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className="md:w-[24%] mb-10 flex flex-col gap-5 group">
      <div className="border border-primaryBorder overflow-hidden group-hover:border-secondaryBorder duration-300 p-2 relative">
        <div className="relative group-hover:blur-sm duration-500">
          <img src={url} alt="" />
        </div>
        <div className="absolute opacity-0 group-hover:opacity-100 transform translate-y-full group-hover:translate-y-0 ease-in-out left-0 bottom-0 w-full h-full flex items-center justify-center z-[9999] duration-700">
          <Link
            to={`/work/${title}`}
            onClick={handleClick}
            className="flex items-center gap-4 bg-black bg-opacity-85 hover:bg-opacity-100 duration-300 cursor-pointer p-1.5 pl-6 rounded-full"
          >
            <p className="font-big-medium text-2xl">VIEW PROJECT</p>
            <img src={plus} alt="" />
          </Link>
        </div>
      </div>
      <p className="font-mono-regular text-xl opacity-70 group-hover:opacity-100">
        {title}
      </p>
    </div>
  );
};

export default Card;
