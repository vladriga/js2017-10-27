'use strict';

class Sorter {
  constructor({ element, list: optionsList }) {
    this._element = element;
    this._list = optionsList;

    this._render();

    this._select = this._element.querySelector('[data-element="sorting"]');

    this._select.onchange = (event) => {
      let myEvent = new CustomEvent('sorter.change', {
        detail: this._select.value,
      });

      this._element.dispatchEvent(myEvent);
    };
  }

  _render() {
    let listHTML = '';

    for (let option in this._list) {
      listHTML += `
        <option value="${option}">${this._list[option]}</option>
      `;
    }

    this._element.innerHTML = `
      <p>
        Sort by:
        <select data-element="sorting">
          ${listHTML}
        </select>
      </p>
    `;
  }
}