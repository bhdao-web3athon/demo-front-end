import React from "react";
import BlackHistoryCards from "./BlackHistoryCards";
import Footers from "./Footers";
import ProgressBar from "./ProgressBar";
import Navbar from "./Headers/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <BlackHistoryCards />
      <Footers />
      <ProgressBar />
    </div>
  );
};

export default Home;
