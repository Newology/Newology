import React, {useState} from "react";
import PropTypes from "prop-types";
import "./checkbox.css";

export const Checkbox = ({style, size, position, dataSource, ...props}) => {
  const [checked, setChecked] = useState(new Set());
  const [checked1, setChecked1] = useState(true);
  const [checked2, setChecked2] = useState(false);
  const [checked3, setChecked3] = useState(true);

  return (
    <span
      type="checkbox"
      className={[
        "checkbox",
        `checkbox--${size}`,
        `checkbox-container label--${position}`,
        `checkbox--${style}`,
      ].join(" ")}
      {...props}
    >
      <>
        {dataSource?.length
          ? dataSource.map((item, index) => {
              return (
                <div class="checkbox-container">
                  <input type="checkbox" />
                  <label>
                    <div
                      className={
                        checked.has(item.id) ? "checkdiv-selected" : "checkdiv"
                      }
                      onClick={(e) => {
                        if (checked.has(item.id)) {
                          const newSet = new Set(checked);
                          newSet.delete(item.id);
                          setChecked(newSet);
                        } else {
                          const newSet = new Set(checked);
                          newSet.add(item.id);
                          setChecked(newSet);
                        }
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

Checkbox.propTypes = {
  style: PropTypes.oneOf(["horizontally-Arranged", "vertically-Arranged"]),
  position: PropTypes.oneOf(["left", "right", "top"]),
  size: PropTypes.oneOf(["small", "medium", "large"]),
};

Checkbox.defaultProps = {
  style: "vertically-Arranged",
  size: "medium",
  position: "left",
  dataSource: [
    {
      id: "1",
      title: "Checkbox 1",
    },
    {
      id: "2",
      title: "Checkbox 2",
    },
    {
      id: "3",
      title: "Checkbox 3",
    },
  ],
};
