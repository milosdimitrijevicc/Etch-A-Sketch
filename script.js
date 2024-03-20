const grid = document.querySelector('.grid');
const cell = document.querySelector('.cell');


const sketchCreator = () => {
  
}






for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    grid.appendChild(cell);
  }
}


cell.addEventListener('mouseover' , function(){
  cell.style.backgroundColor = '#3C9EE7';
})