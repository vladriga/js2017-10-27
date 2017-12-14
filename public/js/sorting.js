'use strict' 

class Sorting {
    constructor({ element, list }) {
        this._element = element;
        this._list = list;

        this._render();
    }

    _render() {
        let listHTML = '';

        for (let option in this._list) {
            listHTML += `
            <option value="${option}">${this._list[option]}</option>
            `
        }

        this._element.innerHTML = `
            <p>
                Sort by:
                <select data-sorting="sorting">
                    ${listHTML}
                </select>
            </p>
        `
    }
}