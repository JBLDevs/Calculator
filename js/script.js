const One = document.querySelector('#one');
const Two = document.querySelector('#two');
const Three = document.querySelector('#three');
const Four = document.querySelector('#four');
const Five = document.querySelector('#five');
const Six = document.querySelector('#six');
const Seven = document.querySelector('#seven');
const Eight = document.querySelector('#eight');
const Nine = document.querySelector('#nine');
const Zero = document.querySelector('#zero');
const Doublezero = document.querySelector('#double-zero');
const Dot = document.querySelector('#point');
const Display = document.querySelector('#display'); //textbox for the main numbers display

/*Operators*/
const add = document.querySelector('#addition');
const sub = document.querySelector('#subtraction');
const div = document.querySelector('#division');
const mul = document.querySelector('#multiplication');
const equal = document.querySelector('#equal');
const del = document.querySelector('#delete');
const clear = document.querySelector('#clear');

const topdisplay = document.querySelector('.fnumber-container');
const change = document.querySelector('.container');

let currentNumber;
let firstNumber;
let operator;
let result;


//for automatic insert comma in every 3 digits number
function formatNumber(value) {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}



One.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Two.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Three.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Four.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Five.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Six.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Seven.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Eight.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Nine.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Zero.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Doublezero.addEventListener('click', function(e){
    e.preventDefault();  
    //Display.value += this.value;
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Dot.addEventListener('click', function(e){
    e.preventDefault();  

    if(!Display.value.includes('.')){
        Display.value += this.value;
    }
});






//Clear button
clear.addEventListener('click', function(e){
    e.preventDefault();  
    
    Display.value = Display.value.slice(0,0); //same with Display.value = '';

    const fnumber = document.querySelector('.fnumber');
        if(fnumber){ // if the fnumber is exist, then execute the fnumber.remove();
            fnumber.remove();
        }

    //Delete also the records after the calculations was made
    firstNumber = undefined;
    operator = undefined;
    result = undefined;
});


//Delete button
del.addEventListener('click', function(e){
    e.preventDefault();

    //Display.value = Display.value.slice(0,-1); 

    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue.slice(0, -1);    

    Display.value = formatNumber(newValue);

    /*if (newValue === '') {
        Display.value = '';
    } else {
        Display.value = formatNumber(newValue);
    }*/

    /*    if(Display.value == ''){
            //const fnumber = document.querySelector('.fnumber');
            //fnumber.textContent = fnumber.textContent.trim().slice(0,-1);

            const rawValue = Display.value.replace(/,/g, '');
            const newValue = rawValue.slice(0, -1);

            Display.value = newValue === ''
            ? ''    //if
            : formatNumber(newValue);   //else

        }/*

    /*
    //Delete also the records after the calculations was made
    firstNumber = undefined;
    operator = undefined;
    result = undefined;*/

});





//                  OPERATORS

add.addEventListener('click', function(Add){
    Add.preventDefault(); 
    //currentNumber = Number(Display.value); //get the value from display of whatever number/s select by the user
    currentNumber = Number(Display.value.replace(/,/g, '')); //
    const newOperator = Add.target.value; //get the string (+) value and convert to numeric operator
    
        const fnumber = document.querySelector('.fnumber'); //make a null element using DOM
        if(!fnumber){ //for the first process of calculation 
            firstNumber = currentNumber; //transfer to another variable to make calculate later on

            operator = newOperator;
            topdisplay.innerHTML = "<div class='fnumber'></div>"; //create another element to have display for the two variable
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`; //display for the two variable
            }
            
        else if(Display.value !== ''){ //to calculate the first and second number if ever to click the + instead of =
            const secondNumber = currentNumber; //transfer the next number input to another variable
                        
                        if(operator==='+'){ //conditional comparison which makes true and led to process below 
                            firstNumber = firstNumber + secondNumber; //add the two variables and use also the first number variable to display the result
                        }
                        else if(operator==='-'){
                            firstNumber = firstNumber - secondNumber;
                        }
                        if(operator==='*'){
                            firstNumber = firstNumber * secondNumber;
                        }
                        if(operator==='/'){
                            firstNumber = firstNumber / secondNumber;
                        }
            //firstNumber = formatNumber(String(firstNumber));
            operator = newOperator;
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`; //display the two variables
        }
            
        else{  //to change the operator into + if ever the current operator is "*" or "-"" or "/""
        operator = newOperator;
        // still display the first number and the changed operator
        document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`;
        }
         
    Display.value = ''; //after all the process will automatic empty the "display"
    
});


sub.addEventListener('click', function(Sub){
    Sub.preventDefault();
    currentNumber = Number(Display.value.replace(/,/g, ''));
    const newOperator = Sub.target.value;
    
        const fnumber = document.querySelector('.fnumber'); //make a null element using DOM
        if(!fnumber){
            firstNumber = currentNumber;
            operator = newOperator;
            topdisplay.innerHTML = "<div class='fnumber'></div>";
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`;
            }
            
            else if(Display.value !== ''){
                const secondNumber = currentNumber;
                        if(operator==='-'){
                            firstNumber = firstNumber - secondNumber;
                        }else if(operator==='+'){
                            firstNumber = firstNumber + secondNumber;
                        }else if(operator==='*'){
                            firstNumber = firstNumber * secondNumber;
                        }else if(operator==='/'){
                            firstNumber = firstNumber / secondNumber;
                        }
                operator = newOperator;
                document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`;
            }
            
            else{
                operator = newOperator;
                document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`;
            }

    Display.value = '';
});


mul.addEventListener('click', function(Mul){
    Mul.preventDefault();
    currentNumber = Number(Display.value.replace(/,/g, ''));
    const newOperator = Mul.target.value

        const fnumber = document.querySelector('.fnumber');
        if(!fnumber){
            firstNumber = currentNumber;
            operator = newOperator;
            topdisplay.innerHTML = "<div class='fnumber'></div>";
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} x`;
        }
            
        else if(Display.value !== ''){
            const secondNumber = currentNumber;
                    if(operator === '*'){
                        firstNumber = firstNumber * secondNumber;
                    }else if(operator === '-'){
                        firstNumber = firstNumber - secondNumber;
                    }else if(operator === '+'){
                        firstNumber = firstNumber + secondNumber;
                    }else if(operator === '/'){
                        firstNumber = firstNumber / secondNumber;
                    }
            operator = newOperator;
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} x`;
        }

        else{
            operator = newOperator;
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} x`;
        }
            
    Display.value = "";
});


div.addEventListener('click', function(Div){
    Div.preventDefault();
    currentNumber = Number(Display.value.replace(/,/g, ''));
    const newOperator = Div.target.value;

        const fnumber = document.querySelector('.fnumber');
        if(!fnumber){
            firstNumber = currentNumber;
            operator = newOperator;
            topdisplay.innerHTML = "<div class='fnumber'></div>";
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`;
        }
        
        else if(Display.value !== ''){
            const secondNumber = currentNumber;
                if(operator === '/'){
                    firstNumber = firstNumber / secondNumber;
                }else if(operator === '+'){
                    firstNumber = firstNumber + secondNumber;
                }else if(operator === '-'){
                    firstNumber = firstNumber - secondNumber;
                }else if(operator === '*'){
                    firstNumber = firstNumber * secondNumber;
                }
            operator = newOperator;
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`;
        }

        else{
            operator = newOperator;
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`;
        }
    Display.value = '';
});



