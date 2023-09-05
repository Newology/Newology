import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./image.css";

export const ImageDev = ({
  style,
  borderRadius,
  size,
  src,
  pasteImageURL,
  ...props
}) => {
  const [imgPath, setImgPath] = useState("");
  useEffect(() => {
    if (pasteImageURL) {
      setImgPath(pasteImageURL);
    } else {
      setImgPath(`images/default.svg`);
    }
  }, [pasteImageURL]);

  return (
    <img
      title="image"
      className={`img--${style} img--${size} img--${borderRadius}`}
      alt="img"
      src={imgPath || "images/image-dev.png"}
      {...props}
    />
  );
};

ImageDev.propTypes = {
  style: PropTypes.oneOf(["Landscape", "Portrait", "Square"]),
  borderRadius: PropTypes.oneOf(["sharp", "blunt"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  pasteImageURL: PropTypes.string,
};

ImageDev.defaultProps = {
  style: "Landscape",
  borderRadius: "sharp",
  size: "medium",
};
