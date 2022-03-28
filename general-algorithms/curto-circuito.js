// falsy values = 0, -0, false, "", undefinied, null, NaN
// truthy values = all the others

let n = 0;

n = n || 10; // n is equal to N or 10; 
console.log(n)

const isValid = false;
isValid && console.log("Valid") // if isValid is true this line will be read
isValid || console.log("Not valid")