equal.addEventListener('click', function(e){
    e.preventDefault();

    if (Display.value === '' ||
        firstNumber === undefined ||
        operator === undefined) {
        return;
    }

    const secondNumber = Number(
        Display.value.replace(/,/g, '')
    );

    if (operator === '+') {
        result = firstNumber + secondNumber;
    } else if (operator === '-') {
        result = firstNumber - secondNumber;
    } else if (operator === '*') {
        result = firstNumber * secondNumber;
    } else if (operator === '/') {
        result = firstNumber / secondNumber;
    }

    Display.value = formatNumber(String(result));
    const fnumber = document.querySelector('.fnumber');

    if (fnumber) {
        fnumber.remove();
    }
    
});


























/*
    equal.addEventListener('click', function(e){
        e.preventDefault();
        
        // If there's no record, the process will not work
        if(Display.value === '' || firstNumber === undefined || operator === undefined) return;

        topdisplay.innerHTML = "<div class='fnumber'></div>";
        const fnumber = document.querySelector('.fnumber');

            const secondNumber = Number(Display.value)
            if(operator === '+'){
                result = firstNumber + secondNumber;
            }else if(operator === '-'){
                result = firstNumber - secondNumber;
            }else if(operator === '*'){
                result = firstNumber * secondNumber;
            }else if(operator === '/'){
                result = firstNumber / secondNumber;
            }

        //Display.value = result;
        Display.value = formatNumber(String(result));

        fnumber.remove();
    });



/*
let firstnum = "12";
let secondnum = 3;
let thirdnum = Number(firstnum) + secondnum; 

console.log(thirdnum);*/