'use strict';

const inputCelsius = document.getElementById('inputCelsius');
const outputFahrenheit = document.getElementById('outputFahrenheit');
const convertBtn = document.getElementById('convertBtn');

window.onload = init;

function init() {
  convertBtn.onclick = onconvertBtnClicked;
}

function onconvertBtnClicked() {
  console.log('clicked!');
  if (isNaN(inputCelsius.value)) {
    const errorDiv = document.getElementById('error');
        errorDiv.innerText = 'Please enter a valid number.';

    // handle the case when input is not a valid number
    console.log('Invalid input');
  } else {
    let valueCelsius = parseFloat(inputCelsius.value);
    let valueFahrenheit = (valueCelsius * 9 / 5) + 32;
    outputFahrenheit.value = valueFahrenheit.toFixed(0);
  }
}
