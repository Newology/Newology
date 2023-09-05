import React from "react";
import PropTypes from "prop-types";
import {ArrowIcon} from "./buttonsvg";
import "./button.css";

export const Button = ({
  style,
  buttonType,
  size,
  type,
  label,
  icon,
  onClick,
  fullWidth,
  backgroundColor,
  borderColor,
  textColor,
  iconColor,
  ...props
}) => {

  return (
    <button
      type="button"
      placeholder="Button"
      className={[
        "button-comp",
        `button--${size}`,
        `button--${type}`,
        `button--${buttonType}`,
        `button--${fullWidth ? "full-width" : "auto"}`,
      ].join(" ")}
      {...props}
      onClick={onClick}
      style={{backgroundColor: backgroundColor, borderColor: borderColor}}
    >
      <span
        className={`${icon ? "icon-label" : "icon-without-label"}`}
        style={{color: textColor || "#ffff"}}
      >
        {icon ? (
          <ArrowIcon width="18px" height="18px" color={iconColor} />
        ) : null}
        {buttonType === "action-button" && label ? label : null}
      </span>
    </button>
  );
};

Button.propTypes = {
  label: PropTypes.string,
  buttonType: PropTypes.oneOf(["action-button", "icon-button"]),
  icon: PropTypes.bool,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  type: PropTypes.oneOf(["blunt", "sharp", "rounded"]),
  fullWidth: PropTypes.bool,
  onClick: PropTypes.func,
  borderColor: PropTypes.string,
  backgroundColor: PropTypes.string,
  iconColor: PropTypes.string,
  textColor: PropTypes.string,
};

Button.defaultProps = {
  size: "medium",
  buttonType: "action-button",
  label: "button",
  type: "rounded",
  icon: true,
  iconColor: "#ffff",
};
