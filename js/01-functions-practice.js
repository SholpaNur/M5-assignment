//STEP 1
let halfNumber = (number) => {
    let result = number/2
    console.log(`Half of ${number} is ${result}.`)
    return result
} 
//STEP 2
let squareNumber = (number) => {
    let result = number*number
    console.log(`The result of squaring the number ${number} is ${result}.`)
    return result
} 
//STEP 3
let percentOf = (number1, number2) => {
    let result = number1/number2*100
    console.log(`${number1} is ${result}% of ${number2}.`)
    return result
} 
//STEP 4
let findModulus = (number1, number2) => {
    let result = number2%number1
    console.log(`${result} is the modulus of ${number1} and ${number2}.`)
    return result
} 
//STEP 5



// halfNumber(23);
// squareNumber(12);
// percentOf(4, 10);
// findModulus(5, 28);
