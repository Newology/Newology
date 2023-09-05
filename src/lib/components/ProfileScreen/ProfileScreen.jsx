import React, {useState} from "react";
import {AppBar} from "../AppBar/AppBar";
import {Avatar} from "../Avatar/Avatar";
import {AiOutlineMenu} from "react-icons/ai";
import {AiOutlineRight} from "react-icons/ai";
import {useMediaQuery} from "react-responsive";
import {TVVerticalNavigation} from "../VerticalNavigation/VerticalNavigation";
import home from "../../images/tv_navigation/home.svg";
import search from "../../images/tv_navigation/search.svg";
import setting from "../../images/tv_navigation/setting.svg";
import tv from "../../images/tv_navigation/tv.svg";
import profileImage from "../../images/default.svg"

import "./profileScreen.css";

const navData = [
  {
    id: "1",
    title: "Home",
    icon: home,
  },
  {
    id: "2",
    title: "Search",
    icon: search,
  },
  {
    id: "3",
    title: "Live TV",
    icon: tv,
  },
  {
    id: "4",
    title: "Settings",
    icon: setting,
  },
];



const profileData = [
  {
    id: "1",
    name: "Nisha Thakur",
    src: profileImage,
    style:"rounded-avatar"
  },
];

const profiledetailData = [
  {
    id: "1",
    option: "User ID",
    optionDetail: "f9@3453453",
  },
  {
    id: "2",
    option: "Name",
    optionDetail: "Rishabh Thakur",
  },
  {
    id: "3",
    option: "Payment",
    optionDetail: "Debit Card",
  },
  {
    id: "4",
    option: "Plan expiration",
    optionDetail: "08/12/2023",
  },
  {
    id: "5",
    option: "Phone no",
    optionDetail: "9213466834",
  },
  {
    id: "6",
    option: "Purchase Plan",
    optionDetail: "View Plans",
  },
];

export const ProfileScreen = () => {
  const [activeTab, setActiveTab] = useState("MY_ACCOUNT");
  const [showMore, setShowMore] = useState(false);

  const isDesktop = useMediaQuery({
    query: "(min-width: 991.1px)",
  });

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowMore(!showMore);
  };

  return (
    <div className="tv-container">
      <div className="vertical-menu-search-screen">
        {navData?.length
          ? navData.map((item) => (
              <TVVerticalNavigation title={item?.title} icon={item?.icon} />
            ))
          : ""}
      </div>
      <div className="profile-screen-section" alt="img">
      <AppBar appBarType={`appbarV2`} backgroundColor={"#000000"} AppOptions={false} MenuIcon={false}/>
        <div className="profile-screen-content">
          <div className="profile-screen-menu-icon">
            <span onClick={() => setShowMore(!showMore)}>
              <AiOutlineMenu />
            </span>
            Settings
          </div>
          <div
            className={
              isDesktop
                ? `profile-screen-settings-list`
                : `profile-screen-settings-list-res ${showMore ? "open" : "close"}`
            }
          >
            <h3>Settings</h3>
            <p>My Preferences</p>
            <ul>
              <li
                className={activeTab === "LANGUAGES" ? "active-tab" : ""}
                onClick={() => {
                  handleTabChange("LANGUAGES");
                  setShowMore(false);
                }}
              >
                Languages
                <span className="right-arrow"><AiOutlineRight /></span>
              </li>
              <li
                className={activeTab === "MY_ACCOUNT" ? "active-tab" : ""}
                onClick={() => {
                  handleTabChange("MY_ACCOUNT");
                  setShowMore(false);
                }}
              >
                My Account
                <span className="right-arrow"><AiOutlineRight /></span>
              </li>
              <li
                className={activeTab === "HELP" ? "active-tab" : ""}
                onClick={() => {
                  handleTabChange("HELP");
                  setShowMore(false);
                }}
              >
                Help
                <span className="right-arrow"><AiOutlineRight /></span>
              </li>
              <li
                className={activeTab === "LEGAL" ? "active-tab" : ""}
                onClick={() => {
                  handleTabChange("LEGAL");
                  setShowMore(false);
                }}
              >
                Legal
                <span className="right-arrow"><AiOutlineRight /></span>
              </li>
              <li
                className={activeTab === "ABOUT_US" ? "active-tab" : ""}
                onClick={() => handleTabChange("ABOUT_US")}
              >
                About Us
                <span className="right-arrow"><AiOutlineRight /></span>
              </li>
            </ul>
          </div>
          {activeTab === "MY_ACCOUNT" && (
            <div className="profile-screen-detailed-section">
              <div className="profile-screen-detailed-wrapper">
                {profileData?.length
                  ? profileData.map((item) => (
                      <>
                        <span
                          className="profile-screen-detail-card"
                          key={item.id}
                        >
                          <Avatar
                            displayImage={item?.displayImage}
                            pasteImageURL={item?.src}
                            size={"small"}
                            style={"rounded-avatar"}
                          />
                          <p>{item?.name}</p>
                        </span>
                      </>
                    ))
                  : ""}
              </div>
              <div className="profile-screen-detailed-options">
                {profiledetailData?.length
                  ? profiledetailData.map((item) => (
                      <span className="options-card">
                        <p className="option">{item?.option}</p>
                        <p className="option-detail">{item?.optionDetail}</p>
                      </span>
                    ))
                  : ""}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

// TemplateOne.propTypes = {};

// TemplateOne.defaultProps = {};
