// const calculator = require('./modules/calculator');
// const cards = require('./modules/cards');
import tabs from './modules/tabs';
import modal from './modules/modal';
import calculator from './modules/calculator';
import cards from './modules/cards';
import slider from './modules/slider';
import timer from './modules/timer';
import forms from './modules/forms';
import { openModal } from './modules/modal';
window.addEventListener('DOMContentLoaded', () => {


    const modalTimerId = setTimeout(() => openModal('.modal', modalTimerId), 300);



    tabs('.tabheader__item', '.tabcontent', '.tabheader__items', 'tabheader__item_active');
    modal('[data-modal]', '[data-modal-on]', modalTimerId);
    calculator();
    cards();
    slider({
        container: '.offer__slider',
        nextArrow: '.offer__slider-next',
        prevArrow: '.offer__slider-prev',
        wrapper: '.offer__slider-wrapper',
        slide: '#current',
        totalCounter: '#total',
        field: '.offer__slider-inner'

    });
    timer('.timer', '2025-01-30');
    forms('form', modalTimerId);
});
