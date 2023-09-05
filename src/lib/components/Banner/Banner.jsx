import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import defaultimg from "../../images/banner-img.png";
import "./banner.css";

export const Banner = ({style, size, pasteImageURL, ...props}) => {
  const [imgPath, setImgPath] = useState("");
  useEffect(() => {
    if (pasteImageURL) {
      setImgPath(pasteImageURL);
    } else {
      setImgPath(defaultimg);
    }
  }, [pasteImageURL]);
  return (
    <div className={`banner-img ban--${size} ban--${style}`}>
      <img
        title="Banner"
        alt="banner-img"
        src={imgPath || defaultimg}
        {...props}
      />
    </div>
  );
};

Banner.propTypes = {
  style: PropTypes.oneOf(["rounded-banner", "sharp-banner"]),
  size: PropTypes.oneOf(["small", "medium", "large", "full-width"]),
  pasteImageURL: PropTypes.string,
};

Banner.defaultProps = {
  style: "sharp-banner",
  size: "medium",
};
