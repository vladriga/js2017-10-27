'use strict'

class Filter {

    constructor({ element }) {
        this._element = element;

        this._element.addEventListener('change', (event) => this._onChange(event));
    };

    _onChange(event) {
        let filterEvent = new CustomEvent('filter', {
            'detail': { 'filter': event.target.value },
            'bubbles': true,
        });

        this._element.dispatchEvent(filterEvent);
    };
};