

const number1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator ( either +, -, *, /, sq, sqrt or log): ');


let number2;
if (operator != 'sq','sqrt','log') {
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
else if (operator == 'sq') {
    result = number1**2
}
else if (operator == 'sqrt') {
    result = Math.sqrt(number1)
}
else if (operator == 'log') {
    result = Math.log10(number1)
}

if (operator != 'sq','sqrt','log') {
    console.log(`${number1} ${operator} ${number2} = ${result}`);
}

else if (operator == 'sq','sqrt','log') {console.log(`${number1} ${operator} = ${result}`);
}
