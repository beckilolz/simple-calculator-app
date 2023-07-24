Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}

function buttonClicked() {
    document.getElementById('happy-frog').style.display = 'none';
    document.getElementById('sad-cat').style.display = 'none';
    document.getElementById("operation").innerHTML = "";
    const operations = ["+", "-", "*", "/", "**", "sqrt", "log"];
    const num1 = parseFloat(prompt("What is your first number?").replaceAll(" ", ""));
    const operand = prompt("What is your operand? (+, -, *, /, **, sqrt, log)").replaceAll(" ", "")
    if (!operations.includes(operand)) {
        document.getElementById('sad-cat').style.display = 'inline';
        throw new Error("This operand (" + operand + ") is not valid!");
    }
    let num2 = 10;
    if (!(operand == "sqrt" ||operand == "log")){
        num2 = parseFloat(prompt("What is your second number?").replace(" ", ""));
    }
    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('sad-cat').style.display = 'inline';
        throw new Error("One or more of your numbers was not a number!");
    }
    if (num2 == 0 && operand == "/") {
        document.getElementById('sad-cat').style.display = 'inline';
        throw new Error("This is impossible, you cannot divide by zero");
    }

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
        case "sqrt":
            result = Math.sqrt(num1);
            break;
        case "log":
            result = Math.log10(num1);
            break;
    }
    if (result == null || isNaN(result)) {
        document.getElementById('sad-cat').style.display = 'inline';
        throw new Error("I don't know what happened")
    }
    if (operand == "sqrt" || operand == "log") {
        let dp = 10;
        var decimals = result - Math.floor(result);
        try {
            var decimalPlaces = decimals.toString().split('.')[1].length;
        } catch (error) {
            dp = 0;
        }
        
        if (decimalPlaces > 10) {
            decimalPlaces = 10;
        }
        result = result.toFixed(decimalPlaces);
    }

    if (operand == "sqrt") {
        document.getElementById("operation").innerHTML = operand + " " + num1 + " = " + result;
    }
    else {
        document.getElementById("operation").innerHTML = num1 + " " + operand + " " + num2 + " = " + result;
    }
    document.getElementById('happy-frog').style.display = 'inline';
}

function script() {
    document.getElementById('happy-frog').style.display = 'none';
    document.getElementById('sad-cat').style.display = 'none';
}