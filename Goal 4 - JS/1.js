const colors = require('colors');

const colorsList = [colors.green, colors.yellow, colors.red, colors.blue]
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}
let num = '';
let oldColor = 0; 

for (let i = 0; i <= 6; i += 1) {
  num = num + "#";
  let newColor = findNewColor(oldColor);
  console.log(colorsList[newColor](num));
  oldColor = newColor;
}

function findNewColor(oldColor) {
  let newColor = getRandomNumber(0, colorsList.length);
  while (newColor == oldColor) {
    newColor = getRandomNumber(0, colorsList.length);
  }
  return newColor;
}




