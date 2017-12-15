'use strict';

class Search {
  constructor({ element }) {
    this._element = element;

    this._render();

    this._fieldElement = this._element.querySelector('[data-element="field"]');

    this._fieldElement.addEventListener('input', () => {
      let myEvent = new CustomEvent('search.change', {
        detail: this._fieldElement.value,
      });

      this._element.dispatchEvent(myEvent);
    })
  }

  on(eventName, handler) {
    this._element.addEventListener(eventName, handler);
  }

  _render() {
    this._element.innerHTML = `
      <p>
          Search:
          <input data-element="field">
      </p>
    `;
  }
}