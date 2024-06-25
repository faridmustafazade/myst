import React from "react";

const Member = ({ image, name, job }) => {
  return (
    <div className="md:w-[24%] pt-10 border border-primaryBorder flex flex-col justify-center items-center">
      <img src={image} alt="" />
      <div className="w-full p-10 text-center border-t border-primaryBorder">
        <p className="text-4xl font-big-bold uppercase">{name}</p>
        <p className="text-xl font-mono-regular opacity-50">{job}</p>
      </div>
    </div>
  );
};

export default Member;
