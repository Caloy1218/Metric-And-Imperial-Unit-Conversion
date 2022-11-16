let inputNum = document.querySelector("#inputNum");
let convertBtn = document.querySelector("#convertBtn");
let length = document.querySelector("#length");
let volumeEl = document.querySelector("#volume1");
let mass = document.querySelector("#mass");
const feet = 3.281;
const gallon = 0.264;
const pound = 2.204;
const kgLbs = document.querySelector("#kgLbs");
const LG = document.querySelector("#litersGallon");
const mF = document.querySelector("#meterFeet");
convertBtn.addEventListener("click", function () {
  lengthConversion();
  volumeConversion();
  massConversion();
});

function lengthConversion() {
  let meter = inputNum.value * feet;
  let feetVal = inputNum.value / feet;
  mF.innerHTML = `Length(Meter/Feet)`;
  length.innerHTML = `${inputNum.value} meters = ${meter.toFixed(3)}feet | ${
    inputNum.value
  } feet = ${feetVal.toFixed(3)}meters`;
}

function volumeConversion() {
  let liters = inputNum.value * gallon;
  let gallons = inputNum.value / gallon;
  LG.innerHTML = ` Volume(Liters/Gallons)`;
  volumeEl.innerHTML = `${inputNum.value} liters = ${liters.toFixed(
    3
  )}gallons | ${inputNum.value} gallons = ${gallons.toFixed(3)}liters `;
}
function massConversion() {
  let kilos = inputNum.value * pound;
  let pounds = inputNum.value / pound;
  kgLbs.innerHTML = `Mass(Kilograms/Pounds)`;
  mass.innerHTML = `${inputNum.value} kilos  = ${kilos.toFixed(3)}pounds | ${
    inputNum.value
  } pounds = ${pounds.toFixed(3)}kilos `;
}
