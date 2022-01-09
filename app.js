var btnCheck = document.querySelector("#btn-check");

var numberInput = document.querySelector("#number-input");

var outputDiv = document.querySelector("#output");
var score = 0;

const clickHandler = event => {
    var inputNumber = numberInput.value;

    if (isNaN(inputNumber)){
        outputDiv.innerHTML = "Error: Please input number"
    }else {
        for(var i = 2; i<inputNumber; i++){
            if (inputNumber % i === 0){
                score = score + 1;
            }
        }

        if(score === 0){
            outputDiv.innerHTML = `${inputNumber} is a Prime Number`;
        }else{
            outputDiv.innerHTML = `${inputNumber} is not a Prime Number`;
        }
    }
}

btnCheck.addEventListener("click", clickHandler);