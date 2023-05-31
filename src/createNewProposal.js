import React from "react";
import Create from "./Create";
import Footers from "./Footers";
import ProgressBar from "./ProgressBar";
import Navbar from "./Headers/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Create />
      <Footers />
      <ProgressBar />
    </div>
  );
};

export default Home;
