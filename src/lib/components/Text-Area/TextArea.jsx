import React from 'react';
import PropTypes from 'prop-types';
import './text.css';


export const TextArea = ({size,fill, label, ...props }) => {

  return (
    <>
  
      <textarea 
        className={[ `text--${size}`,`text--${fill}`].join(' ')}
        placeholder="Placeholder"
      />
       {label}
    </>
  );
};

TextArea.propTypes = {
 
   size: PropTypes.oneOf(['small', 'medium', 'large']),

   fill: PropTypes.oneOf(['filled', 'outlined']),
  
};

TextArea.defaultProps = {
  size: 'medium',
  fill:'filled',
};
