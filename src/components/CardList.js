import React from 'react';
import PropTypes from 'prop-types';
import Card from './Card';

class CardList extends React.Component {
  render() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
      deleteCard,
    } = this.props;
    const card = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    return (
      <section>
        <Card { ...card } />
        <button
          name={ cardName }
          type="submit"
          data-testid="delete-button"
          onClick={ deleteCard }
        >
          Excluir
        </button>
      </section>
    );
  }
}

CardList.propTypes = {
  cardAttr1: PropTypes.string,
  cardAttr2: PropTypes.string,
  cardAttr3: PropTypes.string,
  cardDescription: PropTypes.string,
  cardImage: PropTypes.string,
  cardName: PropTypes.string,
  cardRare: PropTypes.string,
  cardTrunfo: PropTypes.bool,
  deleteCard: PropTypes.func.isRequired,
};

CardList.defaultProps = {
  cardAttr1: '',
  cardAttr2: '',
  cardAttr3: '',
  cardDescription: '',
  cardImage: '',
  cardName: '',
  cardRare: '',
  cardTrunfo: false,
};

export default CardList;
