import React, {useEffect, useState} from "react";
import PropTypes from "prop-types";
import logo from "../../images/fav-icon.png";
import searchIcon from "../../images/search_icon.svg";
import homeicon from "../../images/homeicon.svg";
import navbaricon2 from "../../images/navbaricon2.svg";
import navbaricon3 from "../../images/navbaricon3.svg";
import navbaricon4 from "../../images/navbaricon4.svg";
import "./navbar.css";

export const Navbar = ({
  navbarType,
  logoImg,
  dataSource,
  onClick,
  backgroundColor,
  textColor,
  ...props
}) => {
  const [isSideBarOpen, setIsSideBarOpen] = useState(false);

  const [imgPath, setImgPath] = useState("");
  useEffect(() => {
    if (logoImg) {
      setImgPath(logoImg);
    } else {
      setImgPath(logo);
    }
  }, [logoImg]);

  return (
    <div
      title="navbar"
      className={`navbar-${navbarType}`}
      alt="img"
      {...props}
    >
      {navbarType === "vertical-navbar" ? (
        <aside className={`sidebar ${isSideBarOpen ? "sidebar-open" : "sidebar-close"}`} style={{backgroundColor: backgroundColor}}>
          <div className="top-sidebar">
            <a
              href="#"
              className="channel-logo"
              onClick={() => {
                setIsSideBarOpen(!isSideBarOpen);
              }}
            >
              <img src={imgPath || logo}  />
            </a>
          </div>
          <div className="middle-sidebar">
            <ul className="sidebar-list">
              {dataSource?.length
            ? dataSource.map((item, index) => {
                return (
                  <li className="sidebar-list-item active">
                    <a href={item?.path} className="sidebar-link" style={{color: textColor}}>
                      <img src={item?.image} />
                      <div className="hidden-sidebar">{item?.title}</div>
                    </a>
                  </li>
                );
              }):""}
            </ul>
          </div>
        </aside>
      ) : (
        <div
          className="horizontal-wrapper"
          style={{backgroundColor: backgroundColor}}
        >
          <span className="navigation-left">
            <span className="menuicon"></span>

            <span className="channel-logo">
              <img src={imgPath || logo}  />
            </span>
          </span>
          <div className="navigation-middle" >
          {dataSource?.length
            ? dataSource.map((item, index) => {
              return (
                <div className="sidebar-list-item">
                  <a href={item?.path} className="horizontal-sidebar-link" style={{color: textColor}}>
                    <span>{item?.title}</span>
                  </a>
                </div>
              );
            }):""}
          </div>

          <span className="navigation-left">
            <span className="search-icon" onClick={onClick}>
              <img src={searchIcon} />
            </span>
          </span>
        </div>
      )}
    </div>
  );
};

Navbar.propTypes = {
  navbarType: PropTypes.oneOf(["vertical-navbar", "horizontal-navbar"]),
  LogoIcon: PropTypes.string,
  backgroundColor: PropTypes.string,
  textColor: PropTypes.string,
  dataSource:PropTypes.array,
};

Navbar.defaultProps = {
  navbarType: "horizontal-navbar",
  backgroundColor: "#000000",
  textColor: "#ffff",
  dataSource : [
    {
      id: "1",
      title: "Dashboard",
      image: homeicon,
      path: "",
    },
    {
      id: "2",
      title: "Content",
      image: navbaricon2,
      path: "",
    },
    {
      id: "3",
      title: "Playlists",
      image: navbaricon3,
      path: "",
    },
    {
      id: "4",
      title: "Analytics",
      image: navbaricon3,
      path: "",
    },
    {
      id: "5",
      title: "Comments",
      image: navbaricon4,
      path: "",
    },
  ]
};
