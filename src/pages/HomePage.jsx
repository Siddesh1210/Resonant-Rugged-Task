import React from "react";
import Hero from "../components/Hero";
import HomeProducts from "../components/HomeProducts";
import Product_Carousel_HomePage from "../components/Product_Carousel_HomePage";
import { useState, useEffect } from "react";
import { useFetchApiData } from "../hooks/useFetchApiData";

const HomePage = () => {
  // All the state variables for storing fetched data and error
  const [bestSellerData, setBestSellerData] = useState(null);
  const [hotDealData, setHotDealData] = useState(null);
  const [justTrendData, setJustTrendData] = useState(null);
  const [error, setError] = useState(null);

  // URL for fetching best seller data
  const bestSellerUrl = "https://resonate-api.cyclic.app/products/best-seller";
  // URL for fetching hot deal data
  const hotDealUrl = "https://resonate-api.cyclic.app/products/hot-deals";
  // URL for fetching just trending data
  const justTrendUrl = "https://resonate-api.cyclic.app/products/just-trending";

  // Have created Custom hook to fetch data from API
  const fetchData = async (url, setDataFunction) => {
    try {
      const data = await useFetchApiData(url);
        // console.log(data);
      setDataFunction(data);
    } catch (error) {
      // console.log(error);
      setError(`Failed to fetch data from ${url}`);
    }
  };

  // Fetch data on component mount
  useEffect(() => {
    fetchData(bestSellerUrl, setBestSellerData);
    fetchData(hotDealUrl, setHotDealData);
    fetchData(justTrendUrl, setJustTrendData);
  }, []);

  return (
    <>
      <Hero />
      <HomeProducts />
      {
        //I have not used error msg here bcuz to show Shimmer effect else I would have show user some msg in below manner :
        // error ? (
        //   <div className="error-msg">
        //     <h3>{error}</h3>
        //   </div>
        // ) : (
        //   <Product_Carousel_HomePage
        //     title={"Best Seller"}
        //     bestSellerData={bestSellerData}
        //     showMoreBtn={"watches"}
        //   />
        // )
      }

      {/* For Best Seller Carousel */}
      <Product_Carousel_HomePage
        title={"Best Seller"}
        bestSellerData={bestSellerData}
        showMoreBtn={"watches"}
      />

      {/* For Hot Deals Carousel */}
      <Product_Carousel_HomePage
        title={"Hot Deals"}
        bestSellerData={hotDealData}
        showMoreBtn={"earbuds"}
      />

      {/* For Just Trending Carousel */}
      <Product_Carousel_HomePage
        title={"Just Trending"}
        bestSellerData={justTrendData}
        showMoreBtn={"laptops"}
      />
    </>
  );
};

export default HomePage;
