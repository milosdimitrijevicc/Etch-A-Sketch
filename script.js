const grid = document.querySelector('.grid');
const randomButton = document.querySelector('.randomMode');

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
  const randomRGB = () => `rgb(${[randomByte(), randomByte(), randomByte()].join(',')})`;
  const setRandomColor = () => currentColor = randomRGB();

  return {getCurrentColor, setCurrentColor, setErasor, setClear, randomNumber, randomByte, randomRGB, setRandomColor}
}
const game = sketchCreator();

//Citanje vrednosti sa range elememnta 
const value = document.querySelector("#value");
const input = document.querySelector("#rangeInput");
value.textContent = `${input.value} x ${input.value}`;
input.addEventListener("input", (event) => {
  value.textContent = `${event.target.value} x ${event.target.value}`;
  createGrid(parseInt(event.target.value));
});


//Kreiranje grida
const createGrid = (number) =>{
  grid.innerHTML = ''; // Clear the grid before re-creating it
  
  grid.style.display = 'grid';
  grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
  grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;

  let cell;

  for (let i = 0; i < number * number; i++) {
    cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);

   //Starting point  
   cell.addEventListener('mouseover', function(){
    cell.style.backgroundColor = game.getCurrentColor();
  });



  }

 
//Random color
  randomButton.addEventListener('click' , function(){
    game.setCurrentColor(game.randomRGB())
    console.log(game.randomRGB());
    console.log(game.getCurrentColor());
    cell.addEventListener('mouseover', function(){
      cell.style.backgroundColor = game.getCurrentColor();
    });
  });
};

createGrid(parseInt(value.textContent));







































// const grid = document.querySelector('.grid');

// //State
// const sketchCreator = () => {
//   let currentColor = "#3C9EE7";
//   const getCurrentColor = () => currentColor;
//   const setCurrentColor = (color) => currentColor = color;
//   const setErasor = () => currentColor = '#ffffff';
//   const setClear = () => currentColor = '#ffffff';

//   //random color
//   const randomNumber = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
//   const randomByte = () => randomNumber(0, 255);
//   const randomRGB = () => `rgb(${[randomByte(), randomByte(), randomByte()].join(',')})`;
//   const setRandomColor = () => currentColor = randomRGB();


//   return {getCurrentColor, setCurrentColor, setErasor, setClear, randomNumber, randomByte, randomRGB, setRandomColor}
// }
// const game = sketchCreator();

// //Citanje vrednosti sa range elememnta 
// const value = document.querySelector("#value");
// const input = document.querySelector("#rangeInput");
// value.textContent = input.value;
// input.addEventListener("input", (event) => {
//   value.textContent = event.target.value;
// });


// //Kreiranje grida
// const createGrid = (number) =>{

//   for (let i = 0; i < number; i++) {
//     for (let j = 0; j < number; j++) {
//       grid.style.display = 'grid';
//       grid.style.gridTemplateColumns = `repeat(${number}, 1fr)`;
//       grid.style.gridTemplateRows = `repeat(${number}, 1fr)`;

//       const cell = document.createElement('div');
//       cell.classList.add('cell');
//       grid.appendChild(cell);
  
//       cell.addEventListener('mouseover' , function(){
//         cell.style.backgroundColor = game.getCurrentColor();
//       })
//     }
//   }
// };

// createGrid(value.textContent);





