import React, { useState } from "react";
import PropTypes from "prop-types";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCaretRight,
  faShareNodes,
  faCirclePlus,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import dummyImg from "../../images/dummyImg.png";
import "./textcontent.css";
import { RatingComponent } from "../RatingComponent/RatingComponent";
import { Button } from "../Button/Button";

export const TextContent = ({
  style,
  size,
  dataSource,
  color,
  buttonText,
  title,
  textGenre,
  rating,
  badgeIconTwo,
  badgeIconOne,
  description,
  heading,
  badgeTextList,
  time,
  duration,
  tag,
  language,
  director,
  castList,
  ...props
}) => {
  const renderCastCircles = (initIndex, lastIndex) => {
    if (castList && castList.length > 0) {
      return castList.slice(initIndex, lastIndex).map((item, index) => {
        return (
          <span key={index} className="cast-circle">
            <img src={item?.image} alt="cast-img" />
          </span>
        );
      });
    }
    return <></>;
  };
  return (
    <div title="image" className={`text-container ${style} ${size}`} {...props}>
      {style === "style1" ? (
        <div className="style1-wrapper">
          <div className="style1-row1">
            <RatingComponent style={`view-only`} viewOnlyRating={rating} />
            <span className="text-genre" style={color && { color }}>
              {textGenre}
            </span>
          </div>
          <div className="style1-row2">{title}</div>
          <div className="style1-row3">
            <span className="badge-icon-watch">
              <FontAwesomeIcon icon={faCaretRight} />
              {badgeIconOne}
            </span>
            <span className="badge-icon-addlist">
              <FontAwesomeIcon icon={faPlus} />
              {badgeIconTwo}
            </span>
          </div>
        </div>
      ) : null}

      {style === "style2" ? (
        <div className="style2-wrapper">
          <div className="style2-row1" style={color && { color }}>
            {title}
          </div>
          <div className="style2-row2">
            <span className="style2-text-genre" style={color && { color }}>
              {textGenre}
            </span>
            <RatingComponent />
          </div>
          <div className="style2-row3">
            <span className="style2-badge-icon-watch">{badgeIconOne}</span>
          </div>
        </div>
      ) : null}

      {style === "style3" ? (
        <div className="style3-wrapper">
          <div className="style3-row1" style={color && { color }}>
            {title}
          </div>
          <div className="style3-row2">
            <RatingComponent />
            <span className="style3-text-genre">{textGenre}</span>
          </div>
          <div className="style3-row3-text">{description}</div>
          <div className="style3-row4">
            <span className="badge-icon-watch">
              <FontAwesomeIcon icon={faCaretRight} />
              {badgeIconOne}
            </span>
            <span className="badge-icon-addlist">
              <FontAwesomeIcon icon={faPlus} />
              {badgeIconTwo}
            </span>
          </div>
        </div>
      ) : null}

      {style === "style4" ? (
        <div className="style4-wrapper">
          <div className="style4-row1" style={color && { color }}>
            {heading}
          </div>
          <div className="style4-row2">
            {badgeTextList.map((item, index) => {
              return (
                <span key={index} className="style4-text-genre">
                  {item?.badgeName}
                </span>
              );
            })}
          </div>
          <div className="style4-row3" style={color && { color }}>
            {title}
          </div>
          <div className="style4-row4-text">{description}</div>
        </div>
      ) : null}

      {style === "style5" ? (
        <div className="style5-wrapper">
          <div className="style5-row1">{heading}</div>
          <div className="style5-row2">
            {badgeTextList.map((item, index) => {
              return (
                <span key={index} className="style5-text-genre">
                  {item?.badgeName}
                </span>
              );
            })}
          </div>
          <div className="style5-row3" style={color && { color }}>
            {title}
          </div>
          <div className="style5-row4-text">{description}</div>
          <div className="style2-row3">
            <span className="style2-badge-icon-watch"> {badgeIconOne}</span>
          </div>
        </div>
      ) : null}
      {style === "style6" ? (
        <div className="style6-wrapper">
          <div className="style6-row1"> Duration: 2.30h | English, Hindi</div>
          <div className="style6-row2">
            <RatingComponent style={`view-only`} viewOnlyRating={rating} />
            <span className="style6-text-genre">{textGenre}</span>
          </div>
          <div className="style6-row3" style={color && { color }}>
            {title}
          </div>
          <div className="style6-row3-text">{description}</div>
          <div className="style6-row4">
            <span className="style6-cast-text">Cast</span>
            <span className="cast-wrapper">
              {renderCastCircles(0, 4)}
              {castList.length > 4 ? (
                <span className="cast-circle-count">
                  +{castList.length - 4}
                  <span class="tooltiptext">
                    {renderCastCircles(4, castList.length)}
                  </span>
                </span>
              ) : null}
            </span>
          </div>
          <div className="style6-row5">
            <span className="badge-icon-watchlist">
              <FontAwesomeIcon icon={faCirclePlus} />
              {badgeIconOne}
            </span>
            <span className="badge-icon-share">
              <FontAwesomeIcon icon={faShareNodes} />
              {badgeIconTwo}
            </span>
          </div>
        </div>
      ) : null}
      {style === "style7" ? (
        <div className="style7-wrapper">
          <div className="style7-row1" style={color && { color }}>
            {heading}
          </div>
          <div className="style7-row2">
            <RatingComponent />
            <span className="style7-text-genre">| 2h 21min | 2019</span>
          </div>
          <div className="style7-row3-text">{description}</div>
          <div className="style6-row4">
            <span className="style6-cast-text">Cast</span>
            <span className="cast-wrapper">
              {renderCastCircles(0, 4)}
              {castList.length > 4 ? (
                <span className="cast-circle-count">
                  +{castList.length - 4}
                  <span class="tooltiptext">
                    {renderCastCircles(4, castList.length)}
                  </span>
                </span>
              ) : null}
            </span>
          </div>
          <div className="style7-row4-genre">
            <span className="style7-cast-genre">Genre</span>
            <span>
              <span>{textGenre}</span>
            </span>
          </div>
          <div className="style7-row4-language">
            <span className="style7-cast-language">Language</span>
            <span>
              <span>{language}</span>
            </span>
          </div>
          <div className="style7-row5">
            <span className="badge-icon-play">
              <FontAwesomeIcon icon={faCirclePlay} />
              Play
            </span>
            <span className="badge-icon-watchlist">
              <FontAwesomeIcon icon={faCirclePlus} />
              Watchlist
            </span>
            <span className="badge-icon-share">
              <FontAwesomeIcon icon={faShareNodes} />
              Share
            </span>
          </div>
        </div>
      ) : null}

      {style === "style8" ? (
        <div className="style5-wrapper">
          <div className="style8-live-tag"> {tag}</div>
          <div className="style5-row1" style={color && { color }}>
            {title}
          </div>
          <div className="style5-row2">
            {badgeTextList.map((item, index) => {
              return (
                <span key={index} className="style5-text-genre">
                  {item?.badgeName}
                </span>
              );
            })}
          </div>
          <div className="style5-row4-text">{description}</div>
          <span className="badge-icon-watchlist-green">
            <FontAwesomeIcon icon={faCaretRight} />
            {badgeIconOne}
          </span>
        </div>
      ) : null}
      {style === "style9" ? (
        <div className="style9-wrapper">
          <div className="style9-row1" style={color && { color }}>
            UEFA <b style={{ color: "gold" }}>FOOTBALL</b> LEAGUE
          </div>
          <div>
            <span className="badge-icon-watch">
              <FontAwesomeIcon icon={faCaretRight} />
              {badgeIconOne}
            </span>
          </div>
        </div>
      ) : null}

      {style === "style10" ? (
        <div className="style12-wrapper">
          <div className="style7-row1" style={color && { color }}>
            {heading}
          </div>
          <p style={color && { color }}>{textGenre}</p>
          <div className="style12-row2">
            <RatingComponent style={`view-only`} viewOnlyRating={rating} />
            <span className="style7-text-genre" style={color && { color }}>
              | {time}
            </span>
          </div>
          <div className="style7-row3-text" style={color && { color }}>
            {description}
          </div>
          <div className="style6-row4">
            <span className="style6-cast-text" style={color && { color }}>
              Cast
            </span>
            <span className="cast-wrapper">
              {renderCastCircles(0, 4)}
              {castList.length > 4 ? (
                <span className="cast-circle-count">
                  +{castList.length - 4}
                  <span class="tooltiptext">
                    {renderCastCircles(4, castList.length)}
                  </span>
                </span>
              ) : null}
            </span>
          </div>

          <div className="style7-row5">
            <span className="badge-icon-play">
              <Button fill={"filled"} type={"blunt"} label="WATCH" />
            </span>
            <span className="badge-icon-watchlist">
              <Button
                fill={"outlined"}
                type={"blunt"}
                color={"#ffffff"}
                icon={false}
                label="ADD TO WISHLIST"
              />
            </span>
          </div>
        </div>
      ) : null}

      {style === "style11" ? (
        <div className="detail-card-section style13-wrapper">
          <h3 className="title" style={color && { color }}>
            {title}
          </h3>
          <div className="sub-title-section" style={color && { color }}>
            {textGenre && (
              <span
                style={{ borderColor: color }}
                className="sub-title-heading"
              >
                {textGenre}
              </span>
            )}
            {duration && (
              <span style={{ borderColor: color }} className="duration">
                {duration}
              </span>
            )}
            {time && (
              <span style={{ borderColor: color }} className="time">
                {time}
              </span>
            )}
          </div>
          {description && (
            <p className="description" style={color && { color }}>
              {description}
            </p>
          )}
          <div className="information">
            <ul>
              {director && (
                <li style={color && { color }}>
                  <span>Director</span> {director}
                </li>
              )}
              {language && (
                <li style={color && { color }}>
                  <span>Language</span> {language}
                </li>
              )}
            </ul>
          </div>
        </div>
      ) : null}
      {style === "style12" ? (
        <div className="detail-card-section style13-wrapper">
          <h3 className="title" style={color && { color }}>
            {title}
          </h3>
          {description && (
            <p className="description" style={color && { color }}>
              {description}
            </p>
          )}
        </div>
      ) : null}

      {style === "style13" ? (
        <div className="style11-wrapper">
          <h3 style={color && { color }}>{title}</h3>
          <p style={color && { color }}>{textGenre}</p>
          <Button
            type={"sharp"}
            fill={"filled"}
            label={buttonText}
            icon={false}
          />
        </div>
      ) : null}
    </div>
  );
};

