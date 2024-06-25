import React from "react";
import { Helmet } from "react-helmet";

const Contact = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Contact</title>
      </Helmet>
      <div className="py-20 px-4">
        <div className="flex flex-col md:flex-row gap-10 md:gap-0 items-start justify-between">
          <div className="md:w-[20%] flex flex-col gap-7">
            <p className="font-big-bold text-4xl uppercase">Contact</p>
            <span className="font-mono-regular text-lg opacity-50">
              123 Imaginary Ave, Unit 404, Fictional Town, XY Z12 3AB
              Fantasyland
            </span>
            <div>
              <p className="font-mono-regular text-lg opacity-50">
                +9 876-543-2101
              </p>
              <p className="font-mono-regular text-lg opacity-50">
                info@myst.webflow.io
              </p>
            </div>
          </div>
          <div className="md:w-[50%] w-full">
            <p className="font-big-bold text-4xl uppercase border-b pb-5">
              drop us a line
            </p>
            <form action="" className="mt-10 w-full">
              <div className="flex flex-col md:flex-row justify-between my-10 gap-10 md:gap-0">
                <input
                  required
                  type="text"
                  className="md:w-[48%] border-b pb-5 bg-transparent text-xl font-mono-regular focus:border-[#3898EC] text-white placeholder:text-white outline-none"
                  placeholder="Name *"
                />
                <input
                  required
                  type="text"
                  className="md:w-[48%] border-b pb-5 bg-transparent text-xl font-mono-regular focus:border-[#3898EC] text-white placeholder:text-white outline-none"
                  placeholder="Last Name *"
                />
              </div>
              <div className="flex flex-col md:flex-row justify-between my-10 gap-10 md:gap-0">
                <input
                  required
                  type="email"
                  className="md:w-[48%] border-b pb-5 bg-transparent text-xl font-mono-regular focus:border-[#3898EC] text-white placeholder:text-white outline-none"
                  placeholder="Email Address *"
                />
                <input
                  required
                  type="number"
                  className="remove-arrow md:w-[48%] border-b pb-5 bg-transparent text-xl font-mono-regular focus:border-[#3898EC] text-white placeholder:text-white outline-none"
                  placeholder="Phone Number *"
                />
              </div>
              <textarea
                required
                placeholder="Message *"
                className="w-full bg-transparent border-b pb-5 text-xl font-mono-regular focus:border-[#3898EC] text-white placeholder:text-white outline-none"
                cols="30"
                rows="4"
              ></textarea>
              <div className="flex justify-start md:justify-end font-big-medium text-xl my-10">
                <button
                  type="submit"
                  className="border border-primaryBorder px-24 py-5 hover:bg-white hover:text-black duration-300 uppercase"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
