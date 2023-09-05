import React, {useState} from "react";
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import { faCaretRight} from "@fortawesome/free-solid-svg-icons";
import "./dropdown.css";

export const Dropdown = ({
  style,
  size,
  type,
  fill,
  label,
  icon,
  dataSource,
  ...props
}) => {
  const [toggle, setToggle] = useState(false);

  const [selectedItem, setSelectedItem] = useState("");

  return (
    <div style={{height: "300px"}}>
      <button
        type="button"
        placeholder="Dropdown"
        className="dropdown-button"
        {...props}
        onClick={() => {
          setToggle(!toggle);
        }}
      >
        Dropdown
        <FontAwesomeIcon
          icon={faCaretRight}
          className={toggle ? "rotate" : "arrow-icon"}
        />
      </button>
      <div className={toggle ? "show-dropdown" : "hide-dropdown"}>
      {dataSource?.length
            ? dataSource.map((item, index) => {
          console.log("item", item);

          // return item.map((item) => {
            return (
              <div className="dropdown-items-wrapper">
                <div
                  className={
                    selectedItem === item.id
                      ? "dropdown-item-active"
                      : "dropdown-items"
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
          // });
        }):""}
      </div>
    </div>
  );
};

Dropdown.propTypes = {
  dataSource:PropTypes.array,
};

Dropdown.defaultProps = {
  dataSource : [
    {
      id: "1",
      title: "15 minutes",
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
  ]
};
