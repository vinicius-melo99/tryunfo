import React from 'react';
import PropTypes from 'prop-types';

class Checkbox extends React.Component {
  render() {
    const { onInputChange, cardTrunfo } = this.props;
    return (
      <label htmlFor="trunfo">
        Super Trunfo
        <input
          type="checkbox"
          name="cardTrunfo"
          data-testid="trunfo-input"
          id="trunfo"
          onChange={ onInputChange }
          checked={ cardTrunfo }
        />
      </label>
    );
  }
}

Checkbox.propTypes = {
  cardTrunfo: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
};

export default Checkbox;
