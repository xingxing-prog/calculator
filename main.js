
var numbers = document.querySelectorAll('.number');
var input = document.querySelector('input[type="text"]');
var clear = document.querySelector('.clear');

function display(){

    numbers.forEach((button)=>{
        button.addEventListener('click', (e)=>{
            console.log(e);
            input.value = button.value;
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

console.log(divide(3, 0));

