import React from "react";
import PropTypes from "prop-types";
import {useState, useEffect} from "react";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {Button} from "../Button/Button";
import "./plans.css";

export const Plans = ({
  type,
  fullWidth,
  backgroundColor,
  borderColor,
  color,
  data,
  title,
  onClick,
  ...props
}) => {
  const [plansTypes, setPlanTypes] = useState(data);
  const [plansLists, setPlanLists] = useState(null);
  useEffect(() => {
    if (plansTypes) {
      let list = [];
      plansTypes[0]?.plans?.forEach((item) => {
        list.push(item.name);
      });
      setPlanLists(list);
    }
  }, [plansTypes]);
  return (
    <div className={["plans-section", `plan--${type}`].join(" ")}>
      <h3 style={{color: color}}>{title}</h3>
      <div className="plans-section-content">
        {plansLists?.length ? (
          <div
            className="plans-header"
            style={{background: backgroundColor, color: color}}
          >
            <h4 style={{color: color}}>Plan Features</h4>
            <ul>
              {plansLists.map((item, index) => (
                <li
                  key={index}
                  style={{color: color, borderColor: borderColor}}
                >
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ) : (
          ""
        )}
        {plansTypes?.length
          ? plansTypes.map((planList) => (
              <div
                key={planList.id}
                className="plans-type-section"
                style={{background: backgroundColor, borderColor: borderColor}}
              >
                <h4 style={{color: color}}>{planList?.title}</h4>
                <ul>
                  {planList?.plans.map((item, index) => (
                    <li
                      key={index}
                      style={{color: color, borderColor: borderColor}}
                    >
                      {item.plan ? (
                        <FontAwesomeIcon
                          icon={faCheck}
                          style={{color: color}}
                        />
                      ) : (
                        <span>&nbsp;</span>
                      )}
                    </li>
                  ))}
                </ul>
                <div className="price-plan" style={{color: color}}>
                  {planList.price}/{planList.type}
                </div>
                <div className="plan-btn-section">
                  <Button
                    label="Choose Plan"
                    type="rounded"
                    // onClick={() => onClick(item)}
                  />
                </div>
              </div>
            ))
          : ""}
      </div>
    </div>
  );
};

Plans.propTypes = {
  icon: PropTypes.bool,
  type: PropTypes.oneOf(["blunt", "sharp", "rounded"]),
  title: PropTypes.string,
  color: PropTypes.string,
  data: PropTypes.array,
  onClick: PropTypes.func,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
};

Plans.defaultProps = {
  type: "blunt",
  data: [
    {
      id: 1,
      title: "Basic",
      plans: [
        {
          name: "HD Quality",
          plan: true,
        },
        {
          name: "40 Hz Sound",
          plan: true,
        },
        {
          name: "2 Device",
          plan: false,
        },
        {
          name: "Offline Download",
          plan: true,
        },
        {
          name: "Dolby Atoms",
          plan: false,
        },
        {
          name: "4K Picture",
          plan: false,
        },
      ],
      price: "$20",
      type: "month",
    },
    {
      id: 2,
      title: "Family",
      plans: [
        {
          name: "HD Quality",
          plan: true,
        },
        {
          name: "40 Hz Sound",
          plan: true,
        },
        {
          name: "2 Device",
          plan: true,
        },
        {
          name: "Offline Download",
          plan: true,
        },
        {
          name: "Dolby Atoms",
          plan: false,
        },
        {
          name: "4K Picture",
          plan: false,
        },
      ],
      price: "$30",
      type: "month",
    },
    {
      id: 3,
      title: "Premium",
      plans: [
        {
          name: "HD Quality",
          plan: true,
        },
        {
          name: "40 Hz Sound",
          plan: true,
        },
        {
          name: "2 Device",
          plan: true,
        },
        {
          name: "Offline Download",
          plan: true,
        },
        {
          name: "Dolby Atoms",
          plan: true,
        },
        {
          name: "4K Picture",
          plan: true,
        },
      ],
      price: "$40",
      type: "month",
    },
  ],
};
