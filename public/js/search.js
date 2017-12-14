'use strict';

class Search {
    constructor({ element }) {
        this._element = element;

        this._render();
    }

    _render() {
        this._element.innerHTML = `
        <p>
            Search:
            <input data-search="search">
        </p>
        `
    }
}