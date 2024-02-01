const calculate = ( a, b, operation) =>{
    return operation (a,b);
}



const addition=calculate (3, 4,  function(num1, num2){
    return num1+num2;
});
console.log(addition);

const subtraction = (a,b) => a-b;

const subResult = calculate(8, 3, subtraction);

console.log(subResult);


function multiply(a,b){
    return a*b;
}
const mulResult = calculate(3,4,multiply);

console.log(mulResult);