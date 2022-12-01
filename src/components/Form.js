import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Form extends Component {
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
      // hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="formContainer">
        <form>
          <section>
            <label htmlFor="cardName">
              Nome:
              <input
                type="text"
                name="cardName"
                data-testid="name-input"
                id="nomeCarta"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </section>

          <section>
            <label htmlFor="cardDescription">
              <p>Descrição    </p>
              <textarea
                name="cardDescription"
                data-testid="description-input"
                id="cardDesc"
                onChange={ onInputChange }
                value={ cardDescription }
              />
            </label>
          </section>

          <section>
            <label htmlFor="cardAttr1">
              Atributo 1
              <input
                type="number"
                name="cardAttr1"
                data-testid="attr1-input"
                id="attr-01"
                value={ cardAttr1 }
                onChange={ onInputChange }

              />
            </label>
          </section>

          <section>
            <label htmlFor="cardAttr2">
              Atributo 2
              <input
                type="number"
                name="cardAttr2"
                data-testid="attr2-input"
                id="attr-02"
                onChange={ onInputChange }
                value={ cardAttr2 }

              />
            </label>
          </section>

          <section>
            <label htmlFor="cardAttr3">
              Atributo 3
              <input
                type="number"
                name="cardAttr3"
                data-testid="attr3-input"
                id="attr-03"
                onChange={ onInputChange }
                value={ cardAttr3 }

              />
            </label>
          </section>

          <section>
            <label htmlFor="cardImage">
              Imagem
              <input
                type="text"
                name="cardImage"
                data-testid="image-input"
                id="cardImage"
                onChange={ onInputChange }
                value={ cardImage }

              />
            </label>
          </section>

          <section>
            <p>Raridade</p>
            <select
              name="cardRare"
              id="cardRare"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option selected>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>

          </section>

          <section>
            <label htmlFor="cardTrunfo">
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
          </section>
          <button
            type="submit"
            data-testid="save-button"
            disabled={ isSaveButtonDisabled }
            onClick={ onSaveButtonClick }
          >
            Salvar
          </button>
        </form>
      </section>
    );
  }
}

Form.propTypes = {
  cardName: PropTypes.string.isRequired,
  cardDescription: PropTypes.string.isRequired,
  cardAttr1: PropTypes.string.isRequired,
  cardAttr2: PropTypes.string.isRequired,
  cardAttr3: PropTypes.string.isRequired,
  cardImage: PropTypes.string.isRequired,
  cardRare: PropTypes.string.isRequired,
  cardTrunfo: PropTypes.string.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
