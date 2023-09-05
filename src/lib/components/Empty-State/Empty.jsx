import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import "./empty.css";

export const Empty = ({style, borderRadius, size, ...props}) => {
  const [imgPath, setImgPath] = useState("");
  useEffect(() => {
    if (style === "No Notifications") {
      setImgPath(`images/no-notification.svg`);
    } else if (style === "No Data") {
      setImgPath(`images/no-data.svg`);
    } else if (style === "No Video") {
      setImgPath(`images/no-video.svg`);
    }
  }, [imgPath, style, size]);

  return (
    <img
      title="Empty State"
      className={`empty--${size} empty--${style}`}
      alt="img"
      src={imgPath}
      {...props}
    />
  );
};

Empty.propTypes = {
  style: PropTypes.oneOf(["No Notifications", "No Data", "No Video"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Empty.defaultProps = {
  style: "No Notifications",
  size: "medium",
};
