import PropTypes from 'prop-types';
import React from 'react';

class Card extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardImage,
      cardRare,
      cardTrunfo,
    } = this.props;

    return (
      <section className="card-informations">
        <h2 data-testid="name-card">
          name:
          {cardName}
        </h2>
        <img src={ cardImage } alt={ cardName } data-testid="image-card" />
        <p data-testid="description-card">
          desc:
          {cardDescription}
        </p>
        <p data-testid="attr1-card">
          attr1:
          {cardAttr1}
        </p>
        <p data-testid="attr2-card">
          attr2:
          {cardAttr2}
        </p>
        <p data-testid="attr3-card">
          attr3:
          {cardAttr3}
        </p>
        <p data-testid="rare-card">
          raridade:
          {cardRare}
        </p>
        { cardTrunfo
          ? <p data-testid="trunfo-card">Super Trunfo</p>
          : <p /> }
      </section>
    );
  }
}

Card.propTypes = {
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardName: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.bool.isRequired,
};

export default Card;
