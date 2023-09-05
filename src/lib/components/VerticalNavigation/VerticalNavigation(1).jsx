import React from "react";
import PropTypes from "prop-types";
import home from "../../images/tv_navigation/home.svg";
import "./nav.css";

export const TVVerticalNavigation = (props) => {
  const {title, color, icon, backgroundColor} = props;

  return (
    <>
      <div
        className="vertical-navigation-container"
        style={{backgroundColor: backgroundColor}}
      >
        <div className="vertical-navigation-wrapper">
          <span className="vertical-navigation-icon">
            <img alt="title" src={icon} />
          </span>
          <span className="vertical-navigation-title" style={{color: color}}>
            {title && <h3 className="nav-text-title">{title}</h3>}
          </span>
        </div>
      </div>
    </>
  );
};

TVVerticalNavigation.propTypes = {
  title: PropTypes.string,
  dataSource: PropTypes.array,
  onClick: PropTypes.func,
  icon: PropTypes.string,
  backgroundColor: PropTypes.string,
  color: PropTypes.string,
};

TVVerticalNavigation.defaultProps = {
  id: "1",
  icon: home,
  title: "Home",
  backgroundColor: "transparent",
  color: "#A7A7A7",
};
