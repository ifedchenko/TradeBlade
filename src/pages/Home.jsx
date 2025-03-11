import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Profit from "../components/Profit/Profit";
import PastDeals from "../components/PastDeals/PastDeals";
import About from "../components/About/About";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profit />
        <PastDeals />
        <About />
      </main>
    </>
  );
};

export default Home;
