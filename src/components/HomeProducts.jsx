import React from "react";
import HomeImg6 from "../assets/images/HomeImg6.png";
import HomeImg4 from "../assets/images/HomeImg4.png";
import HomeImg5 from "../assets/images/HomeImg5.png";
import HomeImg3 from "../assets/images/HomeImg3.png";
import HomeImg2 from "../assets/images/HomeImg2.png";
import HomeImg1 from "../assets/images/HomeImg1.png";
import "../assets/css/HomePage.css";
import { useNavigate } from "react-router-dom";

const HomeProducts = () => {
    const navigate=useNavigate();
  return (
    <div className="container-fluid my-3">
      <div className="row justify-content-center my-3">
        <div className="col-md-6 eight">
          <h2>Shop By Categories</h2>
        </div>
      </div>
      <div className="row justify-content-around row-1 mx-2" style={{cursor:"pointer"}}>
        <div className="col-md-3 image-container rounded m-2" onClick={()=>navigate("/products/allearbuds")}>
          <img src={HomeImg1} alt="Banner_Image" className="img-fluid" loading="lazy" />
        </div>
        <div className="col-md-3 image-container rounded m-2" onClick={()=>navigate("/products/allwatches")}>
          <img src={HomeImg2} alt="Banner_Image" className="img-fluid" loading="lazy" />
        </div>
        <div className="col-md-5 image-container rounded m-2 bg-danger" onClick={()=>navigate("/products/alllaptops")}>
          <img
            src={HomeImg3}
            alt="Banner_Image"
            className="img-fluid rounded"
            loading="lazy"
          />
        </div>
      </div>

      <div className="row justify-content-around row-2 mx-2" style={{cursor:"pointer"}}>
        <div className="col-md-5 image-container rounded m-2" onClick={()=>navigate("/products/alllaptops")}>
          <img
            src={HomeImg4}
            alt="Banner_Image"
            className="img-fluid rounded"
            loading="lazy"
          />
        </div>
        <div className="col-md-3 image-container rounded m-2 ">
          <img src={HomeImg5} alt="Banner_Image" className="img-fluid" loading="lazy" onClick={()=>navigate("/products/allwatches")}/>
        </div>
        <div className="col-md-3 image-container rounded m-2" onClick={()=>navigate("/products/allearbuds")}>
          <img src={HomeImg6} alt="Banner_Image" className="img-fluid" loading="lazy" />
        </div>
      </div>
    </div>
  );
};

export default HomeProducts;
