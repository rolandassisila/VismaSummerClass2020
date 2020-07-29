for ( var num = 1; num <= 100; num ++ ) {

  // check if number divides by 3 or 5
  var checkForThree = num % 3;
  var checkForFive = num % 5;

  // if number divides by 3 and 5
  if ( (checkForThree == 0) && (checkForFive == 0) ) 
  	console.log( "FizzBuzz");

  // if divides by 3 print fizz
  else if (checkForThree == 0)
    console.log( "Fizz");

  // if divides by 5 print buzz
  else if (checkForFive == 0)
    console.log( "Buzz");

  // if doesnt divide
  else
    console.log( num );
}  