//Without ES6 methods

function range(x, y) {
  let myArray = [];
  for (var i = x; i < y; i += 1) {
    myArray.push(i);
  }
  return myArray;
};
console.log(range(6, 20)); 

//ES6

function range(x, y) {
  return Array(y - 1 - x + 1).fill().map((_, idx) => x + idx)
}
var result = range(2, 8); 
console.log(result);