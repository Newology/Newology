import React from "react";
import PropTypes from "prop-types";
import landscape1 from "../../images/rails_images/landscape1.png";
import "./InfoCard.css";

export const InfoCard = (props) => {
  const {
    title,
    thumbnail,
    description,
    duration,
    progress,
    color,
    episodes,
    icon,
  } = props;

  return (
    <>
      <div className="content-card">
        <div className="content-card-image">
          <img alt="title" src={thumbnail} />
        </div>
        <div className="content-card-info" style={{color: color}}>
          {title && <h3 className="text-title">{title}</h3>}
          {description && <p className="text-decs">{description}</p>}
          {duration && <div className="text-duration">{duration}</div>}
          {episodes && <div className="text-duration">{episodes}</div>}
         
          {progress && (
            <div class="progress">
              <div class="progress-done" style={{width: `${progress}%`}}>
                {progress}%
              </div>
            </div>
          )}
        </div>
        {icon && <div className="text-icon"><img alt="title" src={icon} /></div>}
      </div>
    </>
  );
};

InfoCard.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  duration: PropTypes.string,
  dataSource: PropTypes.array,
  onClick: PropTypes.func,
  progress: PropTypes.number,
  thumbnail: PropTypes.string,
  color: PropTypes.string,
  episodes: PropTypes.string,
  icon: PropTypes.string,
};

InfoCard.defaultProps = {
  id: "1",
  thumbnail: landscape1,
  title: "Movie 1",
};
