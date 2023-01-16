const input = document.getElementById("validation-input");
const dataLength = Number(input.dataset.length);

console.log(dataLength);

input.addEventListener("blur", func);

function func() {
  if (dataLength === input.value.length) {
    input.classList.add("valid");
  } else input.classList.replace("valid", "invalid");
}
