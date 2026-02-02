import React from "react";
import Hero from "./Hero";
import Awards from "./Awards";
import Stats from "./Stats";
import Pricing from "./Pricing";
import Education from "./Education";
import OpenAccount from "../OpenAccount";
import "@fortawesome/fontawesome-free/css/all.min.css";

function HomePage() {
  return (
    <>
      <Hero></Hero>
      <Awards></Awards>
      <Stats></Stats>
      <Pricing></Pricing>
      <Education></Education>
      <OpenAccount></OpenAccount>
    </>
  );
}

export default HomePage;
