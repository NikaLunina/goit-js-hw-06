function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

const input = document.querySelector("[type=number]")
const createBtn = document.querySelector('button[data-action="create"]')
const destroyBtn = document.querySelector('button[data-action="destroy"]')
const boxes = document.getElementById('boxes')

createBtn.addEventListener('click', ()=> {
 const amount = input.value
  createBoxes(amount)
})

destroyBtn.addEventListener('click', ()=>{
  boxes.innerHTML = ""
})
function createBoxes(amount){
  let newBoxes = []
  const firstboxSize = 30;
  for (let i = 0; i < amount; i++) {
    const size = firstboxSize + i * 10;
    const div = document.createElement('div');
    div.style.width = `width: ${size}px`; 
    div.style.heigth = `height: ${size}px`;
    div.style.backgroundColor = getRandomHexColor()
   newBoxes.push(div)
  }
  boxes.append(...newBoxes);

}
