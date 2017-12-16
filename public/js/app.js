'use strict'

let sorter = new Sorter({
    'element': document.querySelector('div[data-component="sorter"]'),
});

let filter = new Filter({
    'element': document.querySelector('div[data-component="searcher"]'),
});

let phonesList = new PhonesList({
    'element': document.querySelector('div[data-component="phones-list"]'),
});

let phonesPage = new PhonesPage({
    'element': document.querySelector('div[data-page="phones-page"]'),
    'sorter': sorter,
    'searcher': filter,
    'phonesList': phonesList,
    'getPhones': () => phonesFromServer,
});