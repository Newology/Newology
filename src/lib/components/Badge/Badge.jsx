import React from "react";
import PropTypes from "prop-types";
import "./badge.css";
import {BadgeIcon} from "./BadgeIconsvg";

export const Badge = ({
  style,
  size,
  type,
  fill,
  label,
  icon,
  backgroundColor,
  textColor,
  iconColor,
  ...props
}) => {
  return (
    <>
      <span
        type="badge"
        className={["badge", `badge--${size}`, `badge--${type}`].join(" ")}
        {...props}
        style={{backgroundColor: backgroundColor}}
      >
        {icon ? (
          <span className="badge-icon-label">
            <BadgeIcon
              className={"badgeIcon"}
              width="18px"
              height="18px"
              color={iconColor}
            />
            <span style={{color: textColor || "#ffff"}}> {label} </span>
          </span>
        ) : (
          <span class="badge-icon-without-label">
            <span style={{color: textColor || "#ffff"}}> {label}</span>
          </span>
        )}
      </span>
    </>
  );
};

Badge.propTypes = {
  label: PropTypes.string,
  type: PropTypes.oneOf(["sharp", "rounded"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
  icon: PropTypes.bool,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  iconColor: PropTypes.string, // specialNotificationIcon: PropTypes.bool,
};

Badge.defaultProps = {
  label: "badge",
  size: "medium",
  type: "rounded",
  icon: false, // specialNotificationIcon:false,
};
