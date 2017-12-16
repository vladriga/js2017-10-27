'use strict'

class PhonesPage {

    constructor({ element, sorter, searcher, phonesList, getPhones }) {
        this._element = element;
        this._sorter = sorter;
        this._searcher = filter;
        this._phonesList = phonesList;
        this._getPhones = getPhones;

        this._sortOrder = 'name';
        this._filter = '';

        this._phones = this._getCustomPhones();
        
        this._phonesList.render({ 'phones': this._phones });

        this._element.addEventListener('sort', (event) => this._onSort(event));
        this._element.addEventListener('filter', (event) => this._onFilter(event));
    };

    _getCustomPhones() {
        let custPhones = this._getPhones();

        if (this._filter !== '') {
            let curFilter = this._filter.toLowerCase();
            custPhones = this._phones.filter((phone) => phone.name.toLowerCase().indexOf(curFilter) > -1);
        }

        custPhones.sort((a, b) => this._sortOrder == 'age' ? (a.age > b.age ? 1 : -1) : (a.name > b.name ? 1 : -1));

        return custPhones;
    };

    _getPhones() {
        return phonesFromServer;
    };

    _onSort(event) {
        this._sortOrder = event.detail.order;
        this._phonesList.render({ 'phones': this._getCustomPhones() });
    };

    _onFilter(event) {
        this._filter = event.detail.filter;
        this._phonesList.render({ 'phones': this._getCustomPhones() });
    };
};