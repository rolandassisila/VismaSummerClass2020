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
