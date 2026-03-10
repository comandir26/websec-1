function calc() {
    var result;
    var num1 = document.getElementById("val1").value;
    var num2 = document.getElementById("val2").value;
    var operation = document.getElementById("operation").value;

    num1 = parseFloat(num1);
    num2 = parseFloat(num2);

    if (isNaN(num1) || isNaN(num2)) {
        document.getElementById("result").innerHTML = "Необходимо ввести числа, а не буквы или символы";
        return;
    }

    switch (operation) {
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
            if (num2 === 0){
                document.getElementById("result").innerHTML = "Не делите на 0";
                return;  
            }
            result = num1 / num2;
    }

    document.getElementById("result").innerHTML = num1 + " " + operation + " " + num2 + " = " + result;
}