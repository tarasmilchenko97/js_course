'use strict';

import UIController from './ui_controller';

const UI = new UIController;
UI(document.getElementById('js-input-selector').value);
bod = document.getElementById('bod');

let CARD_NAME = document.getElementById('js-input-selector').value;

document.getElementById('but').onclick = function(){
  fetch (`https://api.bincodes.com/cc/?format=json&api_key=d96ca493f5be297f8c304a87edcdf6a8&cc=${CARD_NAME}`)
  .then(res => res.json())
  .then(res => res.bod);
}

