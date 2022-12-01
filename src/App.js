import React from 'react';
import Card from './components/Card';
import CardList from './components/CardList';
import Form from './components/Form';
import Logo from './components/Logo';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.onSaveButtonClick = this.onSaveButtonClick.bind(this);
    this.clearInformations = this.clearInformations.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardImage: '',
      cardRare: 'normal',
      cardTrunfo: false,
      hasTrunfo: false,
      isSaveButtonDisabled: true,
      cardList: [],
    };
  }

  onInputChange({ target: { name, value, checked } }) {
    if (name === 'cardTrunfo') {
      if (checked) value = true;
      else value = false;
    }

    this.setState({
      [name]: value,
    }, () => this.validadeButton());
  }

  onSaveButtonClick(e) {
    e.preventDefault();
    const {
      cardName, cardDescription,
      cardImage, cardAttr1,
      cardAttr2, cardAttr3,
      cardRare, cardTrunfo,
    } = this.state;
    let { hasTrunfo } = this.state;

    if (!hasTrunfo && cardTrunfo) {
      hasTrunfo = true;
    }

    const info = {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
      cardRare,
      cardTrunfo,
    };
    this.setState((prevInfo) => ({
      cardList: [...prevInfo.cardList, info],
      hasTrunfo,
      cardTrunfo: false,
    }), () => this.clearInformations());
  }

  clearInformations() {
    this.setState({
      cardName: '',
      cardDescription: '',
      cardImage: '',
      cardAttr1: '0',
      cardAttr2: '0',
      cardAttr3: '0',
      cardRare: 'normal',
    });
  }

  validadeButton() {
    const {
      cardName,
      cardDescription,
      cardImage,
      cardAttr1,
      cardAttr2,
      cardAttr3,
    } = this.state;
    const number210 = 210;
    const number90 = 90;
    const condition1 = cardName !== ''
      && cardDescription !== ''
      && cardImage !== '';
    const condition2 = (Number(cardAttr1) + Number(cardAttr2) + Number(cardAttr3))
       <= number210;
    const condition3 = (Number(cardAttr1) >= 0 && Number(cardAttr1) <= number90)
    && (Number(cardAttr2) >= 0 && Number(cardAttr2) <= number90)
    && (Number(cardAttr3) >= 0 && Number(cardAttr3) <= number90);

    this.setState({
      isSaveButtonDisabled: !(condition1 && condition2 && condition3),
    });
  }

  render() {
    const { cardList } = this.state;
    // console.log(cardList);
    return (
      <>
        <Logo />
        <section className="main-container">
          <Form
            onInputChange={ this.onInputChange }
            onSaveButtonClick={ this.onSaveButtonClick }
            { ...this.state }
          />
          <Card { ...this.state } />
        </section>
        {cardList.map((card) => <CardList key={ card.cardName } { ...card } />)}
      </>
    );
  }
}

export default App;
