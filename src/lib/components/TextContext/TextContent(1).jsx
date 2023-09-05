import React, {useState} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faCaretRight,
  faShareNodes,
  faCirclePlus,
  faCirclePlay,
} from "@fortawesome/free-solid-svg-icons";
import dummyImg from "../../images/dummyImg.png";
import "./textcontent.css";
import {RatingComponent} from "../RatingComponent/RatingComponent";

const data = {
  id: "1",
  rating: 8,
  textGenre: "Action, Adventure, Fantasy",
  title: "Planet Of The Apes",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
  heading: "Scandal! Catchup",
  badgeText: "2019",
  badgeText: "English",
  badgeText: "Drama",
  badgeText: "120",
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
};

export const TextContent = ({
  style,
  size,
  dataSource,
  color,
  buttonText,
  title,
  textGenre,
  ...props
}) => {
  const [detailed, setDetailed] = useState(dataSource || data);

  return (
    <div title="image" className={`text-container ${style} ${size}`} {...props}>
      {style === "style1" ? (
        <div className="style1-wrapper">
          <div className="style1-row1">
            {/* <FaStar /> 
            <span className="rating-number">{detailed?.rating}</span> */}
            <RatingComponent style={`view-only`} viewOnlyRating={8} />
            <span className="text-genre" style={color && {color}}>
              {detailed?.textGenre}
            </span>
          </div>
          <div className="style1-row2">{detailed?.title}</div>
          <div className="style1-row3">
            <span className="badge-icon-watch">
              <FontAwesomeIcon icon={faCaretRight} />
              WATCH
            </span>
            <span className="badge-icon-addlist">
              <FontAwesomeIcon icon={faPlus} />
              ADD LIST
            </span>
          </div>
        </div>
      ) : null}

      {style === "style2" ? (
        <div className="style2-wrapper">
          <div className="style2-row1" style={color && {color}}>
            {detailed?.title}
          </div>
          <div className="style2-row2">
            <span className="style2-text-genre" style={color && {color}}>
              {detailed?.textGenre}
            </span>
            <RatingComponent />
          </div>
          <div className="style2-row3">
            <span className="style2-badge-icon-watch">WATCH NOW</span>
          </div>
        </div>
      ) : null}

      {style === "style3" ? (
        <div className="style3-wrapper">
          <div className="style3-row1" style={color && {color}}>
            {detailed?.title}
          </div>
          <div className="style3-row2">
            <RatingComponent />
            <span className="style3-text-genre">{detailed?.textGenre}</span>
          </div>
          <div className="style3-row3-text">{detailed?.description}</div>
          <div className="style3-row4">
            <span className="badge-icon-watch">
              <FontAwesomeIcon icon={faCaretRight} />
              WATCH
            </span>
            <span className="badge-icon-addlist">
              <FontAwesomeIcon icon={faPlus} />
              ADD LIST
            </span>
          </div>
        </div>
      ) : null}

      {style === "style4" ? (
        <div className="style4-wrapper">
          <div className="style4-row1" style={color && {color}}>
            {detailed?.heading}
          </div>
          <div className="style4-row2">
            <span className="style4-text-genre">{detailed?.badgeText}</span>
            {/* <span className="style4-text-genre">{item?.textGenre2}</span>
            <span className="style4-text-genre">{item?.textGenre3}</span>
            <span className="style4-text-genre">{item?.textGenre4}</span> */}
            <span className="style4-text-genre">18+</span>
          </div>
          <div className="style4-row3" style={color && {color}}>
            {detailed?.title}
          </div>
          <div className="style4-row4-text">{detailed?.description}</div>
        </div>
      ) : null}

      {style === "style5" ? (
        <div className="style5-wrapper">
          <div className="style5-row1">{detailed?.heading}</div>
          <div className="style5-row2">
            {/* <span className="style5-text-genre">{item?.badgeText}</span> */}
            <span className="style5-text-genre">{detailed?.badgeText}</span>
            {/* <span className="style5-text-genre">Drama</span>
            <span className="style5-text-genre">120 Eps</span>
            <span className="style5-text-genre">18+</span> */}
          </div>
          <div className="style5-row3" style={color && {color}}>
            {detailed?.title}
          </div>
          <div className="style5-row4-text">{detailed?.description}</div>
          <div className="style2-row3">
            <span className="style2-badge-icon-watch">View Details</span>
          </div>
        </div>
      ) : null}

      {style === "style6" ? (
        <div className="style6-wrapper">
          <div className="style6-row1"> Duration: 2.30h | English, Hindi</div>
          <div className="style6-row2">
            <RatingComponent style={`view-only`} viewOnlyRating={7.5} />
            <span className="style6-text-genre">{detailed?.textGenre}</span>
          </div>
          <div className="style6-row3" style={color && {color}}>
            {detailed?.title}
          </div>
          <div className="style6-row3-text">{detailed?.description}</div>
          <div className="style6-row4">
            <span className="style6-cast-text">Cast</span>
            <span className="cast-wrapper">
              {detailed?.castList.slice(0, 4).map((item, index) => {
                return (
                  <span key={index} className="cast-circle">
                    <img src={item?.image} />
                  </span>
                );
              })}
              {detailed?.castList.length > 4 ? (
                <span className="cast-circle-count">
                  +{detailed?.castList.length - 4}
                  <span class="tooltiptext">
                    {detailed?.castList
                      .slice(4, detailed?.castList.length)
                      .map((item, index) => {
                        return (
                          <span key={index} className="cast-circle">
                            <img src={item?.image} />
                          </span>
                        );
                      })}
                  </span>
                </span>
              ) : null}
            </span>
          </div>
          <div className="style6-row5">
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

      {style === "style7" ? (
        <div className="style7-wrapper">
          <div className="style7-row1" style={color && {color}}>
            {detailed?.heading}
          </div>
          <div className="style7-row2">
            <RatingComponent />
            <span className="style7-text-genre">| 2h 21min | 2019</span>
          </div>
          <div className="style7-row3-text">{detailed?.description}</div>
          <div className="style6-row4">
            <span className="style6-cast-text">Cast</span>
            <span className="cast-wrapper">
              {detailed?.castList.slice(0, 4).map((item, index) => {
                return (
                  <span key={index} className="cast-circle">
                    <img src={item?.image} />
                  </span>
                );
              })}
              {detailed?.castList.length > 4 ? (
                <span className="cast-circle-count">
                  +{detailed?.castList.length - 4}
                  <span class="tooltiptext">
                    {detailed?.castList
                      .slice(4, detailed?.castList.length)
                      .map((item, index) => {
                        return (
                          <span key={index} className="cast-circle">
                            <img src={item?.image} />
                          </span>
                        );
                      })}
                  </span>
                </span>
              ) : null}
            </span>
          </div>
          <div className="style7-row4-genre">
            {" "}
            <span className="style7-cast-genre">Genre</span>
            <span>
              <span>{detailed?.textGenre}</span>
            </span>
          </div>
          <div className="style7-row4-language">
            {" "}
            <span className="style7-cast-language">Language</span>
            <span>
              <span>{detailed?.language}</span>
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
          <div className="style8-live-tag"> LIVE</div>
          <div className="style5-row1" style={color && {color}}>
            {detailed?.title}
          </div>
          <div className="style5-row2">
            <span className="style5-text-genre">{detailed?.badgeText}</span>
          </div>
          <div className="style5-row4-text">{detailed?.description}</div>
          <span className="badge-icon-watchlist-green">
            <FontAwesomeIcon icon={faCaretRight} />
            WATCH NOW
          </span>
        </div>
      ) : null}

      {style === "style9" ? (
        <div className="style9-wrapper">
          <div className="style9-row1" style={color && {color}}>
            UEFA <b style={{color: "gold"}}>FOOTBALL</b> LEAGUE
          </div>
          <div>
            <span className="badge-icon-watch">
              <FontAwesomeIcon icon={faCaretRight} />
              WATCH NOW
            </span>
          </div>
        </div>
      ) : null}

      {/* {style === "style10" ? (
        <div className="style10-wrapper">
          <div className="style1-row2" style={color && {color}}>
            {detailed?.title}
          </div>
          <span className="style10-text-genre">{detailed?.textGenre}</span>
        </div>
      ) : null} */}

      {/* {style === "style11" ? (
        <div className="style11-wrapper">
          <h3 style={color && {color}}>{detailed?.title}</h3>
          <p style={color && {color}}>{detailed?.textGenre}</p> */}
      {/* <Button type={"sharp"} fill={"filled"} label={buttonText} /> */}
      {/* </div>
      ) : null} */}

      {style === "style10" ? (
        <div className="style12-wrapper">
          <div className="style7-row1" style={color && {color}}>
            {detailed?.heading}
          </div>
          <p style={color && {color}}>{detailed?.textGenre}</p>
          <div className="style12-row2">
            <RatingComponent style={`view-only`} viewOnlyRating={8} />
            <span className="style7-text-genre" style={color && {color}}>
              | {detailed?.time}
            </span>
          </div>
          <div className="style7-row3-text" style={color && {color}}>
            {detailed?.description}
          </div>
          <div className="style6-row4">
            <span className="style6-cast-text" style={color && {color}}>
              Cast
            </span>
            <span className="cast-wrapper">
              {detailed?.castList.slice(0, 4).map((item, index) => {
                return (
                  <span className="cast-circle">
                    <img src={item?.image} />
                  </span>
                );
              })}
              {detailed?.castList.length > 4 ? (
                <span className="cast-circle-count">
                  +{detailed?.castList.length - 4}
                  <span class="tooltiptext">
                    {detailed?.castList
                      .slice(4, detailed?.castList.length)
                      .map((item, index) => {
                        return (
                          <span className="cast-circle">
                            <img src={item?.image} />
                          </span>
                        );
                      })}
                  </span>
                </span>
              ) : null}
            </span>
          </div>

          {/* <div className="style7-row5">
            <span className="badge-icon-play">
              <Button
                fill={"filled"}
                type={"blunt"}
                icon={true}
                label="WATCH"
              />
            </span>
            <span className="badge-icon-watchlist">
              <Button
                fill={"outlined"}
                type={"blunt"}
                color={"#ffffff"}
                label="ADD TO WISHLIST"
              />
            </span>
          </div> */}
        </div>
      ) : null}

      {style === "style11" ? (
        <div className="detail-card-section style13-wrapper">
          <h3 className="title" style={color && {color}}>
            {detailed?.title}
          </h3>
          <div className="sub-title-section" style={color && {color}}>
            {detailed?.textGenre && (
              <span style={{borderColor: color}} className="sub-title-heading">
                {detailed?.textGenre}
              </span>
            )}{" "}
            {detailed?.duration && (
              <span style={{borderColor: color}} className="duration">
                {detailed?.duration}
              </span>
            )}
            {detailed?.time && (
              <span style={{borderColor: color}} className="time">
                {detailed.time}
              </span>
            )}
          </div>
          {detailed?.description && (
            <p className="description" style={color && {color}}>
              {detailed?.description}
            </p>
          )}
          <div className="information">
            <ul>
              {detailed?.director && (
                <li style={color && {color}}>
                  <span>Director</span> {detailed?.director}
                </li>
              )}
              {detailed?.language && (
                <li style={color && {color}}>
                  <span>Language</span> {detailed?.language}
                </li>
              )}
            </ul>
          </div>

          {/* <div className="button-section">
            <Button
              backgroundColor="#fff"
              borderColor="#fff"
              textColor={"#000000"}
              type={"blunt"}
              icon={true}
              label="WATCH"
            />
            <Button
              backgroundColor="transparent"
              borderColor="#fff"
              type={"blunt"}
              textColor={"#ffffff"}
              label="ADD TO WISHLIST"
            />
          </div> */}
        </div>
      ) : null}

      {style === "style12" ? (
        <div className="detail-card-section style13-wrapper">
          <h3 className="title" style={color && {color}}>
            {detailed?.title}
          </h3>
          {detailed?.description && (
            <p className="description" style={color && {color}}>
              {detailed?.description}
            </p>
          )}
          {/* <div className="button-section">
          <Button
              backgroundColor="transparent"
              borderColor="#fff"
              type={"sharp"}
              color={"#ffffff"}
              label="ADD TO WISHLIST"
            />
            <Button
              backgroundColor="transparent"
              borderColor="#fff"
              type={"sharp"}
              color={"#ffffff"}
              label="SHARE"
            />
          </div> */}
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
  ]),
  size: PropTypes.oneOf(["large", "medium", "small"]),
  rating: PropTypes.number,
  textGenre: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string,
  heading: PropTypes.string,
  badgeText: PropTypes.string,
  language: PropTypes.string,
  duration: PropTypes.string,
  time: PropTypes.string,
  buttonText: PropTypes.string,
  director: PropTypes.string,
  castList: PropTypes.array,
  dataSource: PropTypes.array,
};
