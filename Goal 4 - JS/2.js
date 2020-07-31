for (let num = 1; num <= 100; num ++ ) {

    let checkForThree = num % 3;
    let checkForFive = num % 5;
    let result = '';
    
if (checkForThree === 0)
    result += "Fizz";

if (checkForFive == 0)
    result += "Buzz";

    console.log(result || num );
}  