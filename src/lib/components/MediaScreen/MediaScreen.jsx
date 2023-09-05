import React from "react";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import ReactPlayer from "react-player/youtube";
import {TextContent} from "../TextContext/TextContent";
import {InfoCard} from "../InfoCard/InfoCard";
import media1 from "../../images/media_player/media1.png";
import media2 from "../../images/media_player/media2.png";
import media3 from "../../images/media_player/media3.png";
import media4 from "../../images/media_player/media4.png";
import media5 from "../../images/media_player/media5.png";
import SliderSection from "../Slider/sliderCommon";

import "./mediaScreen.css";

const detailcardsData = [
  {
    id: "1",
    thumbnail: media1,
    title: "Movie 1",
    duration: "01:15:00",
  },
  {
    id: "2",
    thumbnail: media2,
    title: "Movie 2",
    episodes: "5 episodes",
  },
  {
    id: "3",
    thumbnail: media3,
    title: "Movie 3",
    duration: "01:15:00",
  },
  {
    id: "4",
    thumbnail: media4,
    title: "Movie 4",
    duration: "01:15:00",
  },
  {
    id: "5",
    thumbnail: media5,
    title: "Movie 5",
    duration: "01:15:00",
  },
  {
    id: "6",
    thumbnail: media1,
    title: "Movie 6",
    duration: "01:15:00",
  },
  {
    id: "7",
    thumbnail: media2,
    title: "Movie 7",
    duration: "01:15:00",
  },
  {
    id: "8",
    thumbnail: media3,
    title: "Movie 8",
    duration: "01:15:00",
  },
];

const textData = {
  id: "1",
  title: "Hyderabad Vs Chennai, 31st Dec",
  description:
    "Hyderabad scripted the the biggest comeback story of 2022 in international cricket as they scored an international century after three years",
  buttonText: "Share",
};

export const MediaScreen = () => {
  return (
    <>
      <div title="image" className="media-player-container">
        <ReactPlayer
          url="https://www.youtube.com/watch?v=rtx2uTkew4c"
          height={"100vh"}
          width={"96vw"}
        />
        <div className="media-player-container-section">
          <div className="media-player-content-container">
            <div className="media-player-text-content-wrapper">
              <TextContent
                dataSource={textData}
                style={"style14"}
                color={"#ffffff"}
              />
            </div>
            <div className="media-player-content-row">
              <h3>Recently Watched</h3>
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
    </>
  );
};
