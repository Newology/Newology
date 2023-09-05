import React from "react";
import {AppBar} from "../AppBar/AppBar";
import {Slider} from "../Slider/Slider";
import { TextContent } from "../TextContext/TextContent";
import {Rails} from "../Rails/Rails";
import banner from "../../images/rails_images/Banner.png";

import landscape1 from "../../images/rails_images/landscape1.png";
import landscape2 from "../../images/rails_images/landscape2.png";
import landscape3 from "../../images/rails_images/landscape3.png";
import landscape4 from "../../images/rails_images/landscape4.png";

import portrait1 from "../../images/rails_images/portrait1.png";
import portrait2 from "../../images/rails_images/portrait2.png";
import portrait3 from "../../images/rails_images/portrait3.png";
import portrait4 from "../../images/rails_images/portrait4.png";
import portrait5 from "../../images/rails_images/portrait5.png";
import portrait6 from "../../images/rails_images/portrait6.png";

import genre1 from "../../images/rails_images/genre1.png";
import genre2 from "../../images/rails_images/genre2.png";
import genre3 from "../../images/rails_images/genre3.png";
import genre4 from "../../images/rails_images/genre4.png";
import genre5 from "../../images/rails_images/genre5.png";

import channel1 from "../../images/rails_images/channel1.png";
import channel2 from "../../images/rails_images/channel2.png";
import channel3 from "../../images/rails_images/channel3.png";
import channel4 from "../../images/rails_images/channel4.png";
import channel5 from "../../images/rails_images/channel5.png";
import channel6 from "../../images/rails_images/channel6.png";
import channel7 from "../../images/rails_images/channel7.png";
import channel8 from "../../images/rails_images/channel8.png";

import homeIcon from "../../images/home_icon_selected.svg";
import mskyLiveIcon from "../../images/Msky_Live.svg";
import mskyVideoIcon from "../../images/Msky_video.svg";
import hboIcon from "../../images/HBO_GO.svg";
import flashIcon from "../../images/Flash_Channel.svg";
import hamburgerIcon from "../../images/Hamburger Icon Hover.svg";
import onDemandIcon from "../../images/On Demand.svg";
import liveTvIcon from "../../images/Live TV.svg";
import moreIcon from "../../images/More.svg";

import "./templateOne.css";

const slidesData = [
  {
    id: "1",
    title: "one",
    path: banner,
    genre: "Comedy",
  },
  {
    id: "2",
    title: "one",
    path: banner,
    genre: "Comedy",
  },
];

const landscapeData = [
  {
    id: "1",
    title: "one",
    path: landscape1,
    genre: "Comedy",
  },
  {
    id: "2",
    title: "two",
    path: landscape2,
    genre: "Thriller",
  },
  {
    id: "3",
    title: "three",
    path: landscape3,
    genre: "Romance",
  },
  {
    id: "4",
    title: "four",
    path: landscape4,
    genre: "Action",
  },
];

const portraitData = [
  {
    id: "1",
    title: "one",
    path: portrait1,
    genre: "Comedy",
  },
  {
    id: "2",
    title: "two",
    path: portrait2,
    genre: "Thriller",
  },
  {
    id: "3",
    title: "three",
    path: portrait3,
    genre: "Romance",
  },

  {
    id: "4",
    title: "four",
    path: portrait4,
    genre: "Action",
  },
  {
    id: "5",
    title: "five",
    path: portrait5,
    genre: "Comedy",
  },
  {
    id: "6",
    title: "five",
    path: portrait6,
    genre: "Comedy",
  },
];

const genreData = [
  {
    id: "1",
    title: "one",
    path: genre1,
    genre: "Comedy",
  },
  {
    id: "2",
    title: "two",
    path: genre2,
    genre: "Thriller",
  },
  {
    id: "3",
    title: "three",
    path: genre3,
    genre: "Romance",
  },

  {
    id: "4",
    title: "four",
    path: genre4,
    genre: "Action",
  },
  {
    id: "5",
    title: "five",
    path: genre5,
    genre: "Comedy",
  },
];

const channelData = [
  {
    id: "1",
    title: "one",
    path: channel1,
    genre: "Comedy",
  },
  {
    id: "2",
    title: "two",
    path: channel2,
    genre: "Thriller",
  },
  {
    id: "3",
    title: "three",
    path: channel3,
    genre: "Romance",
  },

  {
    id: "4",
    title: "four",
    path: channel4,
    genre: "Action",
  },
  {
    id: "5",
    title: "five",
    path: channel5,
    genre: "Comedy",
  },
  {
    id: "6",
    title: "six",
    path: channel6,
    genre: "Comedy",
  },
  {
    id: "7",
    title: "seven",
    path: channel7,
    genre: "Comedy",
  },
  {
    id: "8",
    title: "eight",
    path: channel8,
    genre: "Comedy",
  },
];


