import modal from './modules/modals';
import sliders from './modules/sliders';
import forms from './modules/forms';


document.addEventListener('DOMContentLoaded', () => {
    'use strict';

    modal();
    sliders('.feedback-slider-item', 'horizontal', '.main-prev-btn', '.main-next-btn');
    sliders('.main-slider-item', 'vertical');

});