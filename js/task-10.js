function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("[type=number]")
const createBtn = document.querySelector("[data-create]")
const destroyBtn = document.querySelector("[data-destroy")
const boxes = document.getElementById('boxes')

createBtn.addEventListener('click', createBoxes)

destroyBtn.addEventListener('click', ()=>{
  boxes.innerHTML = ""
  input.value = "";
})
function createBoxes(amount){
  
  amount = input.value
  const firstboxSize = 30;
  for (let i = 0; i < amount; i +=1 ) {
    const size = firstboxSize + i * 10;
    const div = document.createElement('div');
    div.style.width = ` ${size}px`; 
    div.style.height = ` ${size}px`;
    div.style.backgroundColor = getRandomHexColor()
    boxes.appendChild(div)
  }
 

}
