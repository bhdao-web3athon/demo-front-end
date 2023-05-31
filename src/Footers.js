import React from "react";
import "./Footers.scss";
import * as Icon from "react-feather";
import { Link } from "react-router-dom";

const Footers = () => {
  return (
    <div>
      <div className="rn-footer-one bg-color--1 rn-section-gap mt--100 mt_md--80 mt_sm--80">
        <div className="container">
          <div className="row gx-5">
            <div className="col-lg-3 col-md-6 col-sm-6 col-12">
              <div className="widget-content-wrapper">
                <div className="footer-left">
                  <div className="logo-thumbnail logo-custom-css">
                    <Link to="/" className="logo-light">
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline-block",
                          overflow: " hidden",
                          width: "initial",
                          height: "initial",
                          background: "none",
                          opacity: 1,
                          border: " 0px",
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
                            border: " 0px",
                            margin: "0px",
                            padding: "0px",
                            maxWidth: " 100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src={require("./Headers/logo.png")}
                            style={{
                              display: "block",
                              maxWidth: " 100%",
                              width: "initial",
                              height: "initial",
                              background: "none",
                              opacity: 1,
                              border: " 0px",
                              margin: "0px",
                              padding: "0px",
                            }}
                          />
                        </span>
                        <img
                          alt="logo"
                          src={require("./Headers/logo.png")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: "none",
                            margin: "auto",
                            display: "block",
                            width: "0px",
                            height: " 0px",
                            minWidth: " 100%",
                            maxWidth: " 100%",
                            minHeight: " 100%",
                            maxHeight: " 100%",
                          }}
                        />
                      </span>
                    </Link>
                  </div>
                  <p className="rn-footer-describe">
                    Created with the collaboration of over 100 historians and
                    contributers{" "}
                  </p>
                </div>
                <div className="widget-bottom mt--40 pt--40">
                  <h6 className="title">Get The Latest Updates</h6>
                  <div className="input-group">
                    <input
                      type="text"
                      className="form-control bg-color--2"
                      placeholder="Email"
                      aria-label="Recipient's username"
                    />
                    <div className="input-group-append">
                      <button
                        className="btn btn-primary-alta btn-outline-secondary"
                        type="button"
                      >
                        Subscribe
                      </button>
                    </div>
                  </div>
                  <div className="newsletter-dsc">
                    <p>Email is safe. We don't spam.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_mobile--40">
              <div className="footer-widget widget-quicklink">
                <h6 className="widget-title">Black History Dao</h6>
                <ul
                  className="footer-list-one"
                  style={{ listStyleType: "none" }}
                >
                  <li className="single-list">
                    <Link to="/">Enter the Metaverse</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/">Visit our dao</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/">Team Members</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/">Become Link Sponsor</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/">Join our Newsletter</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/"></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget widget-information">
                <h6 className="widget-title">Information</h6>
                <ul
                  className="footer-list-one"
                  style={{ listStyleType: "none" }}
                >
                  <li className="single-list">
                    <Link to="/">Contact Us</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/">Join the Team</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/">Internships</Link>
                  </li>
                  <li className="single-list">
                    <Link to="/"></Link>
                  </li>
                  <li className="single-list">
                    <Link to="/"></Link>
                  </li>
                  <li className="single-list">
                    <Link to="/"></Link>
                  </li>
                  <li className="single-list">
                    <Link to="/"></Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6 col-12 mt_md--40 mt_sm--40">
              <div className="footer-widget">
                <h6 className="widget-title">Recently Sold Out</h6>
                <ul
                  className="footer-recent-post"
                  style={{ listStyleType: "none" }}
                >
                  <li className="recent-post">
                    <div className="thumbnail">
                      <Link to="/product">
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "60px",
                            height: "60px",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                          }}
                        >
                          <img
                            alt="product Images"
                            src={require("./images/Flyod.webp")}
                            decoding="async"
                            data-nimg="fixed"
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
                              borderRadius: "50%",
                            }}
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link to="/product">I CAN'T BREATHE George Floyd</Link>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.244wETH</span>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="thumbnail">
                      <Link to="/product">
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "60px",
                            height: "60px",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                          }}
                        >
                          <img
                            alt="product Images"
                            src={require("./images/JimcrowRond.webp")}
                            decoding="async"
                            data-nimg="fixed"
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
                              borderRadius: "50%",
                            }}
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link to="/product">Jim Crow Excerpt</Link>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.022wETH</span>
                    </div>
                  </li>
                  <li className="recent-post">
                    <div className="thumbnail">
                      <Link to="/product">
                        <span
                          style={{
                            boxSizing: "borderBox",
                            display: "inline-block",
                            overflow: "hidden",
                            width: "60px",
                            height: "60px",
                            background: "none",
                            opacity: 1,
                            border: "0px",
                            margin: "0px",
                            padding: "0px",
                            position: "relative",
                          }}
                        >
                          <img
                            alt="product Images"
                            src={require("./images/till1.webp")}
                            decoding="async"
                            data-nimg="fixed"
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
                              borderRadius: "50%",
                            }}
                          />
                        </span>
                      </Link>
                    </div>
                    <div className="content">
                      <h6 className="title">
                        <Link to="/product">Unrevealed Emmett Till audio</Link>
                      </h6>
                      <p>Highest bid 1/20</p>
                      <span className="price">0.892wETH</span>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="copy-right-one ptb--20 bg-color--1">
        <div className="container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-left">
                <span>©2022 Black History DAO. All rights reserved</span>
                <ul className="privacy" style={{ listStyleType: "none" }}>
                  <li>
                    <Link to="https://demo.blackhistorydao.org/terms-condition">
                      Terms &amp; Conditions
                    </Link>
                  </li>
                  <li>
                    <Link to="https://demo.blackhistorydao.org/privacy-policy">
                      *Privacy Policy
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="copyright-right">
                <ul
                  className="social-copyright"
                  style={{ listStyleType: "none" }}
                >
                  <li>
                    <Link
                      to="https://facebook.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Facebook"
                    >
                      <Icon.Facebook
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,
                          width: "14px",
                          height: "14px",

                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://twitter.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Twitter"
                    >
                      <Icon.Twitter
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,
                          width: "14px",
                          height: "14px",

                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://instagram.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="Instagram"
                    >
                      <Icon.Instagram
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,
                          width: "14px",
                          height: "14px",

                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://linkedin.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="linkedin"
                    >
                      <Icon.Linkedin
                        style={{
                          fontStyle: "normal",
                          fontWeight: 400,
                          width: "14px",
                          height: "14px",

                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="https://mail.com"
                      target="_blank"
                      rel="noreferrer"
                      aria-label="mail"
                    >
                      <Icon.Mail
                        style={{
                          fontStyle: "smaller",
                          fontWeight: 400,
                          width: "14px",
                          height: "14px",

                          textTransform: "none",
                          lineHeight: 1,

                          color: "#acacac",
                        }}
                      />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footers;
