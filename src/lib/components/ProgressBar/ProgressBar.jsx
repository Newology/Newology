import React from "react";
import PropTypes from "prop-types";
import "./progressBar.css";
export const ProgressBar = ({
  progressPercent,
  reverse,
  titleFontSize,
  displayPercent,
  backgroundColor,
  color,
  label,
  style,
  ...props
}) => {
  return (
    <>
      <div
        className={`general-progress-bar`}
        style={{backgroundColor: backgroundColor}}
      >
        <div className={`${progressPercent >= 100 ? "green" : ""}`}>
          <div
            className={`progress-bar-title`}
            style={{color: color || "#ffff", fontSize: titleFontSize}}
          >
            {label}
          </div>
          <progress value={progressPercent} max="100" />
        </div>
        <div
          className={`${
            displayPercent
              ? " displayPercent-label"
              : " displayPercent-without-label"
          }`}
          style={{color: color || "#ffff"}}
        >
          {displayPercent ? <> {progressPercent}%</> : null}
        </div>
      </div>
    </>
  );
};
ProgressBar.propTypes = {
  style: PropTypes.oneOf(["style1"]),
  titleFontSize: PropTypes.oneOf(["small", "medium", "large"]),
  progressPercent: PropTypes.number,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
  displayPercent: PropTypes.bool,
  label: PropTypes.string,
};
ProgressBar.defaultProps = {
  style: "style1",
  progressPercent: 30,
  titleFontSize: "small",
  backgroundColor: "#00264D",
  color: "#FFFFFF",
  displayPercent: "false",
  label: "The Nun - Witness The Darkest Chapter",
};
