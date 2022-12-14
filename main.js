
var buttons = document.querySelectorAll('button');
var input = document.querySelector('input[type="text"]');
var clear = document.querySelector('.clear');
var operators = document.querySelectorAll('.operator');


var number1 ="";
var number2 = "";
var operator = "";
var displayItem = "";
var number = "";

function init(){
    clear.addEventListener('click', ()=>{
        number1 ="";
        number2 ="";
        displayItem ="";
        number = "";
        input.value = '0';
    });
}

init();

function display(){

    buttons.forEach((button)=>{
        button.addEventListener('click', (e)=>{

            if(e.target.className == "clear"){
            
                displayItem = "0";
                init();
            }

            else if(e.target.className == "cancel"){
                if(number !== ""){
                    number = number.substring(0, number.length-1);
                   
                }
                if(displayItem.length == 1){
                    displayItem = "0";
                }
                else{
                    displayItem = displayItem.substring(0, displayItem.length-1);
                }
                
            }

            else if(e.target.className == "negative"){
                if(!number.includes("-")){
                    number = e.target.value + number;
                    displayItem = e.target.value + displayItem;
                }
                else{
                    number = number.substring(1);
                    displayItem = displayItem.substring(1);
                }
                 
            }

            else if (e.target.className == "number"){
                if(input.value === "0"){
                    displayItem = e.target.value;
                }
                else{
                    displayItem += e.target.value; 
                }
              
                number += e.target.value;
                
              
            }

            else if(e.target.className == "decimal"){
                if(!number.includes(".")){
                    displayItem += e.target.value;
                    number += e.target.value;
                }
                
                
            }

            else if(e.target.className == "operator"){
              
                if(number1 === ""){
                    number1 = number;
                    number = "";
                }
                else if(number1 !== "" && operator !== ""){
                    number2 = number;
                    number = "";
                    
                    const result = operate(operator, number1, number2);
                    number1 = result;
                    displayItem =  result;
                    operator = e.target.value;
                }
                operator = e.target.value;
                if(number1 !== "")
                    displayItem += operator;
                else
                    displayItem ="0";
            }
            

            else if(e.target.className == "equal-sign"){
                if(operator !== "" && number !==""){
                    number2 = number;
                    number = "";
                    const result = operate(operator, number1, number2);

                    displayItem = result;
                    number = result.toString();
                    number2 = "";
                    number1 = "";
                    operator ="";
                   
                    
                }
               
            }

        
            //console.log(e.target);
            //displayItem += e.target.value;
            //console.log(number1);
            //console.log(number2);
            //console.log(operator);
             
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

const mod = function(a, b){
    return a % b;
}

console.log(mod(21, 3));

function operate(operator, number1, number2){
    if(operator == " + "){
        return add(parseFloat(number1), parseFloat(number2));
    }
    else if(operator == " - "){
        return subtract(parseFloat(number1), parseFloat(number2));
    }
    else if(operator == " ?? "){
        return multiply(parseFloat(number1), parseFloat(number2));
    }
    else if(operator == " ?? "){
        return divide(parseFloat(number1), parseFloat(number2));
    }

    else if(operator == " % "){
        return mod(parseFloat(number1), parseFloat(number2));
    }

}





const result = operate(" ?? ", "12" , "3");
console.log(result);
