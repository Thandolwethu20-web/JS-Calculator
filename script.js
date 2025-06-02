// Function to handle operator button presses
var newLine = true;

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