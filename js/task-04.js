"use strict";
const counterValue = document.querySelector("#value");
const incrementButton = document.querySelector("[data-action='increment']");
const decrementButton = document.querySelector("[data-action='decrement']");

let count = 0;

const updateCounter = () => {
  counterValue.textContent = count;
};

incrementButton.addEventListener("click", () => {
  count++;
  updateCounter();
});

decrementButton.addEventListener("click", () => {
  count--;
  updateCounter();
});
