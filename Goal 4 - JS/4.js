<<<<<<< HEAD
let numbers = [2, 6, 9, 15];

//Without ES6

function sum1(numbers) {
    let sum1 = 0;
    for (i = 0; i < numbers.length; i++) {
        sum1 = sum1 + numbers[i];
    }
    return sum1;
}

//With ES6


function sum2(numbers) {
    return numbers.reduce((a, b) => a + b, 0);
   }


console.log(sum1(numbers));
console.log(sum2(numbers));
=======
//Without ES6

function sum(arr) {
  var min = arr[0];
  var max = arr[1];
  return (max*(max+1) - (min-1)*min) / 2;
}

console.log(sum([2,5]));

//With ES6

/*
function sum(arr) {
   const min = Math.min(...arr)
   const max = Math.max(...arr)
   let list = [] 
   for(let i = min;i <= max; i++){
      list.push(i)
   }

   return list.reduce((prev, next) => prev + next);
}

console.log(sum([6, 20]));
*/
>>>>>>> goal-3
