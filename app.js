function calculate() {
    var num1 = parseFloat(document.getElementById("num1").value);
    var num2 = parseFloat(document.getElementById("num2").value);
    var operater = document.getElementById("operater").value;
    var result;


    if (operater == '+') {
        result = num1 + num2;
    } else if (operater == '-') {
        result = num1 - num2;
    } else if (operater == '/') {
        result = num1 - num2;
    } else if (operater == '/') {
        result = num1 - num2;
    } else if (operater == '*') {
        result = num1 * num2;
    } else if (operater == '%') {
        result = num1 % num2;
    } else if (operater == '**') {
        result = num1 ** num2;
    } else {
        alert["Invalid"]
    }
    document.getElementById("result").value = result;
}

function clear(){
    result.value="";
   
}
