import React, { useEffect, useState } from "react";
import Insight from "./Insight";
import { InsigthsData } from "../../data/insights";
const Insights = () => {
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    setDatas(InsigthsData);
  }, []);

  return (
    <div className="flex flex-col md:flex-row items-center justify-between flex-wrap">
      {datas.map((data, idx) => (
        <Insight
          key={idx}
          image={data.image}
          name={data.name}
          date={data.date}
          link={data.link}
        />
      ))}
    </div>
  );
};

export default Insights;
