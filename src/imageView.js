import React from "react";
import Images from "./Images";
import Footers from "./Footers";
import ProgressBar from "./ProgressBar";
import Navbar from "./Headers/Navbar";

const Home = () => {
    return (
        <div>
            <Navbar />
            <Images />
            <Footers />
            <ProgressBar />
        </div>
    );
};

export default Home;
