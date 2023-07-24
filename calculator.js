Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}


function buttonClicked() {
    const operations = ["+", "-", "*", "/", "**", "sqrt", "log"];
    const num1 = parseFloat(prompt("What is your first number?").replaceAll(" ", ""));
    const operand = prompt("What is your operand? (+, -, *, /, **)").replaceAll(" ", "")
    if (!operations.includes(operand)) throw new Error("This operand (" + operand + ") is not valid!");
    const num2 = parseFloat(prompt("What is your second number?").replace(" ", ""));
    if (isNaN(num1) || isNaN(num2)) throw new Error("One or more of your numbers was not a number!");
    if (num2 == 0 && operand == "/") throw new Error("This is impossible, you cannot divide by zero");

    let result;
    switch (operand) {
        case "+":
            result = num1 + num2;
            break;
        case "-":
            result = num1 - num2;
            break;
        case "*":
            result = num1 * num2;
            break;
        case "/":
            result = num1 / num2;
            break;
        case "**":
            result = num1 ** num2;
            break;
    }
    if (result == null) throw new Error("I don't know what happened")
    if (operand == "sqrt" || operand == "log") {
        let dp = 10;
        var decimals = result - Math.floor(result);
        var decimalPlaces = decimals.toString().split('.')[1].length;
        if (decimalPlaces > 10) {
            decimalPlaces = 10;
        }
        result = result.toFixed(decimalPlaces);
    }
    
    alert("Your answer is: " + result);
}

buttonClicked();
