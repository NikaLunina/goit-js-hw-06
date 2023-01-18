const input = document.getElementById("name-input");
const output = document.getElementById("name-output");

input.addEventListener("input", (event) => {
  output.textContent = event.currentTarget.value;
  if (output.textContent === "" || output.textContent.charAt(0) === " ") {
    output.textContent = "Anonymous";
  }
});
