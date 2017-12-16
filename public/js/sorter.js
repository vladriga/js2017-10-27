'use strict'

class Sorter {

    constructor({ element }) {
        this._element = element;

        this._element.addEventListener('change', (event) => this._onSelect(event));
    };

    _onSelect(event) {
        let sorterEvent = new CustomEvent('sort', {
            'detail': { 'order': event.target.value },
           'bubbles': true,
        });

       this._element.dispatchEvent(sorterEvent);
    };
};