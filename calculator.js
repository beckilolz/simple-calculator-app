function indexes(source, find) {
    if (!source) {
      return [];
    }
    // if find is empty string return all indexes.
    if (!find) {
      // or shorter arrow function:
      // return source.split('').map((_,i) => i);
      return source.split('').map(function(_, i) { return i; });
    }
    var result = [];
    for (i = 0; i < source.length; ++i) {
      // If you want to search case insensitive use 
      // if (source.substring(i, i + find.length).toLowerCase() == find) {
      if (source.substring(i, i + find.length) == find) {
        result.push(i);
      }
    }
    return result;
}

Number.prototype.countDecimals = function () {
    if(Math.floor(this.valueOf()) === this.valueOf()) return 0;
    return this.toString().split(".")[1].length || 0; 
}

let locale = "eng";
let locale_eng = {}

fetch("locale_eng.txt")
  .then((res) => res.text())
  .then((text) => {
        const obj = indexes(text, "\n");
        for (let occ in obj) {
            const number = obj[occ];
            let words;
            if (occ == 0) {
                words = text.substring(0, number);
            } else {
                words = text.substring(obj[occ-1], number); 
            }

            const where_equals = indexes(words, "=");
            const setting_name = words.substring(0, where_equals[0]);
            const setting_value = words.substring(where_equals[0]+1, words.length).replaceAll('"', '');
            locale_eng[setting_name] = setting_value;
       }
   })
  .catch((e) => console.error(e));

function buttonClicked() {
    document.getElementById('happy-frog').style.display = 'none';
    document.getElementById('sad-cat').style.display = 'none';
    document.getElementById("operation").innerHTML = "";
    document.getElementById("message").innerHTML = "";
    const operations = ["+", "-", "*", "/", "sq", "sqrt", "log"];
    let message;
    if (locale == "eng") {
        message = locale_eng["number_1_text"];
    }

    const num1beforeinput = prompt(message).replaceAll(" ", "");
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