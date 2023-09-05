import React from "react";
import PropTypes from "prop-types";
import SliderSection from "../Slider/sliderCommon";
import { useMediaQuery } from "react-responsive";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import channel1 from "../../images/cnbc.png";
import channel2 from "../../images/zee.png";
import {
  channelRailsData,
  landscapeData,
  portraitData,
  railsData,
  genreData,
  genreMiniData,
  channelData,
  channelRailMiniData,
} from "./datajson";
import "./rails.css";

export const Rails = ({
  style,
  ProgressStyle,
  arrows,
  dataSource,
  isResponsive,
  spaceBetweenTheCards,
  channelRailsMiniLight,
  ...props
}) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  });

  return (
    <div
      title="image"
      className={`rails-container ${ProgressStyle} ${style} ${arrows} `}
      dataSource={dataSource || railsData}
      alt="img"
      {...props}
    >
      {style === "Video-Rail-Landscape" ? (
        <SliderSection arrow autoplay infinite={true} variableWidth={true}>
          {(dataSource.length
            ? dataSource
            : null || landscapeData.length
            ? landscapeData
            : []
          ).map((item, index) => {
            console.log(landscapeData)
            return (
              <div>
                <div
                  className="video-landscape-slides"
                  style={{ marginRight: spaceBetweenTheCards }}
                >
                  <img className={ProgressStyle} src={item?.path} />
                </div>
              </div>
            );
          })}
        </SliderSection>
      ) : null}

      {style === "Video-Rail-Portrait" ? (
        <SliderSection
          arrow
          autoplay
          infinite={true}
          variableWidth={true}
          className="video-rail-portrait-slider"
        >
          {(dataSource.length
            ? dataSource
            : null || portraitData.length
            ? portraitData
            : []
          ).map((item, index) => {
            return (
              <div>
                <div
                  className="video-portrait-slides"
                  style={{ marginRight: spaceBetweenTheCards }}
                >
                  <img className={ProgressStyle} src={item?.path} />
                </div>
              </div>
            );
          })}
        </SliderSection>
      ) : null}

      {style === "Genre-Rail-Landscape" ? (
        <SliderSection arrow infinite={true} autoplay variableWidth={true}>
          {(dataSource.length
            ? dataSource
            : null || genreData.length
            ? genreData
            : []
          ).map((item, index) => {
            return (
              <div>
                <div
                  className="genre-landscape-slides"
                  style={{ marginRight: spaceBetweenTheCards }}
                >
                  <img
                    style={{ borderRadius: "8px" }}
                    className={ProgressStyle}
                    src={item?.path}
                  />
                  <div className="genre">{item?.genre}</div>
                </div>
              </div>
            );
          })}
        </SliderSection>
      ) : null}

      {style === "Genre-Rail-Circular" ? (
        <SliderSection arrow autoplay infinite={true} variableWidth={true}>
          {(dataSource.length
            ? dataSource
            : null || genreData.length
            ? genreData
            : []
          ).map((item, index) => {
 
            return (
              <div>
                <div
                  className="genre-circular-slides"
                  style={{ marginRight: spaceBetweenTheCards }}
                >
                  <img className={ProgressStyle} src={item?.path} />
                  <span className="genre">{item?.genre}</span>
                </div>
              </div>
            );
          })}
        </SliderSection>
      ) : null}

      {style === "Genre-Rail-Mini" ? (
        <SliderSection arrow autoplay infinite={true} variableWidth={true}>
          {(dataSource.length
            ? dataSource
            : null || genreMiniData.length
            ? genreMiniData
            : []
          ).map((item, index) => {
            return (
              <div>
                <div
                  className="genre-mini-slides"
                  style={{ marginRight: spaceBetweenTheCards }}
                >
                  <img className={ProgressStyle} src={item?.path} />
                  <span className="genre">{item?.genre}</span>
                </div>
              </div>
            );
          })}
        </SliderSection>
      ) : null}

      {style === "Channel-Rail-Circular" ? (
        <SliderSection arrow autoplay infinite={true} variableWidth={true}>
          {(dataSource.length
            ? dataSource
            : null || channelData.length
            ? channelData
            : []
          ).map((item, index) => {
            return (
              <div>
                <div
                  className="channel-circular-slides"
                  style={{ marginRight: spaceBetweenTheCards }}
                >
                  <img className={ProgressStyle} src={item?.path} />
                </div>
              </div>
            );
          })}
        </SliderSection>
      ) : null}

      {style === "Channel-Rail-Square" ? (
        <>
          {isResponsive && isMobile ? (
            <>
              <div className="channel-square-slides-mobile-screen">
                {(dataSource.length
                  ? dataSource
                  : null || channelData.length
                  ? channelData
                  : []
                ).map((item, index) => {
                  return (
                    <div>
                      <div
                        className="channel-square-slides-mob"
                        style={{ marginRight: spaceBetweenTheCards }}
                      >
                        <img className={ProgressStyle} src={item?.path} />
                      </div>
                    </div>
                  );
                })}
              </div>
            </>
          ) : (
            <SliderSection arrow infinite={true} autoplay variableWidth={true}>
               {(dataSource.length
                  ? dataSource
                  : null || channelData.length
                  ? channelData
                  : []
                ).map((item, index) => {
                return (
                  <div>
                    <div
                      className="channel-square-slides"
                      style={{ marginRight: spaceBetweenTheCards }}
                    >
                      <img className={ProgressStyle} src={item?.path} />
                    </div>
                  </div>
                );
              })}
            </SliderSection>
          )}
        </>
      ) : null}

      {style === "Channel-Rail-Mini" ? (
        <SliderSection arrow autoplay infinite={true} variableWidth={true}>
            {(dataSource.length
                  ? dataSource
                  : null || channelData.length
                  ? channelData
                  : []
                ).map((item, index) => {
              return (
                <div>
                  <div
                    className={`channel-mini-slides ${
                      channelRailsMiniLight ? "mini-light" : "mini-dark"
                    } `}
                    style={{ marginRight: spaceBetweenTheCards }}
                  >
                    <img className={ProgressStyle} src={item?.path} />
                  </div>
                </div>
              );
            }
          )}
        </SliderSection>
      ) : null}
    </div>
  );
};

