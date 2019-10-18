alert('Enter two numbers to see if first greater then second');
let firstNumber= prompt("Enter first number: ");
let secondNumber= prompt("Enter second number:");
let result=firstNumber>secondNumber;
if (result) {
    alert("firstNumber > secondNumber")
    
} else {
    if (firstNumber===secondNumber) {
        alert("firstNumber is equal to secondNumber")
        
    } else {
        alert("firstNumber < secondNumber")
    }
    
}