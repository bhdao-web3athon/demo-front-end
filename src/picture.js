import React from "react";
import React from "react";
import "./Contribute.scss";
import sal from "sal.js";
import * as Icon from "react-feather";

function picture() {
  return (
    <div>
      <div className="col-lg-4 col-md-6 col-sm-12">
        <div className="product-style-one no-overlay">
          <div className="card-thumbnail">
            <a href="/product">
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
                    src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27533%27%20height=%27533%27/%3e"
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
                  alt="NFT_portfolio"
                  className="img-top"
                  src={require("./images/blacklives.webp")}
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
          </div>
          <div className="product-share-wrapper">
            <div className="profile-share">
              <a href="/" className="more-author-text">
                6+ Place Bit.
              </a>
            </div>
            <div className="share-btn share-btn-activation dropdown">
              <button
                type="button"
                id="react-aria385022526-57"
                aria-expanded="false"
                className="icon p-0 btn btn-link"
              >
                <svg
                  viewBox="0 0 14 4"
                  fill="none"
                  width="16"
                  height="16"
                  className="sc-bdnxRM sc-hKFxyN hOiKLt"
                >
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M3.5 2C3.5 2.82843 2.82843 3.5 2 3.5C1.17157 3.5 0.5 2.82843 0.5 2C0.5 1.17157 1.17157 0.5 2 0.5C2.82843 0.5 3.5 1.17157 3.5 2ZM8.5 2C8.5 2.82843 7.82843 3.5 7 3.5C6.17157 3.5 5.5 2.82843 5.5 2C5.5 1.17157 6.17157 0.5 7 0.5C7.82843 0.5 8.5 1.17157 8.5 2ZM11.999 3.5C12.8274 3.5 13.499 2.82843 13.499 2C13.499 1.17157 12.8274 0.5 11.999 0.5C11.1706 0.5 10.499 1.17157 10.499 2C10.499 2.82843 11.1706 3.5 11.999 3.5Z"
                    fill="currentColor"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
          <a href="/">
            <span className="product-name">BHD_PROPOSAL@ID</span>
          </a>
        </div>
      </div>
    </div>
  );
}

export default picture;