Rails.propTypes = {
  style: PropTypes.oneOf([
    "Video-Rail-Landscape",
    "Video-Rail-Portrait",
    "Genre-Rail-Landscape",
    "Genre-Rail-Circular",
    "Genre-Rail-Mini",
    "Channel-Rail-Circular",
    "Channel-Rail-Square",
    "Channel-Rail-Mini",
  ]),
  arrows: PropTypes.oneOf(["yes", "no"]),
  isResponsive: PropTypes.bool,
  spaceBetweenTheCards: PropTypes.oneOf([
    "4px",
    "8px",
    "12px",
    "16px",
    "24px",
    "32px",
  ]),
  channelRailsMiniLight: PropTypes.bool,
};

Rails.defaultProps = {
  style: "Video-Rail-Landscape",
  arrows: "yes",
  spaceBetweenTheCards: "12px",
  channelRailsMiniLight: false,
  dataSource: [
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
      path: channel1,
      genre: "Romance",
    },

    {
      id: "4",
      title: "four",
      path: channel2,
      genre: "Action",
    },
    {
      id: "5",
      title: "five",
      path: channel1,
      genre: "Comedy",
    },
    {
      id: "6",
      title: "five",
      path: channel2,
      genre: "Comedy",
    },
    {
      id: "7",
      title: "five",
      path: channel1,
      genre: "Comedy",
    },
    {
      id: "8",
      title: "five",
      path: channel2,
      genre: "Comedy",
    },
  ],
};
