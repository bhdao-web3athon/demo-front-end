import React from "react";

import "./Navbar.scss";
import { Link } from "react-router-dom";
import { useState } from "react";
import * as Icon from "react-feather";

const Navbar = () => {
  window.addEventListener("scroll", function () {
    var header = document.querySelector("header");
    header.classList.toggle("sticky", window.scrollY > 0);
  });

  const [sidenav, setSideNav] = useState(false);
  const [search, setSearch] = useState(false);
  const showSideNav = () => setSideNav(!sidenav);
  const showSearch = () => setSearch(!search);
  return (
    <div>
      <div id="__next" data-reactroot="">
        <header className="rn-header haeder-default black-logo-version header--fixed header--sticky">
          <div className="container">
            <div className="header-inner">
              <div className="header-left">
                <div className="logo-thumbnail logo-custom-css">
                  <a href="/" className="logo-light">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: "inline-block",
                        overflow: "hidden",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                        maxWidth: "100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: " none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: " 100%",
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src={require("./logo.png")}
                          style={{
                            display: "block",
                            maxWidth: " 100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                          }}
                        />
                      </span>
                      <img
                        alt="nft-logo"
                        src={require("./logo.png")}
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "borderBox",
                          padding: "0px",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          minWidth: " 100%",
                          maxWidth: " 100%",
                          minHeight: " 100%",
                          maxHeight: " 100%",
                        }}
                      />
                    </span>
                  </a>
                  <a href="/" className="logo-dark">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: "inline-Block",
                        overflow: "hidden",
                        width: "initial",
                        height: " initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        position: "relative",
                        maxWidth: " 100%",
                      }}
                    >
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "block",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: " 100%",
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27106%27%20height=%2735%27/%3e"
                          style={{
                            display: "block",
                            maxWidth: " 100%",
                            width: "initial",
                            height: "initial",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                          }}
                        />
                      </span>
                      <img
                        alt="nft-logo"
                        src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "borderBox",
                          padding: "0px",
                          border: "none",
                          margin: "auto",
                          display: "block",
                          width: "0px",
                          height: "0px",
                          maxWidth: " 100%",
                          minHeight: " 100%",
                          maxHeight: " 100%",
                        }}
                      />
                      <noscript></noscript>
                    </span>
                  </a>
                </div>
                <div className="mainmenu-wrapper">
                  <nav id="sideNav" className="mainmenu-nav d-none d-xl-block">
                    <ul className="mainmenu">
                      <li className="">
                        <Link to="/Home" className="its_new">
                          Home
                        </Link>
                      </li>
                      <li className="">
                        <Link
                          to="/Create
                        "
                          className="its_new"
                        >
                          Create Proposal
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
              <div className="header-right">
                <div className="setting-option d-none d-lg-block">
                  <form className="search-form-wrapper" action="#">
                    <input
                      type="search"
                      placeholder="Search Here"
                      aria-label="Search"
                    />

                    <div className="search-icon">
                      <button type="button">
                        <div
                          dangerouslySetInnerHTML={{
                            __html: window.feather.icons.search.toSvg(),
                          }}
                        />
                      </button>
                    </div>
                  </form>
                </div>
                <div className="setting-option rn-icon-list d-block d-lg-none">
                  <div className="icorBox search-mobile-icon">
                    <button
                      type="button"
                      aria-label="Click here to open search form"
                      onClick={showSearch}
                    >
                      <Icon.Search style={{ borderRadius: "100%" }} />
                    </button>
                  </div>
                  <form
                    id="header-search-1"
                    action="#"
                    method="GET"
                    className={
                      search
                        ? "large-mobile-blog-search active"
                        : "large-mobile-blog-search"
                    }
                  >
                    <div className="rn-search-mobile form-group">
                      <button type="submit" className="search-button">
                        <Icon.Search />
                      </button>
                      <input type="text" placeholder="Search ..." />
                    </div>
                  </form>
                </div>
                <div className="setting-option header-btn">
                  <div className="icorBox">
                    <button
                      className="connectBtn btn btn-small btn-primary-alta"
                      type="button"
                    >
                      <span>Wallet connect</span>
                    </button>
                  </div>
                </div>
                <div className="setting-option mobile-menu-bar d-block d-xl-none">
                  <div className="hamberger">
                    <button
                      type="button"
                      className="hamberger-button"
                      onClick={showSideNav}
                    >
                      <Icon.Menu />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </header>

        <div
          className={sidenav ? "popup-mobile-menu active" : "popup-mobile-menu"}
          role="button"
          tabIndex="0"
        >
          <div className="inner" role="button" tabIndex="0">
            <div className="header-top">
              <div className="logo-thumbnail logo-custom-css">
                <a href="/" className="logo-light">
                  <span
                    style={{
                      boxSizing: "borderBox",
                      display: "inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: " 100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: " 100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src={require("./logo.png")}
                        style={{
                          display: "block",
                          maxWidth: "100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                    <img
                      alt="nft-logo"
                      src={require("./logo.png")}
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        inset: "0px",
                        boxSizing: "borderBox",
                        padding: "0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        maxWidth: " 100%",
                        minHeight: " 100%",
                        maxHeight: " 100%",
                      }}
                    />
                  </span>
                </a>
                <a href="/" className="logo-dark">
                  <span
                    style={{
                      boxSizing: "borderBox",
                      display: " inline-block",
                      overflow: "hidden",
                      width: "initial",
                      height: "initial",
                      background: "none",
                      opacity: 1,
                      border: "0px",
                      margin: "0px",
                      padding: "0px",
                      position: "relative",
                      maxWidth: " 100%",
                    }}
                  >
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: "block",
                        width: "initial",
                        height: "initial",
                        background: "none",
                        opacity: 1,
                        border: "0px",
                        margin: "0px",
                        padding: "0px",
                        maxWidth: " 100%",
                      }}
                    >
                      <img
                        alt=""
                        aria-hidden="true"
                        src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27106%27%20height=%2735%27/%3e"
                        style={{
                          display: "block",
                          maxWidth: " 100%",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: "0px",
                          margin: "0px",
                          padding: "0px",
                        }}
                      />
                    </span>
                    <img
                      alt="nft-logo"
                      src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                      decoding="async"
                      data-nimg="intrinsic"
                      style={{
                        position: "absolute",
                        inset: " 0px",
                        boxSizing: "borderBox",
                        padding: " 0px",
                        border: "none",
                        margin: "auto",
                        display: "block",
                        width: "0px",
                        height: "0px",
                        maxWidth: " 100%",
                        minHeight: " 100%",
                        maxHeight: " 100%",
                      }}
                    />
                    <noscript></noscript>
                  </span>
                </a>
              </div>
              <div className="close-menu">
                <button
                  className="close-button"
                  type="button"
                  onClick={showSideNav}
                >
                  <Icon.X
                    className="w-8 h-8"
                    style={{
                      color: "white",
                      backgroundColor: "black",
                    }}
                  />
                </button>
              </div>
            </div>
            <div className="content">
              <nav>
                <ul className="mainmenu">
                  <li className="" id="2">
                    <a href="/" className="nav-link its_new">
                      Home
                    </a>
                  </li>
                  <li className="" id="6">
                    <a href="/" className="nav-link its_new">
                      Create Proposal
                    </a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
