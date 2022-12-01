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
      //   hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
    } = this.props;

    return (
      <section className="formContainer">
        <form>
          <section>
            <label htmlFor="nomeCarta">
              Nome:
              <input
                type="text"
                name="nomeCarta"
                data-testid="name-input"
                id="nomeCarta"
                value={ cardName }
                onChange={ onInputChange }
              />
            </label>
          </section>

          <section>
            <label htmlFor="cardDesc">
              <p>Descrição    </p>
              <textarea
                name="cardDesc"
                data-testid="description-input"
                id="cardDesc"
                onChange={ onInputChange }
                value={ cardDescription }
              />
            </label>
          </section>

          <section>
            <label htmlFor="attr-01">
              Atributo 1
              <input
                type="number"
                name="attr-01"
                data-testid="attr1-input"
                id="attr-01"
                value={ cardAttr1 }
                onChange={ onInputChange }

              />
            </label>
          </section>

          <section>
            <label htmlFor="attr-02">
              Atributo 2
              <input
                type="number"
                name="attr-02"
                data-testid="attr2-input"
                id="attr-02"
                onChange={ onInputChange }
                value={ cardAttr2 }

              />
            </label>
          </section>

          <section>
            <label htmlFor="attr-03">
              Atributo 3
              <input
                type="number"
                name="attr-03"
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
              name="cardRarity"
              id="cardRarity"
              data-testid="rare-input"
              value={ cardRare }
              onChange={ onInputChange }
            >
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>

          </section>

          <section>
            <label htmlFor="trunfo">
              Super Trunfo
              <input
                type="checkbox"
                name="trunfo"
                data-testid="trunfo-input"
                id="trunfo"
                value={ cardTrunfo }
                onChange={ onInputChange }
                checked
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
  cardTrunfo: PropTypes.bool.isRequired,
  //   hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
};

export default Form;
