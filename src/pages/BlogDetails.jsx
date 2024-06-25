import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { InsigthsData } from "../data/insights";

const BlogDetails = () => {
  const { name } = useParams();
  const [data, setData] = useState({});
  useEffect(() => {
    setData(InsigthsData.find((insight) => insight.link === name));
  }, [name]);
  return (
    <div className="md:py-20 px-4">
      <div>
        <div className="flex items-center justify-between flex-wrap">
          <div className="flex flex-col md:flex-row justify-between gap-8 pt-16">
            <div className="overflow-hidden md:w-[49%] md:h-[100vh] md:sticky top-5">
              <img src={data.image} className="w-full" alt="" />
            </div>
            <div className="md:w-[50%] flex flex-col gap-7">
              <p className="text-xl font-mono-regular opacity-50">
                {data.date}
              </p>
              <span className="text-5xl font-big-bold uppercase">
                {data.name}
              </span>
              <p className="text-xl font-mono-regular opacity-50">
                {data.description}
              </p>
              <span className="text-3xl font-big-semibold">{data.title1}</span>
              <p className="text-xl font-mono-regular opacity-50">
                {data.desc1}
              </p>
              <span className="text-3xl font-big-semibold">{data.title2}</span>
              <p className="text-xl font-mono-regular opacity-50">
                {data.desc2}
              </p>
              <span className="text-3xl font-big-semibold">{data.title3}</span>
              <p className="text-xl font-mono-regular opacity-50">
                {data.desc3}
              </p>
              <span className="text-3xl font-big-semibold">{data.title4}</span>
              <p className="text-xl font-mono-regular opacity-50">
                {data.desc4}
              </p>
              <span className="text-3xl font-big-semibold">{data.title5}</span>
              <p className="text-xl font-mono-regular opacity-50">
                {data.desc5}
              </p>
              <span className="text-3xl font-big-semibold">{data.title6}</span>
              <p className="text-xl font-mono-regular opacity-50">
                {data.desc6}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogDetails;
