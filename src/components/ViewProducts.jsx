import React from "react";
import "../assets/css/ViewProducts.css";
import ShimmerEffect from "./ShimmerEffect.jsx";
import { addItem } from "../utils/cartSlice.js";
import { useDispatch } from "react-redux";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useParams } from "react-router-dom";

const ViewProducts = ({ allProducts,categories }) => {
    console.log("All Products: " + allProducts);
  // console.log(allProducts);
  const [filterData, setFilterData] = useState(allProducts);
  console.log("Filter Data: " + filterData);
  const [selectedOption, setSelectedOption] = useState("All");
  const dispatch = useDispatch();
  //ShimerArray
  const shimmerArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  //Based on selectedOption filtering Products
  useEffect(() => {
    if (selectedOption == "all") {
      setFilterData(allProducts || []);
    } else {
      const newFilterData = (allProducts || []).filter((product) => {
        return product.category === selectedOption.toLowerCase();
      });
      setFilterData(newFilterData);
    //   console.log(allProducts);
    //   console.log(filterData);
    }
  }, [selectedOption, allProducts]);

  //Adding Item to cart
  function handleAddItem(product) {
    dispatch(addItem(product));
    toast.success(`${product.productName} added to cart`, {
      position: "top-center",
      autoClose: 1500,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  }

  return (
    <div className="container-fluid">
      <div className="row justify-content-center text-center">
        <div className="col-md-5 my-3">
          <div className="row justify-content-center align-items-center text-black">
            <div className="col-4">
              <label style={{ fontWeight: "bold", fontSize: "16px" }}>
                Select Category :{" "}
              </label>
            </div>
            <div className="col-4">
              <select
                className="form-select"
                aria-label="Default select example"
                value={selectedOption}
                onChange={handleChange}
              >
                <option value="all">All</option>
                <option value={categories[0]}>{categories[0]}</option>
                <option value={categories[1]}>{categories[1]}</option>
                <option value={categories[2]}>{categories[2]}</option>
                <option value={categories[3]}>{categories[3]}</option>
              </select>
            </div>
          </div>
        </div>
      </div>

      <div className="row m-2 justify-content-evenly">
        {allProducts==null?<h5 className="text-center">Something specially for you is getting ready...</h5>:filterData == null || filterData.length == 0 
          ? allProducts?.map((product) => {
              return (
                <div className="col-md-3 p-2" key={product.productId}>
                  <img
                    src={product.images[0]}
                    alt="" lazy="loading"
                    className="img-fluid bg-dark bg-gradient rounded"
                  />
                  <div className="row justify-content-around align-items-center">
                    <div className="col-md-7">
                      <h6>{product.productName}</h6>
                    </div>
                    <div className="col-md-5 text-end">
                      <p className="fs-5">
                        {product.rating}{" "}
                        <i className="bi bi-star-half text-warning"></i>
                      </p>
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                      <p style={{ fontSize: "17px" }}>
                        <b>₹{product.salePrice}</b>{" "}
                        <del style={{textDecoration:"line-through"}}>₹{product.mrp}</del>
                      </p>
                    </div>
                    <div className="col-md-6 cart-div">
                      <button
                        className="cssbuttons-io-button"
                        onClick={() => handleAddItem(product)}
                      >
                        Add to cart
                        <div className="icon">
                          <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : filterData && filterData.length > 0
          ? filterData?.map((product) => {
              return (
                <div className="col-md-3 p-2" key={product.productId}>
                  <img
                    src={product.images[0]}
                    alt="" lazy="loading"
                    className="img-fluid bg-dark bg-gradient rounded"
                  />
                  <div className="row justify-content-around align-items-center">
                    <div className="col-md-7">
                      <h6>{product.productName}</h6>
                    </div>
                    <div className="col-md-5 text-end">
                      <p className="fs-5">
                        {product.rating}{" "}
                        <i className="bi bi-star-half text-warning"></i>
                      </p>
                    </div>
                  </div>
                  <div className="row justify-content-center align-items-center">
                    <div className="col-md-6">
                      <p style={{ fontSize: "17px" }}>
                        <b>₹{product.salePrice}</b>{" "}
                        <del style={{textDecoration:"line-through"}}>₹{product.mrp}</del>
                      </p>
                    </div>
                    <div className="col-md-6 cart-div">
                      <button
                        className="cssbuttons-io-button"
                        onClick={() => handleAddItem(product)}
                      >
                        Add to cart
                        <div className="icon">
                          <svg
                            height="24"
                            width="24"
                            viewBox="0 0 24 24"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path d="M0 0h24v24H0z" fill="none"></path>
                            <path
                              d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"
                              fill="currentColor"
                            ></path>
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              );
            })
          : shimmerArray.map((element) => {
              return <ShimmerEffect key={element} />;
            })}
      </div>
    </div>
  );
};

export default ViewProducts;
