import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import defaultimg from "../../images/default.svg";
import "./avatar.css";


export const Avatar = ({style, size, pasteImageURL, ...props}) => {
  const [imgPath, setImgPath] = useState("");
  useEffect(() => {
    if (pasteImageURL) {
      setImgPath(pasteImageURL);
    } else {
      setImgPath(defaultimg);
    }
  }, [pasteImageURL]);
  return (
    <div className={`avatar avatar--${size} avatar--${style}`}>
      <img
        alt="avatar-img"
        src={imgPath || defaultimg}
        {...props}
      />
    </div>
  );
};

Avatar.propTypes = {
  style: PropTypes.oneOf(["round-avatar", "rounded-avatar", "square-avatar"]),
  size: PropTypes.oneOf(["tiny", "small", "medium", "large"]),
  pasteImageURL: PropTypes.string,
};

Avatar.defaultProps = {
  style: "round-avatar",
  size: "medium",
  displayImage: false,
};
