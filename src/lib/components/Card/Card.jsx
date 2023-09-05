import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./card.css";

export const Card = ({style, type, size, pasteImageURL, ...props}) => {
  const [imgPath, setImgPath] = useState("");
  useEffect(() => {
    if (pasteImageURL) {
      setImgPath(pasteImageURL);
    }
  }, [pasteImageURL]);

  const getImageUrl = () => {
    if (style === "landscape") {
      return "images/CardImg.png";
    } else if (style === "portrait") {
      return "images/card-portrait.png";
    } else if (style === "channel") {
      return "images/square-card.png";
    } else if (style === "category") {
      return "images/category-card.png";
    } else {
      return imgPath;
    }
  };

  return (
    <div className={`card-container ${size} ${type} ${style}`}>
      <div className="img-container">
        <img
          title="image"
          className={`card`}
          alt="img"
          src={imgPath || getImageUrl()}
          {...props}
        />
      </div>
    </div>
  );
};

Card.propTypes = {
  style: PropTypes.oneOf(["landscape", "portrait", "channel", "category"]),
  type: PropTypes.oneOf(["blunt", "sharp", "rounded"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  pasteImageURL: PropTypes.string,
};

Card.defaultProps = {
  style: "landscape",
  type: "sharp",
  size: "medium",
};
