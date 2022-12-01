import React from 'react';
import Card from './components/Card';
import Form from './components/Form';
import Logo from './components/Logo';

class App extends React.Component {
  constructor() {
    super();
    this.onInputChange = this.onInputChange.bind(this);
    this.state = {
      cardName: '',
      cardDescription: '',
      cardAttr1: '',
      cardAttr2: '',
      cardAttr3: '',
      cardRare: 'normal',
      cardTrunfo: false,
    };
  }

  onInputChange({ target: { name, value, checked } }) {
    if (name === 'cardTrunfo') {
      if (checked) value = true;
      else value = false;
    }

    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <>
        <Logo />
        <section className="main-container">
          <Form
            onInputChange={ this.onInputChange }
            { ...this.state }
          />
          <Card { ...this.state } />
        </section>
      </>
    );
  }
}

export default App;
