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