var buttonAcess = document.querySelector('#button');

buttonAcess.onclick = () => {
    var inputValue = getInputValue();
    console.log(inputValue);
    export var inputValue;
}

function getInputValue(){
    var inputValue = document.querySelector('#input').value;
    return inputValue;
}