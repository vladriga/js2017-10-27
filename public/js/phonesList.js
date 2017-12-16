'use strict'

class PhonesList {

    constructor({ element }) {
        this._element = element;
    };

    render({ phones }) {
        let phonesHTML = '';

        phones.forEach(
            (phone) => phonesHTML += `<li class="thumbnail">
                        <a href="${'phones/' + phone.id}" class="thumb">
                            <img alt="${phone.name}" src="${'public/'+phone.imageUrl}">
                        </a>
                        <a href="${'phones/' + phone.id}">${phone.name}</a>
                        <p>${phone.snippet}</p>
                    </li>`
        );

        this._element.querySelector('.phones').innerHTML = phonesHTML;
    };
};