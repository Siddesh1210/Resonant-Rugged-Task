import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../assets/css/TopWatchesHome.swiper.css";

import { Pagination } from "swiper/modules";
import ShimmerEffect from "./ShimmerEffect";
import { useNavigate } from "react-router-dom";

export default function Product_Carousel_HomePage({
  title,
  bestSellerData,
  showMoreBtn,
}) {
  //Small screen 2 card and big screen 4 card
  const [slidesPerView, setSlidesPerView] = useState(4);
  const navigate = useNavigate();
  const shimmerArray = [1, 2, 3, 4, 5, 6];

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

  function handleShowMoreBtn(showMoreBtn) {
    // console.log("HandleShowMoreBtn Function Called with : ", showMoreBtn);
    showMoreBtn == "watches"
      ? navigate("/products/allwatches")
      : showMoreBtn == "earbuds"
      ? navigate("/products/allearbuds")
      : navigate("/products/alllaptops");
  }

  return (
    <>
      <div className="top-watch">
        <h1>{title}</h1>
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
        {bestSellerData && bestSellerData.length > 0
          ? bestSellerData.map((item) => {
              return (
                <SwiperSlide key={item.productId} className="swiper-slide">
                  <div className="swiper-card">
                    <img src={item.productImage} alt="Watch" loading="lazy" />
                    <div className="details">
                      <p className="name">{item.productName}</p>
                      <p className="star">
                        {item.rating}
                        <i className="bi bi-star-half text-warning"></i>
                      </p>
                    </div>
                    <p style={{ fontSize: "15px", color: "grey" }}>
                      {item.description}
                    </p>
                  </div>
                </SwiperSlide>
              );
            })
          : //   <h3>No Data was fetched from Api</h3>
            //Since no data was fetched so have used Shimmer Effect for enhancing user experience
            shimmerArray.map((element) => {
              return (
                <SwiperSlide key={element} className="swiper-slide">
                  <ShimmerEffect />
                </SwiperSlide>
              );
            })}
      </Swiper>
      <div className="show-more-div">
        <button
          className="learn-more show-more-btn"
          onClick={() => {
            handleShowMoreBtn(showMoreBtn);
          }}
        >
          <span className="circle" aria-hidden="true">
            <span className="icon arrow"></span>
          </span>
          <span className="button-text">See More</span>
        </button>
      </div>
    </>
  );
}
