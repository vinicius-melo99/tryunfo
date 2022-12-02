import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Checkbox from './Checkbox';

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
      hasTrunfo,
      isSaveButtonDisabled,
      onInputChange,
      onSaveButtonClick,
      nameFilter,
      filterCard,
      cardRareFilter,
      trunfoFilterChecked,
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
              <option>normal</option>
              <option>raro</option>
              <option>muito raro</option>
            </select>

          </section>

          <section>
            {hasTrunfo ? <span>Você já tem um Super Trunfo em seu baralho</span>
              : <Checkbox cardTrunfo={ cardTrunfo } onInputChange={ onInputChange } />}
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
        <section>
          <span>Filtros: </span>
          <input
            data-testid="name-filter"
            name="nameFilter"
            type="text"
            value={ nameFilter }
            disabled={ trunfoFilterChecked }
            onChange={ filterCard }
          />
          <select
            name="cardRareFilter"
            data-testid="rare-filter"
            value={ cardRareFilter }
            onChange={ filterCard }
            disabled={ trunfoFilterChecked }
          >
            <option>todas</option>
            <option>normal</option>
            <option>raro</option>
            <option>muito raro</option>
          </select>
          <input
            data-testid="trunfo-filter"
            type="checkbox"
            name="trunfoFilterChecked"
            checked={ trunfoFilterChecked }
            onChange={ filterCard }
          />
        </section>
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
  hasTrunfo: PropTypes.bool.isRequired,
  isSaveButtonDisabled: PropTypes.bool.isRequired,
  onInputChange: PropTypes.func.isRequired,
  onSaveButtonClick: PropTypes.func.isRequired,
  nameFilter: PropTypes.string.isRequired,
  filterCard: PropTypes.func.isRequired,
  cardRareFilter: PropTypes.string.isRequired,
  trunfoFilterChecked: PropTypes.bool.isRequired,
};

export default Form;
