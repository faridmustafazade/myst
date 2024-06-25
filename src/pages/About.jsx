import React from "react";
import logo2 from "../assets/images/65c08b0a8af9a70b28444ff8_logo-2.png";
import logo1 from "../assets/images/65c08b0a3e490e7d102a7db9_logo-1.png";
import logo4 from "../assets/images/65c08b0bde98f1b59a5ec726_logo-4.png";
import logo5 from "../assets/images/65c08b024ab2d0d8d56e89a8_logo-5.png";
import logo6 from "../assets/images/65c08b03e77582c3715ea837_logo-6.png";
import about from "../assets/images/65c08b0adb7ba2c3a7457a46_about.png";

import Group from "../components/about/Group";
const About = () => {
  return (
    <div className="py-20 px-4">
      <div>
        <p className="font-big-bold text-[86px] w-[70%] leading-normal">
          WE ARE FUELED BY OUR PASSION FOR CREATIVITY, INNOVATION,AND
          CUTTING-EDGE IDEAS.
        </p>
        <div className="flex items-center justify-between  mt-44 mb-24">
          <div className="flex items-center w-[55%]">
            <div className="border border-primaryBorder rounded-full p-10">
              <img className="h-24 w-24 object-contain" src={logo2} alt="" />
            </div>
            <div className="border border-primaryBorder rounded-full p-10">
              <img className="h-24 w-24 object-contain" src={logo1} alt="" />
            </div>
            <div className="border border-primaryBorder rounded-full p-10">
              <img className="h-24 w-24 object-contain" src={logo4} alt="" />
            </div>
            <div className="border border-primaryBorder rounded-full p-10">
              <img className="h-24 w-24 object-contain" src={logo5} alt="" />
            </div>
            <div className="border border-primaryBorder rounded-full p-10">
              <img className="h-24 w-24 object-contain" src={logo6} alt="" />
            </div>
          </div>
          <p className="font-big-medium text-2xl w-[44%]">
            A customer-focused company that believes in delivering outstanding
            experiences. We are dedicated to nderstanding our clients' unique
            needs and goals, and we work tirelessly to exceed their
            expectations. We strive to build long-lasting relationships with our
            clients based on trust and respect.
          </p>
        </div>
      </div>
      <div>
        <img src={about} alt="" />
      </div>
      <div>
        <p className="text-[68px] font-big-bold mt-16 mb-5">MEET THE TEAM</p>
        <Group />
      </div>
    </div>
  );
};

export default About;
