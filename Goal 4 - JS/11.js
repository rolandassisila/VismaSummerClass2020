var arr = [10, 6, [4, 8], 3, [6, 5, [9]]]

function arraySum(arr) {
  var sum = 0;
  for (var i = 0; i < arr.length; i++) {
     if (arr[i] instanceof Array) { 
         sum += arraySum(arr[i]);
     }
     if (arr[i] === Math.round(arr[i])) {
         sum += arr[i];
     }   
  }
 return sum;
}

console.log(arraySum(arr));