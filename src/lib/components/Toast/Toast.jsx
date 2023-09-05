import React, {useState} from "react";
import {AiOutlineInfoCircle} from "react-icons/ai";
import {FiAlertTriangle} from "react-icons/fi";
import {BsCheck2Circle} from "react-icons/bs";
import PropTypes from "prop-types";
import "./toast.css";

export const Toast = ({style, size, dataSource, ...props}) => {
  const [showMore, setShowMore] = useState(false);

  return (
    <div className="toast-container">
      {style === "Information Toast" ? (
        <>
          {dataSource?.length
            ? dataSource.map((item, index) => {
                return (
                  <span
                    className={`toast-wrapper ${
                      size === "Short Toast" && "short-width"
                    }`}
                  >
                    <span
                      className={`toast-left ${
                        size === "Short Toast" && "short-width"
                      }`}
                    >
                      <span className="toast-icon">
                        {" "}
                        <AiOutlineInfoCircle />{" "}
                      </span>
                      <span>{item?.text}</span>
                    </span>
                    <span className="toast-right">
                      <span className="update-button"> OK </span>
                    </span>
                  </span>
                );
              })
            : ""}
        </>
      ) : null}
      {style === "Interrogative Toast" ? (
        <>
          {dataSource?.length
            ? dataSource.map((item, index) => {
                return (
                  <div
                    className={`toast-wrapper ${
                      size === "Short Toast" && "short-width"
                    }`}
                  >
                    <span
                      className={`toast-left ${
                        size === "Short Toast" && "short-width"
                      }`}
                    >
                      <span className="toast-icon">
                        {" "}
                        <AiOutlineInfoCircle />{" "}
                      </span>
                      <span>{item?.text}</span>
                    </span>
                    <span className="toast-right">
                      <span className="cancel-button">CANCEL</span>
                      <span className="update-button">Update</span>
                    </span>
                  </div>
                );
              })
            : ""}
        </>
      ) : null}
      {style === "Alert / Error Toast" ? (
        <>
          {dataSource?.length
            ? dataSource.map((item, index) => {
                return (
                  <span
                    className={`toast-alert-wrapper ${
                      size === "Short Toast" && "short-width"
                    }`}
                  >
                    <span
                      className={`toast-left ${
                        size === "Short Toast" && "short-width"
                      }`}
                    >
                      <span className="toast-icon">
                        {" "}
                        <FiAlertTriangle />{" "}
                      </span>
                      <span>{item?.text}</span>
                    </span>
                    <span className="toast-right">
                      <span className="alert-button"> OK </span>
                    </span>
                  </span>
                );
              })
            : ""}
        </>
      ) : null}
      {style === "Success Toast" ? (
        <>
          {dataSource?.length
            ? dataSource.map((item, index) => {
                return (
                  <div
                    className={`toast-success-wrapper ${
                      size === "Short Toast" && "short-width"
                    }`}
                  >
                    <span
                      className={`toast-left ${
                        size === "Short Toast" && "short-width"
                      }`}
                    >
                      <span className="toast-icon">
                        {" "}
                        <BsCheck2Circle />{" "}
                      </span>
                      <span>{item?.text}</span>
                    </span>
                    <span className="toast-right">
                      {/* <button className="cancel-button">CANCEL</button> */}
                      <span className="alert-button"> OK </span>
                    </span>
                  </div>
                );
              })
            : ""}
        </>
      ) : null}
      {style === "Large Message" ? (
        <>
          {dataSource?.length
            ? dataSource.map((item, index) => {
                return (
                  <div
                    className={`toast-wrapper ${
                      size === "Short Toast" && "short-width"
                    }`}
                  >
                    <span
                      className={`toast-left ${
                        size === "Short Toast" && "short-width"
                      }`}
                    >
                      <span className="toast-icon">
                        {" "}
                        <AiOutlineInfoCircle />{" "}
                      </span>
                      <span
                        className={`message ${
                          size === "Short Toast" && "short-width"
                        }`}
                      >
                        {showMore ? (
                          <>{item?.text}</>
                        ) : (
                          <>
                            {(item?.text).split(" ").slice(0, 15).join(" ") +
                              "..."}
                          </>
                        )}
                      </span>
                    </span>
                    <span className="toast-right">
                      <span className="cancel-button">CANCEL</span>
                      <span
                        className="update-button"
                        onClick={() => setShowMore(!showMore)}
                      >
                        Show {showMore ? "Less" : "More"}
                      </span>
                    </span>
                  </div>
                );
              })
            : ""}
        </>
      ) : null}
    </div>
  );
};

Toast.propTypes = {
  style: PropTypes.oneOf([
    "Information Toast",
    "Interrogative Toast",
    "Alert / Error Toast",
    "Success Toast",
    "Large Message",
  ]),
  size: PropTypes.oneOf(["Short Toast", "Full Width Toast"]),
  dataSource: PropTypes.array,
};

Toast.defaultProps = {
  style: "Information Toast",
  size: "Short Toast",
  dataSource: [
    {
      id: "1",
      text: "Text message will be displayed here",
    },
  ],
};
