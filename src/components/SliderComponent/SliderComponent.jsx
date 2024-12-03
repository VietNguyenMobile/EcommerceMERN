import React from "react";
import Slider from "react-slick";
import { Image } from "antd";
import { WrapperSliderStyle } from "./style";

const SliderComponent = ({ arrImages }) => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplaySpeed: 1000,
  };
  return (
    <WrapperSliderStyle {...settings}>
      {arrImages.map((item, index) => (
        <Image
          key={index}
          src={item}
          preview={false}
          width="100%"
          height="306px"
        />
      ))}
    </WrapperSliderStyle>
  );
};

export default SliderComponent;
