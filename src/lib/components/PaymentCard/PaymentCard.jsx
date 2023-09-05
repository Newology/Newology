import React from "react";
import {Button} from "../Button/Button"
import PropTypes from "prop-types";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faCheck, faCircleCheck} from "@fortawesome/free-solid-svg-icons";
import "./paymentCard.css";

export const PaymentCard = ({
  title,
  list,
  price,
  planType,
  buttonText,
  onClick,
  ...props
}) => {
  return (
    <>
      <div title="Payment Plan" className={`payment-plan`} {...props}>
        <h4>
          {title}{" "}
          <span>
            {price}/{planType}
          </span>
        </h4>
        <ul>
          {list?.length
            ? list.map((item, index) => {
                if (item.plan) {
                  return (
                    <li key={index}>
                      <FontAwesomeIcon icon={faCircleCheck} /> {item.name}{" "}
                      <FontAwesomeIcon icon={faCheck} />
                    </li>
                  );
                }
              })
            : ""}
        </ul>
        <h5>
          {price}/{planType}
        </h5>
        <div className="button-wrappper">
          <Button type={"blunt"} fill={"outlined"} label={buttonText} />
        </div>
      </div>
    </>
  );
};

PaymentCard.propTypes = {
  list: PropTypes.array,
  price: PropTypes.string,
  buttonText: PropTypes.string,
  planType: PropTypes.string,
  onClick: PropTypes.func,
  title: PropTypes.string,
};

PaymentCard.defaultProps = {
  list: [
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
  ],
  title: "Basic",
  price: "$20",
  planType: "month",
  buttonText: "Select Plan",
};
