import React from 'react';
import PropTypes from 'prop-types';
import OptionBox from '../OptionBox';
import OptionSelector from '../OptionSelector';

class OptionCollection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selectorIsVisible: false,
      currentOption: {},
    };
    this.show = ::this.showSelector;
    this.hide = ::this.hideSelector;
  }

  showSelector() {
    this.setState({ selectorIsVisible: true });
  }
  hideSelector() {
    this.setState({ selectorIsVisible: false });
  }

  swapCurrentOption(option) {
    this.setState({ currentOption: option });
  }

  render() {
    const {
      title,
      optionsList,
    } = this.props;

    return (
      <div className="option-collection">
        <OptionBox
          title
          name={this.state.currentOption.name || 'No Selection'}
          image={this.state.currentOption.image || ''}
          showSelector={() => this.showSelector()}
        />
        <OptionSelector
          isVisible={this.state.selectorIsVisible}
          optionsList
          onClose={() => this.hideSelector()}
          onSelection={() => this.swapCurrentOption()}
        />
      </div>
    );
  }
}

OptionCollection.propTypes = {
  title: PropTypes.string.isRequired,
  optionsList: PropTypes.arrayOf(Object).isRequired,
};

export default OptionCollection;
