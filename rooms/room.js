var phones = document.querySelectorAll('.phone');
var button1 = document.getElementById('button1');
var button2 = document.getElementById('button2');
var state = false;
var selectedCells = [];

button1.addEventListener('click', function() {
    button1.style.display = 'none';
    button2.style.display = 'block';
    state = true;
});

button2.addEventListener('click', function() {
    button1.style.display = 'block';
    button2.style.display = 'none';
    state = false;
    removeSelectedCells();
});

phones.forEach(function(phone) {
    phone.addEventListener('touchstart', handleCellClick);
    phone.addEventListener('mousedown', handleCellClick);

    phone.addEventListener('touchend', handleCellRelease);
    phone.addEventListener('mouseup', handleCellRelease);
});

function handleCellClick(event) {
    if (state) {
        var selectedDiv = event.target;
        var divId = selectedDiv.id;

        var number1 = promptAndParseInteger('Введите первое число');
        while (!Number.isInteger(number1) || number1<0) {
            number1 = promptAndParseInteger('Введенное значение должно быть целым неотрицательным числом. Введите начало диапазона');
        }

        var number2 = promptAndParseInteger('Введите второе число');
        while (!Number.isInteger(number2) || number2<0) {
            number2 = promptAndParseInteger('Введенное значение должно быть целым неотрицательным числом. Введите конец диапазона');
        }

        var divElement = document.getElementById(divId);
        var spanElement = divElement.querySelector('span');
        if(spanElement.className=="tooltip-text"){
            divElement.innerHTML = number1 + '-' + number2 + '<span class="tooltip-text">' + number1 + '-' + number2 + '</span>';
        }else{
            divElement.innerHTML = number1 + '-' + number2 + '<span class="tooltip-text2">' + number1 + '-' + number2 + '</span>';
        }
        
        divElement.classList.add('touch');
        console.log('Div ID:', divId);
        console.log('Number 1:', number1);
        console.log('Number 2:', number2);

        selectedCells.push(selectedDiv);
    }
}

function handleCellRelease(event) {
    var selectedDiv = event.target;
    var divElement = document.getElementById(selectedDiv.id);
    divElement.classList.remove('touch');
    removeSelectedCells();
}

function promptAndParseInteger(message) {
    var input = prompt(message);
    return parseInt(input);
}

function removeSelectedCells() {
    selectedCells.forEach(function(cell) {
        cell.classList.remove('touch');
    });
    selectedCells = [];
}