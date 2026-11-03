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


function formatNumber(value) {
    const parts = value.split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ',');
    return parts.join('.');
}



One.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Two.addEventListener('click', function(e){
    e.preventDefault();
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Three.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Four.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Five.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Six.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Seven.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Eight.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Nine.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Zero.addEventListener('click', function(e){
    e.preventDefault();  
    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue + this.value;
    Display.value = formatNumber(newValue);
});

Doublezero.addEventListener('click', function(e){
    e.preventDefault();  
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
    
    Display.value = Display.value.slice(0,0);

    const fnumber = document.querySelector('.fnumber');
        if(fnumber){
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

    const rawValue = Display.value.replace(/,/g, '');
    const newValue = rawValue.slice(0, -1);    

    Display.value = formatNumber(newValue);

});





//                  OPERATORS

add.addEventListener('click', function(Add){
    Add.preventDefault(); 
    currentNumber = Number(Display.value.replace(/,/g, '')); 
    
    const newOperator = Add.target.value; 
    
        const fnumber = document.querySelector('.fnumber');
        if(!fnumber){ 
            firstNumber = currentNumber; 

            operator = newOperator;
            topdisplay.innerHTML = "<div class='fnumber'></div>";
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`; 
            
        }else if(Display.value !== ''){ 
            const secondNumber = currentNumber; 
                        
                        if(operator==='+'){ 
                            firstNumber = firstNumber + secondNumber; 
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
            operator = newOperator;
            document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`; 
        }
            
        else{  
        operator = newOperator;
        
        document.querySelector('.fnumber').textContent = `${formatNumber(String(firstNumber))} ${operator}`;
        }
         
    Display.value = ''; 
    
});


sub.addEventListener('click', function(Sub){
    Sub.preventDefault();
    currentNumber = Number(Display.value.replace(/,/g, ''));
    const newOperator = Sub.target.value;
    
        const fnumber = document.querySelector('.fnumber');
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
