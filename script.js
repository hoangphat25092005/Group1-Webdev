let input = document.getElementById('placewrite');
let operationButtons = document.querySelectorAll('.spec1'); 
let numberButtons = document.querySelectorAll('.spec2'); 
let equalsButton = document.querySelector('.spec'); 

let s = "";


numberButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        s += e.target.innerHTML;
        input.value = s;
    });
});


operationButtons.forEach(button => {
    button.addEventListener('click', (e) => {
        if (e.target.innerHTML === 'AC') {
            s = "";
            input.value = s;
        } else if (e.target.innerHTML === 'DEL') {
            s = s.slice(0, -1);
            input.value = s;
        } else if (e.target.innerHTML === 'x') {
            s += '*';
            input.value = s;
        } else {
            s += e.target.innerHTML; 
            input.value = s;
        }
    });
});


equalsButton.addEventListener('click', () => {
    try {
        s = eval(s); 
        input.value = s;
    } catch (error) {
        input.value = "Error";
        s = "";
    }
});
