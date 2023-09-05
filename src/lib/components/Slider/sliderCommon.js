import React, {useState, useEffect, useRef} from "react";
import Slider from "react-slick";
// import './style.scss';

const SliderSection = (props) => {
  const {
    slidesToShow,
    slidesToScroll,
    autoplay,
    infinite,
    adaptiveHeight,
    TabletSlidesToShow,
    TabletSlidesToScroll,
    MobileSlidesToShow,
    MobileSlidesToScroll,
    dots,
    arrow,
    centerMode,
    centerPadding,
    className,
    children,
    variableWidth,
  } = props;
  const slider1 = useRef();

  const sliderSettings = {
    slidesToShow: slidesToShow ? slidesToShow : 1,
    slidesToScroll: slidesToScroll ? slidesToScroll : 1,
    autoplay: autoplay || false,
    infinite: infinite || false,
    adaptiveHeight: adaptiveHeight || false,
    variableWidth: variableWidth || false,
    dots: dots || false,
    arrows: arrow || false,
    centerMode: centerMode || false,
    centerPadding: centerPadding || "0px",
    className: className || "",
    responsive: [
      {
        breakpoint: 991,
        settings: {
          slidesToShow: TabletSlidesToShow ? TabletSlidesToShow : 1,
          slidesToScroll: TabletSlidesToScroll ? TabletSlidesToScroll : 1,
        },
      },
      {
        breakpoint: 670,
        settings: {
          slidesToShow: MobileSlidesToShow ? MobileSlidesToShow : 1,
          slidesToScroll: MobileSlidesToScroll ? MobileSlidesToScroll : 1,
        },
      },
    ],
  };

  return <Slider {...sliderSettings}>{children}</Slider>;
};

export default SliderSection;
