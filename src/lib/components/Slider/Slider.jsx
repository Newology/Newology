import React from "react";
import PropTypes from "prop-types";
import slide1 from "../../images/slide3.png";
import slide2 from "../../images/slide2.png";
import SliderSection from "./sliderCommon";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import castImg from "../../images/gal.png";
import "./slider.css";

export const Slider = ({
  styletype,
   ProgressStyle, 
   dataSource, ...props}) => {

  return (
    <div
      title="image"
      className={`slider ${ProgressStyle} ${styletype}`}
      alt="img"
      {...props}
    >
      {styletype === "full-screen" ? (
        <SliderSection dots slidesToShow={1} autoplay>
          {dataSource?.length
            ? dataSource.map((item, index) => {
            return (
              <div className="slides">
                <img className={ProgressStyle} src={item?.path} />
              </div>
            );
          }):""}
        </SliderSection>
      ) : null}
      {styletype === "carousal" ? (
        <SliderSection
          dots
          slidesToShow={1.6}
          autoplay
          arrows={false}
          centerMode={true}
          infinite={true}
          centerPadding="60px"
          
        >
          {dataSource?.length
            ? dataSource.map((item, index) => {
            console.log("item", item);
            return (
              <div className="slides-corousal">
                <img className={ProgressStyle} src={item?.path} />
              </div>
            );
          }):""}
        </SliderSection>
      ) : null}
    </div>
  );
};

Slider.propTypes = {
  styletype: PropTypes.oneOf(["full-screen", "carousal"]),
  ProgressStyle: PropTypes.oneOf(["dashed-short", "dots", "dashed-long"]),
  dataSource: PropTypes.array,
};

Slider.defaultProps = {
  styletype: "full-screen",
  ProgressStyle: "dots",
  dataSource : [
    {
      id: "1",
      title: "one",
      path: slide1,
      textData: {
        id: "1",
        image: castImg,
        rating: 8,
        textGenre: "Action, Adventure, Fantasy",
        title: "Planet Of The Apes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: "Scandal! Catchup",
        textGenre1: "2019",
        textGenre1: "English",
        textGenre1: "Drama",
        textGenre1: "120",
        language: "English, Hindi",
      },
    },
    {
      id: "2",
      title: "two",
      path: slide2,
      textData: {
        id: "1",
        image: castImg,
        rating: 8,
        textGenre: "Action, Adventure, Fantasy",
        title: "Planet Of The Apes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: "Scandal! Catchup",
        textGenre1: "2019",
        textGenre1: "English",
        textGenre1: "Drama",
        textGenre1: "120",
        language: "English, Hindi",
      },
    },
    {
      id: "3",
      title: "three",
      path: slide1,
      textData: {
        id: "1",
        image: castImg,
        rating: 8,
        textGenre: "Action, Adventure, Fantasy",
        title: "Planet Of The Apes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: "Scandal! Catchup",
        textGenre1: "2019",
        textGenre1: "English",
        textGenre1: "Drama",
        textGenre1: "120",
        language: "English, Hindi",
      },
    },

    {
      id: "4",
      title: "four",
      path: slide2,
      textData: {
        id: "1",
        image: castImg,
        rating: 8,
        textGenre: "Action, Adventure, Fantasy",
        title: "Planet Of The Apes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: "Scandal! Catchup",
        textGenre1: "2019",
        textGenre1: "English",
        textGenre1: "Drama",
        textGenre1: "120",
        language: "English, Hindi",
      },
    },
    {
      id: "5",
      title: "five",
      path: slide1,
      textData: {
        id: "1",
        image: castImg,
        rating: 8,
        textGenre: "Action, Adventure, Fantasy",
        title: "Planet Of The Apes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: "Scandal! Catchup",
        textGenre1: "2019",
        textGenre1: "English",
        textGenre1: "Drama",
        textGenre1: "120",
        language: "English, Hindi",
      },
    },
    {
      id: "6",
      title: "five",
      path: slide2,
      textData: {
        id: "1",
        image: castImg,
        rating: 8,
        textGenre: "Action, Adventure, Fantasy",
        title: "Planet Of The Apes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: "Scandal! Catchup",
        textGenre1: "2019",
        textGenre1: "English",
        textGenre1: "Drama",
        textGenre1: "120",
        language: "English, Hindi",
      },
    },
    {
      id: "7",
      title: "five",
      path: slide1,
      textData: {
        id: "1",
        image: castImg,
        rating: 8,
        textGenre: "Action, Adventure, Fantasy",
        title: "Planet Of The Apes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: "Scandal! Catchup",
        textGenre1: "2019",
        textGenre1: "English",
        textGenre1: "Drama",
        textGenre1: "120",
        language: "English, Hindi",
      },
    },
    {
      id: "8",
      title: "five",
      path: slide2,
      textData: {
        id: "1",
        image: castImg,
        rating: 8,
        textGenre: "Action, Adventure, Fantasy",
        title: "Planet Of The Apes",
        description:
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
        heading: "Scandal! Catchup",
        textGenre1: "2019",
        textGenre1: "English",
        textGenre1: "Drama",
        textGenre1: "120",
        language: "English, Hindi",
      },
    },
  ]
};
