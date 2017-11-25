import React from 'react';
import PropTypes from 'prop-types';

const OptionBox = ({ title, name, image, showSelector }) => (
  <div className="options-box">
    <h2>{title}</h2>
    <h3>{name}</h3>
    <div className="options-box__current" role="button" tabIndex={0} onClick={showSelector}>
      {image}
    </div>
  </div>
);

OptionBox.propTypes = {
  title: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  showSelector: PropTypes.func.isRequired,
};

export default OptionBox;
