import React, { useEffect, useState, useMemo } from "react";
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
  const [slidesPerView, setSlidesPerView] = useState(4);
  const navigate = useNavigate();
  const shimmerArray = [1, 2, 3, 4, 5, 6];

  useEffect(() => {
    const handleResize = () => {
      setSlidesPerView((prevSlides) =>
        window.innerWidth < 1024 ? 2 : 4
      );
    };

    const debouncedHandleResize = debounce(handleResize, 200);
    window.addEventListener("resize", debouncedHandleResize);

    return () => {
      window.removeEventListener("resize", debouncedHandleResize);
    };
  }, []);

  const handleShowMoreBtn = (showMoreBtn) => {
    const paths = {
      watches: "/products/allwatches",
      earbuds: "/products/allearbuds",
      laptops: "/products/alllaptops",
    };
    navigate(paths[showMoreBtn]);
  };

  const slidesPerViewMemoized = useMemo(() => slidesPerView, [slidesPerView]);

  return (
    <>
      <div className="top-watch">
        <h1>{title}</h1>
      </div>
      <Swiper
        slidesPerView={slidesPerViewMemoized}
        spaceBetween={20}
        pagination={{
          clickable: true,
        }}
        modules={[Pagination]}
        className="mySwiper"
      >
        {bestSellerData && bestSellerData.length > 0 ? (
          bestSellerData.map((item) => (
            <SwiperSlide key={item.productId} className="swiper-slide">
              <div className="swiper-card">
                <img
                  src={item.productImage}
                  alt="Watch"
                  loading="lazy"
                />
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
          ))
        ) : (
          //   <h3>No Data was fetched from Api</h3>
          //Since no data was fetched so have used Shimmer Effect for enhancing user experience
          shimmerArray.map((element) => (
            <SwiperSlide key={element} className="swiper-slide">
              <ShimmerEffect />
            </SwiperSlide>
          ))
        )}
      </Swiper>
      <div className="show-more-div">
        <button
          className="learn-more show-more-btn"
          onClick={() => handleShowMoreBtn(showMoreBtn)}
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

function debounce(func, wait) {
    //Deboucning so prevent regular resizing of screen 
  let timeout;
  return function executedFunction(...args) {
    const later = () => {
      clearTimeout(timeout);
      func(...args)
    }
    clearTimeout(timeout)
    timeout = setTimeout(later, wait);
  };
}
