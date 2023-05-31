import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { ImageContext } from "../App";
import Navbar from "../Headers/Navbar";
import "./SearchBar.css";

function SearchBar() {
  let navigate = useNavigate();

  const [searchValue, setSearchValue] = useState("");
  const { fetchData, setSearchImage } = useContext(ImageContext);

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };
  // const handleButtonSearch = (e) => {
  //   e.preventDefault();
  //   navigate("/Home");
  //   fetchData(
  //     `search/photos?page=1&query=${searchValue}&client_id=1xg6Py7pkOWr_8lSRFRpTvAacLRqsKewoPezmPNN7wo`
  //   );
  //   setSearchValue("");
  //   setSearchImage(searchValue);
  // };
  const handleEnterSearch = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      navigate("/Home");
      fetchData(
        `search/photos?page=1&query=${searchValue}&client_id=1xg6Py7pkOWr_8lSRFRpTvAacLRqsKewoPezmPNN7wo`
      );
      setSearchValue("");
      setSearchImage(searchValue);
    }
  };

  return (
    <div>
      <Navbar />
      <div className="container4">
        <img
          src={require(`./images/unnamed-1.png`)}
          loading="lazy"
          width="225"
          sizes="225px"
          alt=""
          className="image-4-copy"
        />
        <h1 className="heading-2">Black History Archive System</h1>
        <a
          href="https://blackhistorydao-4dc6cb.netlify.live/"
          className="w-inline-block"
        >
          <img
            src={require(`./images/BHM-2022-web-header.png`)}
            loading="lazy"
            width="932"
            sizes="(max-width: 991px) 100vw, 932px"
            alt=""
            className="image-4"
          />
        </a>
        <div className="auto-search-wrapper">
          <div className="form-block w-form">
            <form
              id="search-form"
              name="email-form"
              data-name="Email Form"
              method="get"
              className="form"
              autofocus="true"
            >
              <div className="searchInputs">
                <input
                  type="text"
                  className="search-box w-input"
                  maxlength="256"
                  name="Search"
                  data-name="Search"
                  placeholder="Search Anything.."
                  id="Search"
                  required=""
                  value={searchValue}
                  onChange={handleInputChange}
                  onKeyDown={handleEnterSearch}
                />
                {/* <div className="searchIcon">
                  <Icon.Search onClick={handleButtonSearch} />
                </div> */}
              </div>
            </form>
            <div className="w-form-done">
              <div>Thank you! Your submission has been received!</div>
            </div>
            <div className="w-form-fail">
              <div>Oops! Something went wrong while submitting the form.</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchBar;
