Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}

/*fetch("myText.txt")
  .then((res) => res.text())
  .then((text) => {
    // do something with "text"
   })
  .catch((e) => console.error(e));*/

function buttonClicked() {
    document.getElementById('happy-frog').style.display = 'none';
    document.getElementById('sad-cat').style.display = 'none';
    document.getElementById("operation").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    const operations = ["+", "-", "*", "/", "sq", "sqrt", "log"];
    const num1beforeinput = prompt("What is your first number?").replaceAll(" ", "");
    if (num1beforeinput.length > 21) {
        document.getElementById('sad-cat').style.display = 'inline';
        document.getElementById("operation").innerHTML = num1beforeinput;
        document.getElementById('message').innerHTML = "Number 1 was too long (more than 20 chars)";
        throw new Error("Number 1 was too long (more than 20 chars)");
    }
    const num1 = parseFloat(num1beforeinput);
    let r = new RegExp(/^-?[0-9]\d*(\.\d+)?$/);
    if (!r.test(num1beforeinput)) {
        document.getElementById('sad-cat').style.display = 'inline';
        document.getElementById("operation").innerHTML = num1beforeinput;
        document.getElementById('message').innerHTML = "One or more of your numbers was not a number!";
        throw new Error("One or more of your numbers was not a number!");
    }

    const operand = prompt("What is your operand? (+, -, *, /, sq, sqrt, log)").replaceAll(" ", "")
    if (!operations.includes(operand)) {
        document.getElementById('sad-cat').style.display = 'inline';
        document.getElementById('message').innerHTML = "This operand (" + operand + ") is not valid!";
        throw new Error("This operand (" + operand + ") is not valid!");
    }
    
    let num2 = 10;
    if (!(operand == "sqrt" || operand == "log" || operand == "sq")){
        const num2beforeinput = prompt("What is your second number?").replaceAll(" ", "");
        if (num2beforeinput.length > 21) {
            document.getElementById('sad-cat').style.display = 'inline';
            document.getElementById("operation").innerHTML = num2beforeinput;
            document.getElementById('message').innerHTML = "Number 2 was too long (more than 20 chars)";
            throw new Error("Number 2 was too long (more than 20 chars)");
        }

        num2 = parseFloat(num2beforeinput);
        
        if (!r.test(num2beforeinput)) {
            document.getElementById('sad-cat').style.display = 'inline';
            document.getElementById("operation").innerHTML = num2beforeinput;
            document.getElementById('message').innerHTML = "One or more of your numbers was not a number!";
            throw new Error("One or more of your numbers was not a number!");
        }
    }

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById('sad-cat').style.display = 'inline';
        document.getElementById("operation").innerHTML = num1 + " and " + num2;
        document.getElementById('message').innerHTML = "One or more of your numbers was not a number!";
        throw new Error("One or more of your numbers was not a number!");
    }

    if (num2 == 0 && operand == "/") {
        document.getElementById('sad-cat').style.display = 'inline';
        document.getElementById('message').innerHTML = "This is impossible, you cannot divide by zero";
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
        case "sq":
            result = num1 ** 2;
            break;
        case "sqrt":
            result = Math.sqrt(num1);
            break;
        case "log":
            result = Math.log10(num1);
            break;
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
    else if (operand == "sq") {
        document.getElementById("operation").innerHTML = num1 + " squared = " + result;
    }
    else {
        document.getElementById("operation").innerHTML = num1 + " " + operand + " " + num2 + " = " + result;
    }

    if (result == null || isNaN(result)) {
        document.getElementById('sad-cat').style.display = 'inline';
        document.getElementById('message').innerHTML = "Result is null or NaN";
        throw new Error("I don't know what happened");
    }
    else {
        document.getElementById('happy-frog').style.display = 'inline';
    }
    
}

function script() {
    document.getElementById('happy-frog').style.display = 'none';
    document.getElementById('sad-cat').style.display = 'none';
}