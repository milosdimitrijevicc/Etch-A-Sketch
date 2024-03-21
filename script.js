//Varijable
const grid = document.querySelector('.grid');

// Math.floor(Math.random() * 101);

//State
const sketchCreator = () => {
  let currentColor = "#3C9EE7";
  const getCurrentColor = () => currentColor;
  const setCurrentColor = (color) => currentColor = color;
  
  const setErasor = () => currentColor = '#ffffff';
  const setClear = () => currentColor = '#ffffff';

  //random color
  const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
  const randomByte = () => randomNumber(0, 255);
  const randomRGB = () => `rgb(${[randomByte(), randomByte(), randomByte()].join(',')})`
  const setRandomColor = () => currentColor = randomRGB();


  return {getCurrentColor, setCurrentColor, setErasor, setClear, randomNumber, randomByte, randomRGB, setRandomColor}
}
const game = sketchCreator();



//Kreiranje 16 divova 
const createGrid = (number) =>{

  for (let i = 0; i < number; i++) {
    for (let j = 0; j < number; j++) {
      grid.style.display = 'grid';
      grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
      grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;

      const cell = document.createElement('div');
      cell.classList.add('cell');
      grid.appendChild(cell);
  
      cell.addEventListener('mouseover' , function(){
        cell.style.backgroundColor = game.getCurrentColor();
      })
    }
  }
};

createGrid(4);

// const range = document.querySelector('.inputRange');
// const value = document.querySelector('.currentGridText');
// console.log(range.value);
// value.textContent = range.value;

const value = document.querySelector("#value");
const input = document.querySelector("#rangeInput");
value.textContent = input.value;
input.addEventListener("input", (event) => {
  value.textContent = event.target.value;
});

