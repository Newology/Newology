import React from "react";
import PropTypes from "prop-types";
// import { useNavigate } from "react-router-dom";
import backIcon from "../../images/arrow-back-1.png";
import "./list.css";
import {useState} from "react";

export const List = ({
  style,
  dataSource,
  onBackClick,
  onListClick,
  ...props
}) => {
  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div
      title="List"
      className={["list", `list--${style}`].join(" ")}
      alt="list"
      {...props}
    >
      <div className="list-wrapper">
        <span className="list-back-arrow" onBackClick>
          <img alt="back-btn" src={backIcon} />
        </span>
        <span className="list-title"> Select Channel </span>
        {dataSource?.length
          ? dataSource.map((item, index) => {
              return (
                <div className="list-items-wrapper">
                  <div
                    className={
                      selectedItem === item.id
                        ? "list-item-active"
                        : "list-items"
                    }
                    key={`${item?.id}${index}`}
                    onClick={() => {
                      setSelectedItem(item?.id);
                    }}
                    onListClick
                  >
                    {item?.title}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
};

List.propTypes = {
  dataSource: PropTypes.array,
  onBackClick: PropTypes.func,
  onListClick: PropTypes.func,
};

List.defaultProps = {
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
