import React, { useState } from "react";
import PropTypes from "prop-types";
import "./radio.css";

export const Radio = ({ style, size, position, dataSource, ...props }) => {
  const [selectedItem, setSelectedItem] = useState([]);

  return (
    <span
      type="radio"
      className={[
        "radio",
        `radio--${size}`,
        `radio-container label--${position}`,
        `radio--${style}`,
      ].join(" ")}
      {...props}
    >
      <>
        {dataSource?.length
          ? dataSource.map((item, index) => {
              console.log("item", item);
              console.log("selected", selectedItem);
              return (
                <div class="radio-container">
                  <input type="radio" id="" />
                  <label for="">
                    <div
                      className={
                        selectedItem.includes(item.id)
                          ? "radio-item-active"
                          : "radio-items"
                      }
                      onClick={() => {
                        const arr = [...selectedItem, item.id];
                        setSelectedItem(arr);
                      }}
                    ></div>
                    <p>{item?.title}</p>
                  </label>
                </div>
              );
            })
          : ""}
      </>
    </span>
  );
};

Radio.propTypes = {
  style: PropTypes.oneOf(["horizontally-Arranged", "vertically-Arranged"]),
  position: PropTypes.oneOf(["left", "right", "top"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Radio.defaultProps = {
  size: "medium",
  style: "horizontally-Arranged",
  position: "left",
  dataSource: [
    {
      id: "1",
      title: "one",
    },
    {
      id: "2",
      title: "two",
    },
    {
      id: "3",
      title: "three",
    },

    {
      id: "4",
      title: "four",
    },
    {
      id: "5",
      title: "five",
    },
  ],
};
