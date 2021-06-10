// Identify the result for each of the following statements:
// 'JavaScript'[8] = p
// "Wonderful".length = 9
// There's no code snippet for this one, just try it on your own with old-fashioned pen and paper!

// The length method returns how many characters are in a string.However, the method will NOT give us the length of a number.If num = 1001, num.length returns undefined rather than 4.
// Use type conversion to print the length(number of digits) of an integer.

let num = 1001;



//Use type conversion to print the length (number of digits) of an integer.

if (String(num).includes(num)) {
  console.log(String(num).length + " intigers");
}





//Follow up: Print the number of digits in a DECIMAL value (e.g. num = 123.45 has 5 digits but a length of 6).

let twoDecimalPlaces = num.toFixed(2);
twoDecimalPlaces;





//Experiment! What if num could be EITHER an integer or a decimal?  Add an if/else statement so your code can handle both cases.
