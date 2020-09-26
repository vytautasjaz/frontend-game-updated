const btnRight = document.getElementById('right');
const btnForward = document.getElementById('forward');
const finger = document.getElementById('finger');
const table = document.getElementById('table');

let fingerRotation = 0;
let fingerX = 5;
let fingerY = 5;
let increment = 30;

let movementX = 1;
let movementY = 1;

//generating Game Table

let generateTable = () => {
  let table = '';
  let tableContent = '';
  for (let i = 1; i <= 10; i++) {
    tableContent += generateSingleleRow();
  }
  table = `<div class = "table">${tableContent}</div>`;
  return table;
};

let generateSingleleRow = () => {
  let singleRow = '';
  let innerDivs = '';
  for (let k = 1; k <= 10; k++) {
    innerDivs += '<div class = "singleBlock"></div>';
  }
  singleRow = `<div class = "singleRow">${innerDivs}</div>`;
  return singleRow;
};

let newTable = generateTable();
table.innerHTML = newTable;

//event to move finger acording to chosen direction
btnForward.addEventListener('click', () => {
  if (fingerRotation === 0 && movementX > 0 && movementX < 10) {
    fingerX += increment;
    movementX += 1;
    finger.style.left = `${fingerX}px`;
  } else if (fingerRotation === 90 && movementY > 0 && movementY < 10) {
    fingerY += increment;
    movementY += 1;
    finger.style.top = `${fingerY}px`;
  } else if (fingerRotation === 180 && movementX > 1 && movementX <= 10) {
    fingerX -= increment;
    movementX -= 1;
    finger.style.left = `${fingerX}px`;
  } else if (fingerRotation === 270 && movementY > 1 && movementY <= 10) {
    fingerY -= increment;
    movementY -= 1;
    finger.style.top = `${fingerY}px`;
  }
});

// event to rotate finger
btnRight.addEventListener('click', () => {
  fingerRotation += 90;
  if (fingerRotation === 360) {
    fingerRotation = 0;
  }
  finger.style.transform = `rotate( ${fingerRotation}deg)`;
  console.log(`Rotation ${fingerRotation}, x - ${fingerX}, y - ${fingerY}`);
});