export const TemplateOne = () => {

  return (
    <div title="image" className="template-one-container" alt="img"  
    >
      <AppBar backgroundColor={"#01043d"} appBarType={`appbarV4`} AppOptions={false} />
      <div className="slider-wrapper">
        <Slider dataSource={slidesData} />
        <div className="text-content-wrapper">
          <TextContent color={"#ffffff"} style={`style2`} />
        </div>
      </div>

      <div className="tempone-series">
        <div className="tempone-series-left">
        <span className=" tempone-series-title">Trending Series</span>{" "}
        <span className="tempone-series-number">15 Items</span>
        </div>
        <div className="more-options">More</div>
      </div>
      <div className="slider-wrapper-below trending-cards">
        <Rails
          style={"Video-Rail-Landscape"}
          arrows={"no"}
          dataSource={landscapeData}
        />
      </div>
      <div className="tempone-series">
      <div className="tempone-series-left">
        <span className=" tempone-series-title">Bollywood Movies</span>{" "}
        <span className="tempone-series-number">24 Items</span>
        </div>
        <div className="more-options">More</div>
      </div>
      <div className="slider-wrapper-below bollywood-cards">
        <Rails
          style={"Video-Rail-Portrait"}
          arrows={"no"}
          dataSource={portraitData}
        />
      </div>
      <div className="tempone-series">
        <span className=" tempone-series-title">Live TV</span>
        <div className="more-options">More</div>
      </div>
      <div className="slider-wrapper-below-live-tv">
        <Rails
          style={"Channel-Rail-Square"}
          arrows={"no"}
          dataSource={channelData}
          isResponsive={true}
        />
      </div>
      <div className="tempone-series">
      <div className="tempone-series-left">
        <span className=" tempone-series-title">Genres</span>
        <span className="tempone-series-number">22 Items</span>
        </div>
        <div className="more-options">More</div>
      </div>
      <div className="slider-wrapper-below genres-cards">
        <Rails
          style={"Genre-Rail-Landscape"}
          arrows={"no"}
          dataSource={genreData}
        />
      </div>
      <div className="tempone-series">
      <div className="tempone-series-left">
        <span className=" tempone-series-title">Top Movies</span>{" "}
        <span className="tempone-series-number">34 Items</span>
        </div>
        <div className="more-options">More</div>
      </div>
      <div className="slider-wrapper-below top-movies-cards">
        <Rails
          style={"Video-Rail-Portrait"}
          arrows={"no"}
          dataSource={portraitData}
        />
      </div>
      <div className="tempone-footer-wrapper">
        <span className="tempone-footer-logo">LOGO</span>
        <div className="tempone-footer-contents">
          <span>ABOUT </span>
          <span>WAYS TO WATCH </span>
          <span>HELP</span>
          <span>CENTRE</span>
          <span>FAQ’s</span>
          <span>CAREERS</span>
          <span>PRIVACY</span>
          <span>CONTACT US</span>
        </div>
      </div>
      <div class="footer-menu">
       <ul class="footer-menu-list">
            <a href="">
                <li>
                    <img src={homeIcon} />
                    <p>Home</p>
                </li>
            </a>

            <a href="">
                <li>
                    <img src={mskyLiveIcon} />
                    <p>Msky Live</p>
                </li>
            </a>

            <a href="">
                <li>
                    <img src={mskyVideoIcon} />
                    <p>Msky video</p>
                </li>
            </a>


            <a href="">
                <li>
                    <img src={hboIcon} />
                    <p>HBO GO</p>
                </li>
            </a>


            <a href="">
                <li>
                    <img src={flashIcon} />
                    <p>Flash Channel</p>
                </li>
            </a>

            <a href="">
                <li>
                    <img src={hamburgerIcon} />
                    <p>Menu</p>
                </li>
            </a>
        
       </ul>
   </div>
   <div className="footer-menu-small">
            <ul className="footer-menu-list">
              <a href="">
                <li>
                  <img src={homeIcon} />
                  <p>HOME</p>
                </li>
              </a>

              <a href="">
                <li>
                  <img src={onDemandIcon} />
                  <p>ON DEMAND</p>
                </li>
              </a>

              <a href="">
                <li>
                  <img src={liveTvIcon} />
                  <p>LIVE TV</p>
                </li>
              </a>

              <a href="">
                <li 
                // onClick={(e) => handleMore(e)}
                >
                  <img src={moreIcon} />
                  <p>MORE</p>
                </li>
              </a>
            </ul>
          </div>
    </div>
  );
};
