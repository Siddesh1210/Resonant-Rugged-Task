import React, { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/pagination";

import "../assets/css/TopWatchesHome.swiper.css";

import { Pagination } from "swiper/modules";

export default function TopWatchesHome() {
  //Small screen 2 card and big screen 4 card
  const [slidesPerView, setSlidesPerView] = useState(4);

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
  return (
    <>
      <div className="top-watch">
        <h1>Best Seller</h1>
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
        <SwiperSlide className="swiper-slide">
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
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-card">
            <img
              src="https://www.fireboltt.com/cdn/shop/files/ultimate-black_1_360x.png?v=1683028277"
              alt="Watch"
            />
            <div className="details">
              <p className="name">Ultimate</p>
              <p className="star">
                5 <i className="bi bi-star-half text-warning"></i>
              </p>
            </div>
            <p>1.39" HD Display BT Calling</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-card">
            <img
              src="https://www.fireboltt.com/cdn/shop/files/dagger-luxe-black-ss_1_360x.png?v=1686048646"
              alt="Watch"
            />
            <div className="details">
              <p className="name">Luxe</p>
              <p className="star">
                5 <i className="bi bi-star-half text-warning"></i>
              </p>
            </div>
            <p>1.39" HD Display BT Calling</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0137/0292/2286/products/supernova-black_1_360x.png?v=1673500420"
              alt="Watch"
            />
            <div className="details">
              <p className="name">Supernova</p>
              <p className="star">
                5 <i className="bi bi-star-half text-warning"></i>
              </p>
            </div>
            <p>1.39" HD Display BT Calling</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0137/0292/2286/files/asteroid-orange_1_360x.png?v=1692944180"
              alt="Watch"
            />
            <div className="details">
              <p className="name">Asteroid</p>
              <p className="star">
                5 <i className="bi bi-star-half text-warning"></i>
              </p>
            </div>
            <p>1.39" HD Display BT Calling</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0137/0292/2286/files/ninja-call-pro-max_360x.png?v=1687756591"
              alt="Watch"
            />
            <div className="details">
              <p className="name">Ninja Pro</p>
              <p className="star">
                5 <i className="bi bi-star-half text-warning"></i>
              </p>
            </div>
            <p>1.39" HD Display BT Calling</p>
          </div>
        </SwiperSlide>
        <SwiperSlide className="swiper-slide">
          <div className="swiper-card">
            <img
              src="https://cdn.shopify.com/s/files/1/0137/0292/2286/products/ninja-calling-pro-plus-black_1_360x.png?v=1675430352"
              alt="Watch"
            />
            <div className="details">
              <p className="name">Tank</p>
              <p className="star">
                5 <i className="bi bi-star-half text-warning"></i>
              </p>
            </div>
            <p>1.39" HD Display BT Calling</p>
          </div>
        </SwiperSlide>
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
