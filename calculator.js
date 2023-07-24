

const number1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator ( either +, -, *, ^, ^2 or / ): ');


let number2;
if (operator != '^2') {
    number2 = parseFloat(prompt('Enter second number: '));
}

let result;

if (operator == '+') {
    result = number1 + number2;
}
else if (operator == '-') {
    result = number1 - number2;
}
else if (operator == '*') {
    result = number1 * number2;
}
else if (operator == '/') {
    result = number1 / number2;
}
else if (operator == '^') {
    result = number1 ** number2;
}
else if (operator == '^2') {
    result = number1**2
}

if (operator != '^2') {
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}

else {console.log(`${number1} ${operator} = ${result}`);
}
 