import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { Products } from "../data/products";

const ProductDetail = () => {
  const { title } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    let data = Products.find((product) => product.title === title);
    setProduct(data);
  }, [title]);

  return (
    <div className="my-24 px-3 flex md:flex-row flex-col md:justify-between md:items-start md:gap-0 gap-10">
      <div className="md:w-[49%] flex flex-col gap-5">
        <img src={product.image} alt="" />
        <img src={product.image2} alt="" />
      </div>
      <div className="md:w-[49%] flex flex-col gap-5">
        <p className="text-white font-big-bold text-5xl uppercase">
          {product.title}
        </p>
        <div className="border-t border-primaryBorder my-4"></div>
        <p className="text-white font-mono-regular text-lg opacity-50">
          {product.description}
        </p>
        <div className="border-t border-primaryBorder my-4"></div>
        <div className="flex flex-col gap-4">
          <p className="font-big-bold text-3xl">CLIENT NAME:</p>
          <p className="text-white font-mono-regular text-lg opacity-50">
            {product.title}
          </p>
        </div>
        <div className="border-t border-primaryBorder my-4"></div>
        <div className="flex flex-col gap-4">
          <p className="font-big-bold text-3xl">PROVIDED SERVICES:</p>
          <p className="text-white font-mono-regular text-lg opacity-50">
            {product.services}
          </p>
        </div>
        <div className="border-t border-primaryBorder my-4"></div>
        <div className="flex flex-col gap-4">
          <p className="font-big-bold text-3xl">INDUSTRY:</p>
          <p className="text-white font-mono-regular text-lg opacity-50">
            {product.industry}
          </p>
        </div>
        <div className="border-t border-primaryBorder my-4"></div>
        <div className="flex flex-col gap-4">
          <p className="font-big-bold text-3xl">LIVE WEBSITE:</p>
          <Link
            to={"https://faridmustafazade.vercel.app/"}
            target="_blank"
            className="text-white font-mono-regular text-lg opacity-50"
          >
            faridmustafazade.vercel.app
          </Link>
        </div>
        <div className="border-t border-primaryBorder my-4"></div>
      </div>
    </div>
  );
};

export default ProductDetail;
