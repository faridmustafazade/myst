import React from "react";
import Cards from "../components/Cards";
import { Helmet } from "react-helmet";
const Home = () => {
  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Myst</title>
      </Helmet>
      <Cards />
    </>
  );
};

export default Home;
