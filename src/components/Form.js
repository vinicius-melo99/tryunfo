import React, { Component } from 'react';

class Form extends Component {
  render() {
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
              />
            </label>
          </section>

          <section>
            <label htmlFor="cardDesc">
              <p>Descrição    </p>
              <textarea
                data-testid="description-input"
                id="cardDesc"
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
              />
            </label>
          </section>

          <section>
            <p>Raridade</p>
            <select name="cardRarity" id="cardRarity" data-testid="rare-input">
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
              />
            </label>
          </section>
          <button type="submit" data-testid="save-button">Salvar</button>
        </form>
      </section>
    );
  }
}

export default Form;
