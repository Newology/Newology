import React, {useState} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faStar} from "@fortawesome/free-solid-svg-icons";
import {faStar as faStarOutined} from "@fortawesome/free-regular-svg-icons";
import PropTypes from "prop-types";
import "./rating.css";

export const RatingComponent = ({style, viewOnlyRating, ...props}) => {
  const [activeStar, setActiveStar] = useState(-1);
  const totalStars = 5;
  const viewOnlyStars = 1;

  const handleClick = (index) => {
    setActiveStar(index);
  };
  return (
    <>
      {style === "filled" ? (
        <div className="rating-container">
          {Array.from({length: totalStars}).map((_, index) => (
            <div
              className="star-container"
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="filled-icon">
                {index <= activeStar ? <FontAwesomeIcon icon={faStar} /> : null}
              </div>
              <div className="empty-icon">
                {index > activeStar ? (
                  <FontAwesomeIcon icon={faStar} style={{color: "#808080"}} />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {style === "outlined" ? (
        <div className="rating-container">
          {Array.from({length: totalStars}).map((_, index) => (
            <div
              className="star-container"
              key={index}
              onClick={() => handleClick(index)}
            >
              <div className="filled-icon">
                {index <= activeStar ? (
                  <FontAwesomeIcon icon={faStarOutined} />
                ) : null}
              </div>
              <div className="empty-icon">
                {index > activeStar ? (
                  <FontAwesomeIcon
                    icon={faStarOutined}
                    style={{color: "#808080"}}
                  />
                ) : null}
              </div>
            </div>
          ))}
        </div>
      ) : null}
      {style === "view-only" ? (
        <div className="rating-container">
          {Array.from({length: viewOnlyStars}).map((_, index) => (
            <div className="view-only-star-container">
              <div className="filled-icon">
                <FontAwesomeIcon icon={faStar} style={{color: "rgb(254, 180, 0)"}} />
              </div>
              <div>{viewOnlyRating}</div>
            </div>
          ))}
        </div>
      ) : null}
    </>
  );
};

RatingComponent.propTypes = {
  style: PropTypes.oneOf(["filled", "outlined", "view-only"]),
  viewOnlyRating: PropTypes.number,
};
RatingComponent.defaultProps = {
  style: "filled",
  viewOnlyRating: 4.2,
};
