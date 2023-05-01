"use sctrict"

const inputFahrenheit = document.getElementById('inputFahrenheit');
const outputCelsius= document.getElementById('outputCelsius');
const convertBtn = document.getElementById('convertBtn');

window.onload = init;

function init() {
  let convertBtn = document.getElementById("convertBtn");
  convertBtn.onclick = onconvertBtnClicked;
}

function onconvertBtnClicked() {
  console.log("Clicked!");

  if (isNaN(inputFahrenheit.value)) {
    const errorDiv = document.getElementById('error');
        errorDiv.innerText = 'Please enter a valid number.';// display some error
        console.log('Invalid input');
  } else {
    // get our input
    let valueFahrenheit = parseFloat(inputFahrenheit.value);

    // calculate the unknowns...
    let valueCelsius = (valueFahrenheit - 32) * 5/9;

    // display the results
    outputCelsius.value = valueCelsius.toFixed(0);
  }
}
