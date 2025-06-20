// Function to handle operator button presses
var newLine = true;
var value1;
var currentOperator;

// Function to handle operator button presses
function digitBtnPressed(button) {
    if (newLine) {
        document.getElementById("inputBox").value = button;
        newLine = false;
    }else{
        var currentValue = document.getElementById("inputBox").value;
    document.getElementById("inputBox").value= currentValue + button;
    }  

}
//Event handler for when AC button is pressed
function btnACPressed() {
    document.getElementById("inputBox").value = 0;
    newLine = true
}

function operatorBtnPressed(operator) {
    currentOperator = operator;
    value1 = parseInt(document.getElementById("inputBox").value);
    newLine = true;    
}

//Event handler for when the equals button is pressed
function equalBtnPressed(){
    var value2 = parseInt(document.getElementById("inputBox").value);
    var result;
    var finalTotal;

    switch(currentOperator) {
        case "+":
            finalTotal = value1 + value2;
            break;
        case "-":
            finalTotal = value1 - value2;
            break;          
        case "/":
            finalTotal = value1 / value2;
            break;    
        case "*":
            finalTotal = value1 * value2;
            break;  
            case "*":
            finalTotal = value1 * value2;
            break;
        case "%":
            // Percentage of value1 (e.g., 50 % 10 = 5)
            finalTotal = value1 * (value2 / 100);
            break;
        case "sqrt":
            // Square root of value1
            finalTotal = Math.sqrt(value1);
            break;
        case "cbrt":
            // Cube root of value1
            finalTotal = Math.cbrt(value1);
            break;
        case "squared":
            // Square of value1
            finalTotal = value1 * value1;
            break;
            default:
                finalTotal = value2
    }
    inputBox.value = finalTotal;
    value1 = 0;
    newLine = true;

    }
     document.getElementById("inputBox").value = finalTotal;
     value1 = 0;
        newLine = true;


