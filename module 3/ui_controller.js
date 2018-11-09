'use strict';


export default class UIController {
constructor(){
  import MaskInput from 'mask-input';
  const maskInput = new MaskInput(document.querySelector('.js-input-selector'), {
    mask: '0000-0000-0000-0000',
    alwaysShowMask: true,
    maskChar: '_',
  });
  console.log(maskInput);
}
  
}