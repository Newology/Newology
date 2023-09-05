import React from "react";
import PropTypes from "prop-types";
import imgGal from "../../images/img-gal.png";
import "./gallery.css";

export const ImageGallery = ({style, borderRadius, dataSource, ...props}) => {
  return (
    <div
      title="image"
      className={`img img--${borderRadius} imggal--${style}`}
      alt="img"
      {...props}
    >
      {dataSource?.length
        ? dataSource.map((item, index) => {
            return (
              <div className="list-items-wrapper">
                <img className={`img--${borderRadius}`} src={item?.path} />
              </div>
            );
          })
        : ""}
    </div>
  );
};

ImageGallery.propTypes = {
  style: PropTypes.oneOf(["FullWidth", "Mini"]),
  borderRadius: PropTypes.oneOf(["sharp", "blunt", "rounded"]),
  dataSource: PropTypes.array,
};

ImageGallery.defaultProps = {
  style: "FullWidth",
  borderRadius: "sharp",
  dataSource: [
    {
      id: "1",
      title: "one",
      path: imgGal,
    },
    {
      id: "2",
      title: "two",
      path: imgGal,
    },
    {
      id: "3",
      title: "three",
      path: imgGal,
    },

    {
      id: "4",
      title: "four",
      path: imgGal,
    },
    {
      id: "5",
      title: "five",
      path: imgGal,
    },
    {
      id: "6",
      title: "five",
      path: imgGal,
    },
    {
      id: "7",
      title: "five",
      path: imgGal,
    },
    {
      id: "8",
      title: "five",
      path: imgGal,
    },
  ],
};
