
var buttons = document.querySelectorAll('button');
var input = document.querySelector('input[type="text"]');
var clear = document.querySelector('.clear');
var operators = document.querySelectorAll('.operator');

var number1 ="";
var number2 = "";
var operator = "";
var displayItem = "";

function init(){
    clear.addEventListener('click', ()=>{
        number1 ="";
        number2 ="";
        displayItem ="";
        input.value = '0';
    });
}

init();

function display(){

    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>{

            if(e.target.className == "clear"){
                
                input.value = 0;
                init();
            }

            else if (e.target.className == "number"){
                displayItem += e.target.value;
            }

            else if(e.target.className == "operator"){
              
                number1 = displayItem;
                operator = e.target.value;
                displayItem += operator;
            }

            else if(e.target.className == "="){
                const result = operate(operator, number1, number2);
                displayItem = result;

            }


            console.log(e.target);
            //displayItem += e.target.value;
            console.log(number1);
             
            input.value = displayItem;
        })
    })
}



display();

const add = function (a, b){
    return a + b;
};

const subtract = function(a, b){
    return a - b;
};


const multiply = function(a, b){
    return a * b;
}

const divide = function(a, b){
    if (b === 0){
        return "Error";
    }
    else{
        return a/b;
    }
}

console.log(multiply(-3, -21));

function operate(operator, number1, number2){
    if(operator == "+"){
        return add(parseInt(number1), parseInt(number2));
    }
    else if(operator == "-"){
        return subtract(parseInt(number1), parseInt(number2));
    }
    else if(operator == "×"){
        return multiply(parseInt(number1), parseInt(number2));
    }
    else if(operator == "÷"){
        return divide(parseInt(number1), parseInt(number2));
    }

}





const result = operate("×", "12", "3");
console.log(result);
