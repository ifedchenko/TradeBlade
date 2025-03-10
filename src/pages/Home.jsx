import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Profit from "../components/Profit/Profit";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profit />
      </main>
    </>
  );
};

export default Home;
