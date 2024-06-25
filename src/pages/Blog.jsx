import React from "react";

import Insights from "../components/blog/Insights";
import { Helmet } from "react-helmet";

const Blog = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Blog</title>
      </Helmet>
      <div className="py-20 px-4">
        <div>
          <p className="font-big-bold md:text-[86px] text-7xl w-[70%] leading-normal">
            INSIGHTS
          </p>
          <Insights />
        </div>
      </div>
    </>
  );
};

export default Blog;
