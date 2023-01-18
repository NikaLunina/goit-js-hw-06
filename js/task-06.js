const input = document.getElementById("validation-input");
const dataLength = Number(input.dataset.length);

console.log(dataLength);

input.addEventListener("blur", func);

function func() {
  if (dataLength === input.value.length) {
    removeClass("invalid");
    addClass("valid");
  } else {
    removeClass("valid");
    addClass("invalid");
  }
  //   input.classList.add("valid");
  //   if (input.classList.contains('invalid')) {
  // 		input.classList.remove('invalid')
  // 	}
  // } else {
  // 	if (input.classList.contains('valid')) {
  // 		input.classList.remove('valid')
  // 	}
  // 	input.classList.add('invalid')
  // }
}

function addClass(el) {
  input.classList.add(el);
}

function removeClass(el) {
  input.classList.remove(el);
}
