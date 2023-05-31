import React from "react";
import { createContext, useState } from "react";
import Home from "./Home";
import useAxios from "./hooks/useAxios";
import { SubstrateContextProvider, useSubstrateState } from './substrate-lib';
import SearchBar from "./components/SearchBar";
import CreateNewProposal from "./createNewProposal";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.scss";
// Create Context
export const ImageContext = createContext();
function App() {
  const [searchImage, setSearchImage] = useState("");
  const { response, isLoading, error, fetchData } = useAxios(
    `search/photos?page=1&query=office&client_id=1xg6Py7pkOWr_8lSRFRpTvAacLRqsKewoPezmPNN7wo`
  );
  const value = {
    response,
    isLoading,
    error,
    fetchData,
    searchImage,
    setSearchImage,
  };
  return (
    <SubstrateContextProvider>
    <Router>
      <ImageContext.Provider value={value}>
        <div className="App">
          <Routes>
            <Route exact path="/" element={<SearchBar />} />
            <Route exact path="/Home" element={<Home />} />
            <Route exact path="/Create" element={<CreateNewProposal />} />
          </Routes>
        </div>
      </ImageContext.Provider>
    </Router>
    </SubstrateContextProvider>
  );
}

export default App;
