let i = "";
let operation;
let firstExpression = true;
let firstNumber

function addClickedNumber(n){
    i+=n;
}
function setOperation(op){

    if (firstExpression === false){
        console.log("Error");
    }else {
        firstExpression = false;
        operation = op;
        firstNumber = i;
        i = "";
    }

}
function doMath(){
    let result;
    let secondNumber = parseInt(i);
    switch (operation){
        case "+" : result = parseInt(firstNumber) + secondNumber;break;
        case "*" : result = parseInt(firstNumber) * secondNumber;break;
        case "-" : result = parseInt(firstNumber) - secondNumber;break;
        case "/" : result = parseInt(firstNumber) / secondNumber;break;
    }
    console.log(result);
    firstExpression = true;
    firstNumber = null;
    operation = null;
    i = "";
}