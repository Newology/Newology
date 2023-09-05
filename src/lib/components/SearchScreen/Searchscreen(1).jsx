import React, {useState} from "react";
import closeIcon from "../../images/close.svg";
import arrowIcon from "../../images/arrow.svg";
import landscape1 from "../../images/rails_images/landscape1.png";
import landscape2 from "../../images/rails_images/landscape2.png";
import landscape3 from "../../images/rails_images/landscape3.png";
import landscape4 from "../../images/rails_images/landscape4.png";
import {InputBox} from "../Input/Input";
import {InfoCard} from "../InfoCard/InfoCard";
import {TVVerticalNavigation} from "../VerticalNavigation/VerticalNavigation";
import home from "../../images/tv_navigation/home.svg";
import search from "../../images/tv_navigation/search.svg";
import setting from "../../images/tv_navigation/setting.svg";
import tv from "../../images/tv_navigation/tv.svg";

import "./searchscreen.css";

const data = [
  {
    id: "1",
    thumbnail: landscape1,
    title: "Movie 1",
    type: "MUSIC",
    icon: arrowIcon,
  },
  {
    id: "2",
    thumbnail: landscape2,
    title: "Movie 2",
    type: "MOVIE",
    icon: arrowIcon,
  },
  {
    id: "3",
    thumbnail: landscape3,
    title: "Movie 3",
    type: "MOVIE",
    icon: arrowIcon,
  },
  {
    id: "4",
    thumbnail: landscape4,
    title: "Movie 4",
    type: "MOVIE",
    icon: arrowIcon,
  },
  {
    id: "5",
    thumbnail: landscape1,
    title: "Movie 5",
    type: "SHOWS",
    icon: arrowIcon,
  },
  {
    id: "6",
    thumbnail: landscape2,
    title: "Movie 6",
    type: "ARTISTS",
    icon: arrowIcon,
  },
  {
    id: "7",
    thumbnail: landscape3,
    title: "Movie 7",
    type: "VIDEOS",
    icon: arrowIcon,
  },
  {
    id: "8",
    thumbnail: landscape4,
    title: "Movie 8",
    type: "VIDEOS",
    icon: arrowIcon,
  },
  {
    id: "9",
    thumbnail: landscape3,
    title: "Movie 9",
    type: "SHOWS",
    icon: arrowIcon,
  },
  {
    id: "10",
    thumbnail: landscape4,
    title: "Movie 10",
    type: "MUSIC",
    icon: arrowIcon,
  },
];
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

export const SearchScreen = () => {
  const [activeTab, setActiveTab] = useState("ALL");
  const [searchData, setSearchData] = useState(data);
  const [tempsearchData, setTempSearchData] = useState(data);

  const handleInput = (e, searchDataList) => {
    const updatedData = searchDataList.filter((item) => {
      if (item.type === activeTab) {
        return item;
      } else {
        return item;
      }
    });
    const searchData = updatedData.filter((item) =>
      item.title.toUpperCase().includes(e.target.value.toUpperCase())
    );
    setTempSearchData(searchData);
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    const updatedData = searchData.filter((item) => {
      // debugger
      if (item.type === tab) {
        return item;
      } else if (tab === "ALL") {
        return item;
      }
    });
    // debugger
    setTempSearchData(updatedData);
  };

  return (
    <div className="tv-container">
      <div className="vertical-menu-search-screen">
        {navData?.length
          ? navData.map((item) => (
              <TVVerticalNavigation title={item?.title} icon={item?.icon} />
            ))
          : ""}
      </div>
      <div className="search-screen-wrapper">
      <div className="search-container">
        <div className="search-bar">
          <InputBox
            placeholder="Search"
            labelColor="#FFFFFF"
            color="#FFFFFF"
            borderColor="#9C9EA3"
            backgroundColor="transparent"
            onChange={(e) => handleInput(e, searchData)}
          />
          {/* <span>
            <img src={searchIcon} width={26} height={26}/>
          </span> */}
        </div>
        <span className="close-icon">
          {/* <AiOutlineClose width={26} height={26} /> */}
          <img src={closeIcon} />
        </span>
      </div>

      <div className="search-bar-tab">
        <ul>
          <li
            className={activeTab === "ALL" ? "active-tab" : ""}
            onClick={() => handleTabChange("ALL")}
          >
            All
          </li>
          <li
            className={activeTab === "SHOWS" ? "active-tab" : ""}
            onClick={() => handleTabChange("SHOWS")}
          >
            Shows
          </li>
          <li
            className={activeTab === "MOVIE" ? "active-tab" : ""}
            onClick={() => handleTabChange("MOVIE")}
          >
            Movies
          </li>
          <li
            className={activeTab === "MUSIC" ? "active-tab" : ""}
            onClick={() => handleTabChange("MUSIC")}
          >
            Music
          </li>
          <li
            className={activeTab === "ARTISTS" ? "active-tab" : ""}
            onClick={() => handleTabChange("ARTISTS")}
          >
            Artists
          </li>
          <li
            className={activeTab === "VIDEOS" ? "active-tab" : ""}
            onClick={() => handleTabChange("VIDEOS")}
          >
            Videos
          </li>
        </ul>
      </div>

      <div className="search-screen-card-options">
        <div className="search-mobile-wrapper">
          <h3 className="search-mobile-heading">Search Result</h3>
          <p className="search-mobile-clear-heading">Clear</p>
        </div>
        {tempsearchData?.length
          ? tempsearchData.map((item) => (
              <InfoCard
                title={item?.title}
                thumbnail={item?.thumbnail}
                icon={item?.icon}
              />
            ))
          : ""}
      </div>
    </div>
    </div>
    
  );
};
