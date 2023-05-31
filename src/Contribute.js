import "./Contribute.scss";
import sal from "sal.js";
import * as Icon from "react-feather";
import { useContext } from "react";

import { ImageContext } from "./App";
function Contribute() {
  const { response, searchImage } = useContext(ImageContext);

  return (
    <div>
      <div className="explore-area rn-section-gapTop" id="explore-id">
        <div className="container">
          <div className="row mb--40">
            <div className="col-12"></div>
          </div>
          <div className="row g-5">
            <div className="col-lg-3 order-2 order-lg-1">
              <div className="nu-course-sidebar">
                <div className="nuron-expo-filter-widget widget-shortby">
                  <div className="inner">
                    <h5 className="widget-title">Sort By</h5>

                    <div className="content">
                      <div className="nuron-form-check">
                        <input
                          type="radio"
                          name="sort"
                          id="short-check1"
                          value="newest"
                          checked=""
                        />
                        <label htmlFor="short-check1">Newest</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="radio"
                          name="sort"
                          id="short-check2"
                          value="oldest"
                        />
                        <label htmlFor="short-check2">Oldest</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="radio"
                          name="sort"
                          id="short-check3"
                          value="most-liked"
                        />
                        <label htmlFor="short-check3">Most Liked</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="radio"
                          name="sort"
                          id="short-check4"
                          value="least-liked"
                        />
                        <label htmlFor="short-check4">Least Liked</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nuron-expo-filter-widget widget-category mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Century</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="categories"
                          id="cat-check-2000's"
                          value="2000's"
                        />
                        <label
                          htmlFor="cat-check-2000's"
                          className="text-capitalize"
                        >
                          2000's <span>(4)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="categories"
                          id="cat-check-1800's"
                          value="1800's"
                        />
                        <label
                          htmlFor="cat-check-1800's"
                          className="text-capitalize"
                        >
                          1800's <span>(1)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="categories"
                          id="cat-check-1900's"
                          value="1900's"
                        />
                        <label
                          htmlFor="cat-check-1900's"
                          className="text-capitalize"
                        >
                          1900's <span>(1)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="categories"
                          id="cat-check-1600's"
                          value="1600's"
                        />
                        <label
                          htmlFor="cat-check-1600's"
                          className="text-capitalize"
                        >
                          1600's <span>(1)</span>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="categories"
                          id="cat-check-1700's"
                          value="1700's"
                        />
                        <label
                          htmlFor="cat-check-1700's"
                          className="text-capitalize"
                        >
                          1700's <span>(1)</span>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Eras</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="level"
                          id="level-check1"
                          value="all"
                        />
                        <label htmlFor="level-check1">All Eras</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="level"
                          id="level-check-Pre Jim Crow"
                          value="Pre Jim Crow"
                        />
                        <label htmlFor="level-check-Pre Jim Crow">
                          Pre Jim Crow
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="level"
                          id="level-check-Civil rights movement"
                          value="Civil rights movement"
                        />
                        <label htmlFor="level-check-Civil rights movement">
                          Civil rights movement
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="level"
                          id="level-check-Jim Crow"
                          value="Jim Crow"
                        />
                        <label htmlFor="level-check-Jim Crow">Jim Crow</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="level"
                          id="level-check-Black Lives Matter"
                          value="Black Lives Matter"
                        />
                        <label htmlFor="level-check-Black Lives Matter">
                          Black Lives Matter
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="level"
                          id="level-check-Abolitionism"
                          value="Abolitionism"
                        />
                        <label htmlFor="level-check-Abolitionism">
                          Abolitionism
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Sort By Price</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input
                          type="radio"
                          name="sort"
                          id="price-check1"
                          value="low-to-high"
                        />
                        <label htmlFor="price-check1">Price: Low to High</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="radio"
                          name="sort"
                          id="price-check2"
                          value="high-to-low"
                        />
                        <label htmlFor="price-check2">Price: High to Low</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Language</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="level"
                          id="lang-check1"
                          value="all"
                        />
                        <label htmlFor="lang-check1">All Language</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="language"
                          id="lang-check-Russian"
                          value="Russian"
                        />
                        <label htmlFor="lang-check-Russian">Russian</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="language"
                          id="lang-check-Arabic"
                          value="Arabic"
                        />
                        <label htmlFor="lang-check-Arabic">Arabic</label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="language"
                          id="lang-check-English"
                          value="English"
                        />
                        <label htmlFor="lang-check-English">English</label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Filter By Rating</h5>
                    <div className="content">
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="rating"
                          id="rating-check1"
                          value="5"
                        />
                        <label htmlFor="rating-check1">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="rating"
                          id="rating-check2"
                          value="4"
                        />
                        <label htmlFor="rating-check2">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="rating"
                          id="rating-check3"
                          value="3"
                        />
                        <label htmlFor="rating-check3">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="rating"
                          id="rating-check4"
                          value="2"
                        />
                        <label htmlFor="rating-check4">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                      </div>
                      <div className="nuron-form-check">
                        <input
                          type="checkbox"
                          name="rating"
                          id="rating-check5"
                          value="1"
                        />
                        <label htmlFor="rating-check5">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="16"
                            fill="currentColor"
                            className="bi bi-star-fill off"
                            viewBox="0 0 16 16"
                          >
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"></path>
                          </svg>
                        </label>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="nuron-expo-filter-widget widget-shortby mt--30">
                  <div className="inner">
                    <h5 className="widget-title">Filter By Price</h5>
                    <div className="content">
                      <div className="price_filter s-filter clear">
                        <div className="input-range">
                          <div
                            className="slider-track-container"
                            style={{
                              transform: "scale(1)",
                              cursor: "inherit",
                              background:
                                "linear-gradient(to right,#212e48 0%, #212e48 0%, #00a3ff 0%, #00a3ff 100%, #212e48 100%, #212e48 100%)",
                            }}
                          >
                            <div className="slider-track">
                              <div
                                className="slider-thumb-container"
                                tabIndex="0"
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="0"
                                draggable="false"
                                role="slider"
                                style={{
                                  position: "absolute",
                                  zIndex: 0,
                                  cursor: "grab",
                                  userSelect: "none",
                                  touchAction: "none",
                                  transform: "translate(0px, 0px) !important",
                                }}
                              >
                                <div
                                  className="slider-thumb"
                                  style={{
                                    position: "absolute",
                                    zIndex: 0,
                                    cursor: "grab",
                                    userSelect: "none",
                                    touchAction: "none",
                                  }}
                                ></div>
                              </div>
                              <div
                                className="slider-thumb-container"
                                tabIndex="0"
                                aria-valuemax="100"
                                aria-valuemin="0"
                                aria-valuenow="100"
                                draggable="false"
                                role="slider"
                                style={{
                                  position: "absolute",
                                  zIndex: 1,
                                  cursor: "grab",
                                  userSelect: "none",
                                  touchAction: "none",
                                  transform: "translate(250px, 0px)",
                                }}
                              >
                                <div
                                  className="slider-thumb"
                                  style={{
                                    position: "absolute",
                                    zIndex: 1,
                                    cursor: "grab",
                                    userSelect: "none",
                                    touchAction: "none",
                                  }}
                                ></div>
                              </div>
                            </div>
                          </div>
                          <div className="slider__range--output">
                            <div className="price__output--wrap">
                              <div className="price--output">
                                <span>Price :</span>
                                <span className="output-label">$0 - $100</span>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-9 order-1 order-lg-2">
              <div className="row g-5">
                {response.slice(0, 8).map((data, key) => (
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
                              src={data.urls.small}
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
                ))}
                {/* <div className="col-lg-4 col-md-6 col-sm-12">
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
                            src={require("./images/till1.webp")}
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
                          10+ Place Bit.
                        </a>
                      </div>
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          type="button"
                          id="react-aria385022526-58"
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
                            src={require("./images/proposal3.webp")}
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
                          7+ Place Bit.
                        </a>
                      </div>
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          type="button"
                          id="react-aria385022526-59"
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
                            src={require("./images/proposal4.webp")}
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
                          5+ Place Bit.
                        </a>
                      </div>
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          type="button"
                          id="react-aria385022526-60"
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
                            src={require("./images/proposal5.webp")}
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
                          12+ Place Bit.
                        </a>
                      </div>
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          type="button"
                          id="react-aria385022526-61"
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
                            src={require("./images/proposal6.webp")}
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
                          30+ Place Bit.
                        </a>
                      </div>
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          type="button"
                          id="react-aria385022526-62"
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
                            src={require("./images/proposal8.webp")}
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
                          10+ Place Bit.
                        </a>
                      </div>
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          type="button"
                          id="react-aria385022526-63"
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
                            src={require("./images/proposal9.webp")}
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
                          8+ Place Bit.
                        </a>
                      </div>
                      <div className="share-btn share-btn-activation dropdown">
                        <button
                          type="button"
                          id="react-aria385022526-64"
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
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="rn-collection-area rn-section-gapTop">
        <div className="container">
          <div className="row mb--50 align-items-center">
            <div className="col-lg-6 col-md-6 col-sm-6 col-12">
              <h3
                className="title mb--0 sal-animate"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                Top Historic Collections
              </h3>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-12 mt_mobile--15">
              <div
                className="view-more-btn text-start text-sm-end sal-animate"
                data-sal-delay="150"
                data-sal="slide-up"
                data-sal-duration="800"
              >
                <a href="/collection" className="btn-transparent">
                  VIEW ALL
                  <Icon.ArrowRight />
                </a>
              </div>
            </div>
          </div>
          <div className="row g-5">
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
            >
              <a href="/collection" className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
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
                          border: " 0px",
                          margin: "0px",
                          padding: "0px",
                          maxWidth: " 100%",
                        }}
                      >
                        <img
                          alt=""
                          aria-hidden="true"
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27339%27/%3e"
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
                        alt="Nft_Profile"
                        className="img-top"
                        src={require("./images/bigSeparate.webp")}
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
                  </div>
                  <div className="collenction-small-thumbnail">
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: " none",
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
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/firstSeparate.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: " 0px",
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
                    </div>
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline-block",
                          overflow: "hidden",
                          width: "initial",
                          height: "initial",
                          background: " none",
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
                            maxWidth: "100%",
                          }}
                        >
                          <img
                            alt=""
                            aria-hidden="true"
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/second-separate.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: " 0px",
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
                    </div>
                    <div>
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/third separate.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Separate But Equal</h6>
                    <span className="items">27 items</span>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
            >
              <a href="/collection" className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: "inline - block",
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
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27339%27/%3e"
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
                        alt="Nft_Profile"
                        className="img-top"
                        src={require("./images/bigJimCrow.webp")}
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "borderBox",
                          padding: "0px",
                          border: " none",
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
                  </div>
                  <div className="collenction-small-thumbnail">
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/firstJimcrow.jpeg")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/secondJimCrow.jpeg")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/thirdJimCrew.jpeg")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                  </div>
                  ,
                  <div className="collection-deg">
                    <h6 className="title">Jim Crow:Equal Opportunity</h6>
                    <span className="items">20 items</span>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
            >
              <a href="/collection" className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: "inline - block",
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
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27339%27/%3e"
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
                        alt="Nft_Profile"
                        className="img-top"
                        src={require("./images/blacklives.webp")}
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "borderBox",
                          padding: "0px",
                          border: " none",
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
                  </div>
                  <div className="collenction-small-thumbnail">
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/firstblacklivesMatter.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/secondBlackLivesMatter.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline -block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/thirdblacklivesMatter.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Black Lives Matter -06/20</h6>
                    <span className="items">15 items</span>
                  </div>
                </div>
              </a>
            </div>
            <div
              data-sal="slide-up"
              data-sal-delay="150"
              data-sal-duration="800"
              className="col-lg-4 col-xl-3 col-md-6 col-sm-6 col-12 sal-animate"
            >
              <a href="/collection" className="rn-collection-inner-one">
                <div className="collection-wrapper">
                  <div className="collection-big-thumbnail">
                    <span
                      style={{
                        boxSizing: "borderBox",
                        display: "inline - block",
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
                          src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27507%27%20height=%27339%27/%3e"
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
                        alt="Nft_Profile"
                        className="img-top"
                        src={require("./images/till1.webp")}
                        decoding="async"
                        data-nimg="intrinsic"
                        style={{
                          position: "absolute",
                          inset: "0px",
                          boxSizing: "borderBox",
                          padding: "0px",
                          border: " none",
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
                  </div>
                  <div className="collenction-small-thumbnail">
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline -block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/till2.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/till3.webp")}
                          decoding="async"
                          data-nimg="intrinsic"
                          style={{
                            position: "absolute",
                            inset: "0px",
                            boxSizing: "borderBox",
                            padding: "0px",
                            border: " none",
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
                    </div>
                    <div>
                      <span
                        style={{
                          boxSizing: "borderBox",
                          display: "inline - block",
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
                            src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27164%27%20height=%27110%27/%3e"
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
                          alt="Nft_Profile"
                          src={require("./images/till4.webp")}
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
                    </div>
                  </div>
                  <div className="collection-deg">
                    <h6 className="title">Emmett Till</h6>
                    <span className="items">27 items</span>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="vedio-area rn-section-gapTop">
        <div className="container">
          <div className="row mb--40">
            <div className="title-area text-center">
              <h3 className="title mb--15">Perserve History With Us</h3>
              <p className="subtitle">BlackHistoryDao</p>
            </div>
          </div>
          <div className="row">
            <div
              className="col-12 position-relative"
              style={{
                color: "blue",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <button
                type="button"
                aria-label="Play video"
                className="video-play-button btn-large with-animation"
              >
                <span></span>
              </button>
              <div className="video-wrapper">
                <span
                  style={{
                    boxSizing: "borderBox",
                    display: "inline-block",
                    overflow: "hidden",
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
                      src="data:image/svg+xml,%3csvg%20xmlns=%27http://www.w3.org/2000/svg%27%20version=%271.1%27%20width=%27640%27%20height=%27360%27/%3e"
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
                    alt="Video BG"
                    src={require("./images/Teresa.webp")}
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
                  <noscript></noscript>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contribute;
sal();
