import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../assets/css/TopWatchesHome.swiper.css";

import { Pagination } from "swiper/modules";
import ShimmerEffect from "./ShimmerEffect";

export default function TopEarbudsHome() {
  //Small screen 2 card and big screen 4 card
  const [slidesPerView, setSlidesPerView] = useState(4);
  const [hotDealData, setHotDealData] = useState(null);

  const shimmerArray=[1,2,3,4,5,6];

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth < 768) {
        setSlidesPerView(2);
      } else {
        setSlidesPerView(4);
      }
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  async function getBestSellerData() {
    const response = await fetch(
      "https://curious-cap-bull.cyclic.app/products/hot-deals"
    );
    const result = await response.json();
    // console.log(result);
    setHotDealData(result.earbuds);
  }

  useEffect(() => {
    getBestSellerData();
  }, [hotDealData]);

  return (
    <>
      <div className="top-watch">
        <h1>Hot Deals</h1>
      </div>
      <Swiper
        slidesPerView={slidesPerView}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {/* <SwiperSlide className="swiper-slide">
          <div className="swiper-card">
            <img
              src="https://www.fireboltt.com/cdn/shop/files/grenade-black-steel_1_360x.png?v=1687251706"
              alt="Watch"
            />
            <div className="details">
              <p className="name">Grenade</p>
              <p className="star">
                5 <i className="bi bi-star-half text-warning"></i>
              </p>
            </div>
            <p>1.39" HD Display BT Calling</p>
          </div>
        </SwiperSlide> */}
        {hotDealData && hotDealData.length > 0 ? (
          hotDealData.map((item) => {
            return (
              <SwiperSlide key={item.productId} className="swiper-slide">
                <div className="swiper-card">
                  <img src={item.productImage} alt="Watch" />
                  <div className="details">
                    <p className="name">{item.productName}</p>
                    <p className="star">
                      {item.rating}{" "}
                      <i className="bi bi-star-half text-warning"></i>
                    </p>
                  </div>
                  <p style={{fontSize:"15px",color:"grey"}}>{item.description}</p>
                </div>
              </SwiperSlide>
            );
          })
        ) : (
        //   <h3>No Data was fetched from Api</h3>
        //Since no data was fetched so have used Shimmer Effect for enhancing user experience
        shimmerArray.map((shimmer,index)=>{
            return(
                <SwiperSlide key={index} className="swiper-slide">
                    <ShimmerEffect/>
              </SwiperSlide>
            )
        })
        )}
      </Swiper>
      <div className="show-more-div">
        <button className="learn-more show-more-btn">
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">See More</span>
        </button>
      </div>
    </>
  );
}
