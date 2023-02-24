const showNumbers = (firstNumber, secondNumber) => {
    let currentNumber = firstNumber;
let interval = setInterval(() => {
    console.log(currentNumber);
    currentNumber++;
    if (currentNumber > secondNumber) {
        clearInterval(interval);
    }
}, 1000); 
}

showNumbers(5, 9);
