import React from 'react';
import PropTypes from 'prop-types';
import Rodal from 'rodal';

const OptionSelector = ({ isVisible, options, onClose, onSelection }) => (
  <div className="option-selector">
    <Rodal visible={isVisible} onClose={onClose} width="" height="" animation="fade" duration="600">
      <ul>
        {options.map(option => <li><a role="button" tabIndex={0} onClick={onSelection}>{option.name}</a></li>)}
      </ul>
    </Rodal>
  </div>
);

OptionSelector.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  options: PropTypes.arrayOf(Object).isRequired,
  onClose: PropTypes.func.isRequired,
  onSelection: PropTypes.func.isRequired,
};

export default OptionSelector;
