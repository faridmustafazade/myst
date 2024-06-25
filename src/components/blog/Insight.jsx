import React from "react";
import arrow from "../../assets/images/65c08b095894473eedeb0c1c_arrow.png";
import { Link } from "react-router-dom";

const Insight = ({ date, name, image, link }) => {
  function handleClick() {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  return (
    <div className="group md:w-[49%] flex flex-col gap-8 pt-16">
      <Link
        to={`/blog-posts/${link}`}
        onClick={handleClick}
        className="cursor-pointer overflow-hidden w-full"
      >
        <img
          src={image}
          className="w-full hover:rotate-12 hover:scale-125 duration-300"
          alt=""
        />
      </Link>
      <p className="text-xl font-mono-regular opacity-50 group-hover:opacity-100 duration-300">
        {date}
      </p>
      <p className="text-4xl font-big-bold uppercase">{name}</p>
      <Link
        to={`/blog-posts/${link}`}
        onClick={handleClick}
        className="flex items-center overflow-hidden"
      >
        <img
          src={arrow}
          className="cursor-pointer transform hover:scale-x-150 duration-300"
          alt=""
        />
      </Link>
    </div>
  );
};

export default Insight;
