'use strict';

// Seecting the Elements
const hidden = document.querySelector('.not-zero');
let billInput = document.querySelector('#bills-text-box');
const tipPercentages = document.querySelectorAll('.tip');
let customInput = document.querySelector('.custom-text');
let peopleInput = document.querySelector('.no-of-people');
let tipAmount = document.querySelector('.tip-amount');
let totalAmount = document.querySelector('.total-text');
const reset = document.querySelector('.reset');

let custom;
let tipNumber;
let bill;
let people;
let choosePercentage = false;

const choice = function () {
  if (peopleInput.value <= 0) {
    hidden.classList.remove('hidden-class');
  } else {
    people = Number(peopleInput.value);
    const tipResult = calculateTip(bill, people);
    tipAmount.textContent = '$' + tipResult;
    const totalResult = calculateTotal(bill, people);
    totalAmount.textContent = '$' + totalResult;
  }
};

const calculateTip = function (bill, people) {
  return (tipNumber / 100) * bill * people;
};

const calculateTotal = function (bill, people) {
  return (tipNumber / 100) * bill * people + bill;
};

// Event Handlers
billInput.addEventListener('input', function () {
  bill = Number(billInput.value);
});

for (let i = 0; i < tipPercentages.length; i++) {
  tipPercentages[i].addEventListener('click', function () {
    choosePercentage = true;

    tipNumber = Number(tipPercentages[i].textContent);
    console.log(tipNumber);
  });
}

peopleInput.addEventListener('input', choice);

reset.addEventListener('click', function () {
  tipAmount.textContent = '$0.00';
  totalAmount.textContent = '$0.00';
  peopleInput.value = 0;
  billInput.value = 0;
  customInput = 'custom';
});
