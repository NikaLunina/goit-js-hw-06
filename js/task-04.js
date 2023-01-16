const decrementBtn = document.querySelector('button[data-action="decrement"]');
const incrementBtn = document.querySelector('button[data-action="increment"]');
const value = document.getElementById("value");

let counterValue = 0;


const add = () => {
  value.textContent = counterValue += 1;
};

const sub = () => {
  value.textContent = counterValue -= 1;
};

decrementBtn.addEventListener("click", sub);
incrementBtn.addEventListener("click", add);
