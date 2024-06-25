import React from "react";

import Insights from "../components/blog/Insights";

const Blog = () => {
  return (
    <div className="py-20 px-4">
      <div>
        <p className="font-big-bold md:text-[86px] text-7xl w-[70%] leading-normal">
          INSIGHTS
        </p>
        <Insights />
      </div>
    </div>
  );
};

export default Blog;
