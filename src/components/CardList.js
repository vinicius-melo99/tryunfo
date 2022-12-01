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
