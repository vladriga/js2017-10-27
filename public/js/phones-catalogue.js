'use strict';

class PhonesCatalogue {
  constructor({ element, phones }) {
    this._element = element;

    this._render();

    this._phonesList = this._element.querySelector('[data-element="phones-list"]');
  }

  setPhones(phones) {
    this._phones = phones;

    this._renderList();
  }

  _render() {
    this._element.innerHTML = `
      <ul class="phones"
          data-element="phones-list">
          
      </ul>
    `;
  }

  _renderList() {
    let listHTML = '';

    this._phones.forEach((phone) => {
      listHTML += `
        <li class="thumbnail">
          <a href="#!/phones/${ phone.id }" class="thumb">
            <img alt="${ phone.name }" src="${ phone.imageUrl }">
          </a>
          <a href="#!/phones/${ phone.id }">${ phone.name }</a>
          <p>${ phone.snippet }</p>
        </li>
      `;
    });

    this._phonesList.innerHTML = listHTML;
  }
}