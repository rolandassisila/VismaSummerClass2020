<<<<<<< HEAD
const colors = require('colors');

const colorsList = [colors.green, colors.yellow, colors.red, colors.blue]
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}
let num = '';
let oldColor = 0; 

=======
var colors = require('colors');

var colorsList = [colors.green, colors.yellow, colors.red, colors.blue]
function getRandomNumber(min, max) {
    return Math.floor((Math.random() * max) + min);
}
var num = '';
var oldColor = 0; 
>>>>>>> goal-3
for (let i = 0; i <= 6; i += 1) {
  num = num + "#";
  let newColor = findNewColor(oldColor);
  console.log(colorsList[newColor](num));
  oldColor = newColor;
}
<<<<<<< HEAD

=======
>>>>>>> goal-3
function findNewColor(oldColor) {
  let newColor = getRandomNumber(0, colorsList.length);
  while (newColor == oldColor) {
    newColor = getRandomNumber(0, colorsList.length);
  }
  return newColor;
}





