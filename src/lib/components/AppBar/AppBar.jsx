import React from "react";
import {MdOutlineSort} from "react-icons/md";
import bellIcon from "../../images/alerts_icon.svg";
import profileIcon from "../../images/profile_icon.svg";
import searchIcon from "../../images/search_icon.svg";
import menuDefault from "../../images/menuDefault.svg";
import logoIcon from "../../images/logo.svg";
import micIcon from "../../images/Mic.svg";
import loginImg from "../../images/Login_null.svg";
import logindefault from "../../images/logoAppBar.svg";
import searchdefault from "../../images/SearchIcon.svg";
import profiledefault from "../../images/profileDefault.png";
import PropTypes from "prop-types";
import "./appbar.css";

export const AppBar = ({
  MenuIcon,
  className,
  Search,
  logoImg,
  LogoIcon,
  profileImg,
  username,
  backgroundColor,
  color,
  textColor,
  appBarType,
  Notification,
  ProfileIcon,
  Mic,
  AppOptions,
  ...props
}) => {
  return (
    <>
      <div
        title="image"
        className={`appBar-wrapper ${className} ${appBarType}`}
        alt="img"
        {...props}
      >
        {appBarType === "appbarV1" ? (
          <div
            className="appbar-wrapperdefault"
            style={{backgroundColor: backgroundColor}}
          >
            <span className="appbar-leftdefault">
              <span
                className={`${MenuIcon ? "menuicon" : "menu-without-icon"}`}
              >
                {MenuIcon ? <img src={menuDefault} /> : null}
              </span>
              <span className={`${LogoIcon ? "logo" : "menu-without-icon"}`}>
                <img src={logoImg || logindefault} width={28} height={28} />
              </span>
            </span>

            <span className="appbar-rightdefault">
              <span
                className={`${
                  AppOptions ? "app-options" : "menu-without-icon"
                }`}
              >
                <span
                  className={`${
                    Search ? "searchicon-default" : "search-without-icon"
                  }`}
                >
                  {Search ? (
                    <img src={searchdefault} width="40" height="40" />
                  ) : null}
                </span>
                <span
                  className={`${
                    ProfileIcon ? "profile-default" : "search-without-icon"
                  }`}
                >
                  {ProfileIcon ? (
                    <img
                      src={profileImg || profiledefault}
                      width={26}
                      height={26}
                    />
                  ) : null}
                </span>
              </span>
            </span>
          </div>
        ) : null}
        {appBarType === "appbarV2" ? (
          <div
            className="appbar-wrapper"
            style={{backgroundColor: backgroundColor}}
          >
            <span className="appbar-left" style={{color: textColor || "#ffff"}}>
              <span
                className={`${MenuIcon ? "menuicon" : "menu-without-icon"}`}
              >
                {MenuIcon ? <MdOutlineSort /> : null}
              </span>

              <span className={`${LogoIcon ? "logo" : "menu-without-icon"}`}>
                <img src={logoImg || logoIcon} width={28} height={28} />
              </span>
              <span
                className={`${
                  AppOptions ? "app-options" : "menu-without-icon"
                }`}
                style={{color: textColor || "#ffff"}}
              >
                <span>Home</span>
                <span>Movies</span>
                <span>Series</span>
                <span>Recently added</span>
                <span>LIVE</span>
              </span>
            </span>

            <span className="appbar-right">
              <span
                className={`${
                  Search ? "searchicon-two" : "search-without-icon"
                }`}
              >
                {Search ? (
                  <img src={searchIcon} width={26} height={26} />
                ) : null}
              </span>
              <span
                className={`${
                  Notification ? "searchicon-two" : "search-without-icon"
                }`}
              >
                {Notification ? (
                  <img src={bellIcon} width={26} height={26} />
                ) : null}
              </span>
              <span
                className={`${
                  ProfileIcon ? "searchicon-two" : "search-without-icon"
                }`}
              >
                {ProfileIcon ? (
                  <img src={profileIcon} width={26} height={26} />
                ) : null}
              </span>
            </span>
          </div>
        ) : null}
        {appBarType === "appbarV3" ? (
          <div
            className="appbar-wrapper"
            style={{backgroundColor: backgroundColor}}
          >
            <span className="appbar-left">
              <span
                className={`${MenuIcon ? "menuicon" : "menu-without-icon"}`}
              >
                {MenuIcon ? <MdOutlineSort /> : null}
              </span>

              <span className={`${LogoIcon ? "logo" : "menu-without-icon"}`}>
                <img src={logoImg || logoIcon} width={28} height={28} />
              </span>
            </span>

            <span className="appbar-right">
              <span
                className={`${
                  AppOptions ? "app-options" : "menu-without-icon"
                }`}
              >
                <span
                  className={`${
                    Mic ? "searchicon-two" : "search-without-icon"
                  }`}
                >
                  {Mic ? <img src={micIcon} width={26} height={26} /> : null}
                </span>
                <span
                  className={`${
                    Search ? "searchicon-two" : "search-without-icon"
                  }`}
                >
                  {Search ? (
                    <img src={searchIcon} width={26} height={26} />
                  ) : null}
                </span>
              </span>
            </span>
          </div>
        ) : null}
        {appBarType === "appbarV4" ? (
          <div
            className="appbar-wrapper"
            style={{backgroundColor: backgroundColor}}
          >
            <span className="appbar-left">
              <span
                className={`${MenuIcon ? "menuicon" : "menu-without-icon"}`}
              >
                {MenuIcon ? <MdOutlineSort /> : null}
              </span>

              <span className={`${LogoIcon ? "logo" : "menu-without-icon"}`}>
                <img src={logoImg || logoIcon} width={28} height={28} />
              </span>
            </span>
            <span className="appbar-right">
              <span
                className={`${Search ? "search-input" : "search-without-icon"}`}
              >
                <span className="search-inner-icon" style={{color: textColor || "#ffff"}}>
                  {Search ? (
                    <img src={searchIcon} width={26} height={26} />
                  ) : null}
                </span>
                <input
                  type="text"
                  placeholder="Search, Movies, Show, Series"
                  style={{paddingLeft: "40px"}}
                ></input>
              </span>
              <span
                className={`${
                  AppOptions ? "app-options" : "menu-without-icon"
                }`}
                style={{color: textColor || "#ffff"}}
              >
                <span>Home</span>
                <span>Msky Live</span>
                <span>Msky Video</span>
                <span>HBO Go</span>
                <span>Flash Channel</span>
                <span>More</span>
              </span>
              {ProfileIcon ? (
                <span className="profile-section">
                  <span className="profile-logo">
                    <img src={profileImg || loginImg} />
                  </span>
                  <span
                    className="profile-name"
                    style={{color: textColor || "#ffff"}}
                  >
                    {" "}
                    {username || "testing"}{" "}
                  </span>
                </span>
              ) : null}
            </span>
          </div>
        ) : null}
        {appBarType === "appbarV5" ? (
          <div
            className="appbar-wrapper"
            style={{backgroundColor: backgroundColor}}
          >
            <span className="appbar-left">
              <span
                className={`${MenuIcon ? "menuicon" : "menu-without-icon"}`}
              >
                {MenuIcon ? <MdOutlineSort /> : null}
              </span>

              <span className={`${LogoIcon ? "logo" : "menu-without-icon"}`}>
                <img src={logoImg || logoIcon} width={28} height={28} />
              </span>
            </span>

            <span
              className="appbar-right"
              style={{color: textColor || "#ffff"}}
            >
              <span
                className={`${
                  AppOptions ? "app-options" : "menu-without-icon"
                }`}
              >
                <span
                  className={`${
                    Search ? "searchicon-default" : "search-without-icon"
                  }`}
                >
                  {Search ? (
                    <img src={searchdefault} width="40" height="40" />
                  ) : null}
                </span>
                <span
                  className={`${
                    AppOptions ? "app-options" : "menu-without-icon"
                  }`}
                  style={{color: textColor || "#ffff"}}
                >
                  <span>Home</span>
                  <span>Movies</span>
                  <span>Series</span>
                  <span>Recently added</span>
                </span>
                <span
                  className={`${
                    Notification ? "searchicon-two" : "search-without-icon"
                  }`}
                >
                  {Notification ? (
                    <img src={bellIcon} width={26} height={26} />
                  ) : null}
                </span>
                {ProfileIcon ? (
                  <span className="profile-section-style5">
                    <span className="profile-logo">
                      <img src={profileImg || loginImg} />
                    </span>
                  </span>
                ) : null}
              </span>
            </span>
          </div>
        ) : null}

        {appBarType === "appbarV6" ? (
          <div
            className="appbar-wrapper"
            style={{backgroundColor: backgroundColor, color: textColor}}
          >
            <span className="appbar-left">
              <span
                className={`${MenuIcon ? "menuicon" : "menu-without-icon"}`}
              >
                {MenuIcon ? <MdOutlineSort /> : null}
              </span>

              <span className={`${LogoIcon ? "logo" : "menu-without-icon"}`}>
                <img src={logoImg || logoIcon} width={28} height={28} />
              </span>
            </span>
            <span className="appbar-right">
              <span
                className={`${
                  AppOptions ? "app-options" : "menu-without-icon"
                }`}
              >
                <span
                  className={`${Search ? "searchicon" : "search-without-icon"}`}
                >
                  {Search ? (
                    <img src={searchIcon} width={26} height={26} />
                  ) : null}
                </span>
                {ProfileIcon ? (
                  <span className="profile-section">
                    <span className="profile-logo">
                      <img src={profileImg || loginImg} />
                    </span>
                    <span
                      className="profile-name"
                      style={{color: textColor || "#ffff"}}
                    >
                      {" "}
                      {username || "testing"}{" "}
                    </span>
                  </span>
                ) : null}
              </span>
            </span>
          </div>
        ) : null}
      </div>
    </>
  );
};

AppBar.propTypes = {
  appBarType: PropTypes.oneOf([
    "appbarV1",
    "appbarV2",
    "appbarV3",
    "appbarV4",
    "appbarV5",
    "appbarV6",
  ]),
  MenuIcon: PropTypes.bool,
  Search: PropTypes.bool,
  username: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  Notification: PropTypes.bool,
  ProfileIcon: PropTypes.bool,
  Mic: PropTypes.bool,
  className: PropTypes.string,
  LogoIcon: PropTypes.bool,
  AppOptions: PropTypes.bool,
};

AppBar.defaultProps = {
  appBarType: "appbarV1",
  MenuIcon: true,
  Search: true,
  username: "Profile",
  backgroundColor: "#000000",
  textColor: "#ffff",
  Notification: true,
  Mic: true,
  LogoIcon: true,
  AppOptions: true,
  ProfileIcon: true,
};