TextContent.propTypes = {
  style: PropTypes.oneOf([
    "style1",
    "style2",
    "style3",
    "style4",
    "style5",
    "style6",
    "style7",
    "style8",
    "style9",
    "style10",
    "style11",
    "style12",
    "style13",
  ]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  rating: PropTypes.number,
  textGenre: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  badgeTextList: PropTypes.array,
  language: PropTypes.string,
  duration: PropTypes.string,
  time: PropTypes.string,
  buttonText: PropTypes.string,
  director: PropTypes.string,
  badgeIconTwo: PropTypes.string,
  badgeIconOne: PropTypes.string,
  tag: PropTypes.string,
  castList: PropTypes.array,
  dataSource: PropTypes.array,
};
TextContent.defaultProps = {
  rating: 8,
  textGenre: "Action, Adventure, Fantasy",
  title: "Planet Of The Apes",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  heading: "Scandal! Catchup",
  tag: "LIVE",
  badgeTextList: [
    {
      id: "1",
      badgeName: "2019",
    },
    {
      id: "2",
      badgeName: "English",
    },
    {
      id: "3",
      badgeName: "Drama",
    },
    {
      id: "4",
      badgeName: "120",
    },
  ],
  language: "English, Hindi",
  duration: "2Hr 30M",
  time: "2021",
  buttonText: "Watch",
  director: "John Lennon",
  castList: [
    {
      id: "1",
      image: dummyImg,
    },
    {
      id: "2",
      image: dummyImg,
    },
    {
      id: "3",
      image: dummyImg,
    },
    {
      id: "4",
      image: dummyImg,
    },
    {
      id: "5",
      image: dummyImg,
    },
  ],
  badgeIconTwo: "WATCH",
  badgeIconOne: "ADD LIST",
};
