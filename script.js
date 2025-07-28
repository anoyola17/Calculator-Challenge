// DISPLAY VALUES INSIDE SCREEN
const displayScreen = document.getElementById('displayScreen');
let userInput = displayScreen.value;

// IF USER CLICK ON BUTTONS //
function clickOnButtons(value){
    if (value === '='){
        equalButton();
    }else if (value === 'C'){
        clearButton();
    }else if (value === 'Del'){
        deleteButton();
    }else{
        valueButton(value)
    }
}

// USER INPUT //
function valueButton(value){
    userInput += value;
    document.getElementById('displayScreen').value = userInput;
}

// THE DELETE SIGN //
function deleteButton(){
    userInput = userInput.slice(0,-1);
    document.getElementById('displayScreen').value = userInput;
}

// THE CLEAR SIGN //
function clearButton(){
    userInput = ''
    document.getElementById('displayScreen').value = '';
}

// CALCULATE OPERATIONS (RESULTS) //
function equalButton(){
    if (userInput){
    let result = eval(userInput);
    document.getElementById('displayScreen').value = result;
    }else{
        document.getElementById('displayScreen').value = 'ERROR';
    }
}



/* Another Alternative for the equalButton function /

function equalButton(){
    const userInput = ${num1} ${num2}

    switch (calculate) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2
            break;
        case '*':
            result = num1 * num2
            break;
        case '/':
            if (valueButton === 0) {
            // DIVISION- ERRORS IF (ANY NUMBER / 0) 
            displayScreen.value = `ERROR`;
            return;
            }
            result = num1 / num2
            break;
        default:
            return; 
        }
        
        displayScreen.value = result;
    }
 */
