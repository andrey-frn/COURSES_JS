import cardTemplates from '../templates/card-menu.hbs';
import card from '../menu.json';

const createTemplates = cardTemplates(card);

const cardRef = document.querySelector('.js-menu');
cardRef.insertAdjacentHTML('beforeend', createTemplates);
