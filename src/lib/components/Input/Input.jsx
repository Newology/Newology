import React, {useState} from "react";
import PropTypes from "prop-types";
import "./input.css";

export const InputBox = ({
  size,
  className,
  backgroundColor,
  borderColor,
  color,
  labelColor,
  label,
  shape,
  type,
  name,
  inputClass,
  onChange,
  disabled,
  id,
  error,
  required,
  maxLength,
  url, // suffix,
  subLabel,
  placeholder,
  ...props
}) => {
  return (
    <div className={`input-box-section ${className}`}>
           {" "}
      <label
        style={{
          // fontSize: size,
          color: labelColor || "#000",
        }}
      >
                {label}     {" "}
      </label>
           {" "}
      <div className="input-box-wrapper">
               {" "}
        <input
          style={{
            // fontSize: size,
            background: backgroundColor || "transparent",
            borderColor: borderColor || "#000",
            color: color || "#000",
          }}
          id={id}
          type={type}
          name={name}
          className={`input-box ${inputClass} input--${size} input--${shape}`}
          placeholder={placeholder}
          onChange={onChange}
          disabled={disabled}
          required={required}
          maxLength={maxLength}
        />
               {" "}
        {url && subLabel ? (
          <span className="sublabel">
                       {" "}
            <a
              href={url}
              style={{
                // fontSize: size,
                color: labelColor || "#000",
              }}
            >
                            {subLabel}           {" "}
            </a>
                     {" "}
          </span>
        ) : subLabel ? (
          <span
            className="sublabel"
            style={{
              // fontSize: size,
              color: labelColor || "#000",
            }}
          >
                        {subLabel}         {" "}
          </span>
        ) : (
          ""
        )}
                {/* {suffix && <span className="input-icon">{suffix}</span>} */}
             {" "}
      </div>
            {error && <div className="error">{error}</div>}   {" "}
    </div>
  );
};

InputBox.propTypes = {
  size: PropTypes.oneOf(["small", "medium", "large"]),
  className: PropTypes.string,
  type: PropTypes.string,
  label: PropTypes.string,
  name: PropTypes.string,
  inputClass: PropTypes.string,
  id: PropTypes.string,
  placeholder: PropTypes.string,
  onChange: PropTypes.func,
  disabled: PropTypes.bool,
  subLabel: PropTypes.string,
  url: PropTypes.string,
  required: PropTypes.bool,
  shape: PropTypes.oneOf(["blunt", "sharp", "rounded"]), // suffix:PropTypes.element.isRequired,
  maxLength: PropTypes.number,
  error: PropTypes.string,
  backgroundColor: PropTypes.string,
  borderColor: PropTypes.string,
  color: PropTypes.string,
  labelColor: PropTypes.string,
};

InputBox.defaultProps = {
  size: "medium",
  type: "text",
  shape: "blunt",
  placeholder: "Enter...",
};
