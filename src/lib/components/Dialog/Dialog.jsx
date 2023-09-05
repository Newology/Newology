import React, {useState} from "react";
import PropTypes from "prop-types";
import backIcon from "../../images/arrow-back-1.png";
import "./dialog.css";

export const Dialog = ({style, dataSource, onClick, ...props}) => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div
      title="Dialog"
      className={["list", `list--${style}`].join(" ")}
      dataSource={dataSource}
      alt="dialog"
      {...props}
    >
      {style === "rightbar" ? (
        <div className="list-wrapper">
          <span className="list-title"> Select Channel </span>
          {dataSource?.length
          ? dataSource.map((item, index) => {
            return (
              <div className="list-items-wrapper">
                <div
                  className={
                    selectedItem === item.id ? "list-item-active" : "list-items"
                  }
                  key={`${item?.id}${index}`}
                  onClick={() => {
                    setSelectedItem(item.id);
                  }}
                >
                  {item?.title}
                </div>
              </div>
            );
          }):""}
        </div>
      ) : null}

      {style === "leftbar" ? (
        <div className="list-wrapper">
          <span className="list-back-arrow" onClick={onClick}>
            <img src={backIcon} />
          </span>
          <br></br>
          <span style={{borderBottom: "1px solid grey"}}></span>
          {/* <span className="list-title"> Select Channel </span> */}
          {dataSource?.length
          ? dataSource.map((item, index) => {
            return (
              <div className="list-items-wrapper">
                <div
                  className={
                    selectedItem === item.id ? "list-item-active" : "list-items"
                  }
                  key={`${item?.id}${index}`}
                  onClick={() => {
                    setSelectedItem(item.id);
                  }}
                >
                  {item?.title}
                </div>
              </div>
            );
          }):""}
        </div>
      ) : null}

      {style === "profile" ? (
        <div className="profile-wrapper">
          <div className="profile-container">
            <h2>Log In</h2>
            <input
              type="text"
              placeholder="Enter Username"
              name="uname"
              className="profile-username"
              required
            />

            <input
              type="password"
              placeholder="Enter Password"
              name="psw"
              required
            />

            <button type="submit">Login In</button>
            <div className="remember-me-container">
              <label>
                <input type="checkbox" name="remember" /> Remember me
              </label>
              <span>Need Help?</span>
            </div>
            <br />
            <div>Continue With </div>
            <br />
            <div>
              New to VideoReady? <b>Sign Up Now.</b>{" "}
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
};

Dialog.propTypes = {
  style: PropTypes.oneOf(["rightbar", "leftbar", "profile"]),
  dataSource: PropTypes.array,
};

Dialog.defaultProps = {
  style: "rightbar",
  dataSource: [
    {
      id: "1",
      title: "one",
      path: "/newology",
    },
    {
      id: "2",
      title: "two",
      path: "/galaxies",
    },
    {
      id: "3",
      title: "three",
      path: "/solar-system",
    },

    {
      id: "4",
      title: "four",
      path: "/planets",
    },
    {
      id: "5",
      title: "five",
      path: "/continents",
    },
  ],
};
