import React from "react";
import Header from "../components/Header/Header";
import Hero from "../components/Hero/Hero";
import Profit from "../components/Profit/Profit";
import PastDeals from "../components/PastDeals/PastDeals";

const Home = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Profit />
        <PastDeals />
      </main>
    </>
  );
};

export default Home;
