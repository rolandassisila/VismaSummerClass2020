var colors = require('colors');

var colorsList = [colors.green, colors.yellow, colors.red, colors.blue]
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}
var num = '';
var oldColor = 0; 
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





