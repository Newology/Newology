import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AppBar } from "../AppBar/AppBar";
import { TextContent } from "../TextContext/TextContent";
import { InfoCard } from "../InfoCard/InfoCard";
import landscape1 from "../../images/rails_images/landscape1.png";
import landscape2 from "../../images/rails_images/landscape2.png";
import landscape3 from "../../images/rails_images/landscape3.png";
import landscape4 from "../../images/rails_images/landscape4.png";
import backgroundUrl from "../../images/detail-background.jpg";
import castImg from "../../images/gal.png";
import SliderSection from "../Slider/sliderCommon";
import {TVVerticalNavigation} from "../VerticalNavigation/VerticalNavigation";

import home from "../../images/tv_navigation/home.svg";
import search from "../../images/tv_navigation/search.svg";
import setting from "../../images/tv_navigation/setting.svg";
import tv from "../../images/tv_navigation/tv.svg";

import "./detail.css";


const detailcardsData = [
  {
    id: "1",
    thumbnail: landscape1,
    title: "Movie 1",
    duration: "01:15:00",
  },
  {
    id: "2",
    thumbnail: landscape2,
    title: "Movie 2",
    episodes: "5 episodes",
  },
  {
    id: "3",
    thumbnail: landscape3,
    title: "Movie 3",
    duration: "01:15:00",
  },
  {
    id: "4",
    thumbnail: landscape4,
    title: "Movie 4",
    duration: "01:15:00",
  },
  {
    id: "5",
    thumbnail: landscape1,
    title: "Movie 5",
    duration: "01:15:00",
  },
  {
    id: "6",
    thumbnail: landscape2,
    title: "Movie 6",
    duration: "01:15:00",
  },
  {
    id: "7",
    thumbnail: landscape3,
    title: "Movie 7",
    duration: "01:15:00",
  },
  {
    id: "8",
    thumbnail: landscape4,
    title: "Movie 8",
    duration: "01:15:00",
  },
];

const textData = {
  id: "1",
  image: castImg,
  rating: 8,
  textGenre: "Action, Adventure, Fantasy",
  title: "Movie Name",
  description:
    "In the wake of a zombie apocalypse, various survivors struggle to stay alive. As they search for safety and evade the undead, they are forced to grapple with rival groups and difficult choices.",
  heading: "Scandal! Catchup",
  textGenre1: "2019",
  textGenre1: "English",
  textGenre1: "Drama",
  textGenre1: "120",
  language: "English",
  duration: "2Hr 30M",
  time: "2021",
  buttonText: "Watch",
  director: "John Lennon",
  castList: [],
};

const navData = [
  {
    id: "1",
    title: "Home",
    icon: home,
  },
  {
    id: "2",
    title: "Search",
    icon: search,
  },
  {
    id: "3",
    title: "Live TV",
    icon: tv,
  },
  {
    id: "4",
    title: "Settings",
    icon: setting,
  },
];

export const DetailUpdated = () => {
  return (
    <div className="tv-section">
      <AppBar
        appBarType={`appbarV2`}
        MenuIcon={false}
        className="app-tv-bar"
        LogoIcon={false}
        AppOptions={false}
        backgroundColor={
          "linear-gradient(to bottom, rgba(0, 17, 34, 1),rgba(0, 17, 34, 0) )"
        }
      />
      <div className="tv-container">
        <div className="vertical-menu">
          {navData?.length
            ? navData.map((item) => (
                <TVVerticalNavigation title={item?.title} icon={item?.icon} />
              ))
            : ""}
        </div>
        <div
      title="image"
      className="details-container"
      style={{backgroundImage: `url(${backgroundUrl})`}}
    >
      <div className="details-container-section">
        <AppBar
          appBarType={`appbarV2`}
          MenuIcon={false}
          className="app-bar-section"
          backgroundColor={
            "linear-gradient(to bottom, rgba(0, 17, 34, 1),rgba(0, 17, 34, 0) )"
          }
          // backgroundColor={"rgba(0, 17, 34, 0.4)"}
        />
        <div className="details-content-container">
          <div className="details-text-content-wrapper">
            <div className="image-wrapper">
              <img src={backgroundUrl} alt="image" />
            </div>
            <TextContent
              dataSource={textData}
              style={"style13"}
              color={"#ffffff"}
            />
          </div>
          <div className="details-content-row">
            <h3>You may also like</h3>
            <div className="screen-detailed-options">
              <SliderSection arrow infinite={true} variableWidth={true}>
                {detailcardsData?.length
                  ? detailcardsData.map((item) => (
                      <InfoCard
                        title={item?.title}
                        thumbnail={item?.thumbnail}
                        duration={item?.duration}
                        episodes={item?.episodes}
                        color={"#ffffff"}
                      />
                    ))
                  : ""}
              </SliderSection>
            </div>
          </div>
        </div>
      </div>
    </div>
      </div>
    </div>
    
  );
};
