import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";

const Banner = () => {
  const settings = {
    dots: true,
    infinite: true,
    arrows: false,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    appendDots: (dots) => (
      <div
        style={{
          borderRadius: "10px",
          padding: "0 20px",
          position: "absolute",
          top: "50%",
          left: "50px",
          transform: "translateY(-50%)",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
    customPaging: (i) => (
      <div
        style={{
          width: "40px",
          color: "#222",
          borderRight: "4px red solid",
          padding: "15px 10px",
        }}
      >
        0{i + 1}
      </div>
    ),
  };
  return (
    <div>
      <Slider {...settings}>
        <div className="bg-banner h-[600px]"></div>
        <div className="bg-banner h-[600px]"></div>
        <div className="bg-banner h-[600px]"></div>
      </Slider>
    </div>
  );
};

export default Banner;
