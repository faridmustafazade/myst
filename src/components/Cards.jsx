import React, { useEffect, useState } from "react";
import Card from "./Card";
import { Products } from "../data/products";

const Cards = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    setProducts(Products);
  }, []);
  return (
    <div className="px-4 pt-16 flex flex-wrap items-center justify-between">
      {products &&
        products.map((product) => (
          <Card
            key={product.id}
            id={product.id}
            url={product.image}
            title={product.title}
          />
        ))}
    </div>
  );
};

export default Cards;
