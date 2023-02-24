function getSum(firstNumber) {
    return function (secondNumber) {
        return firstNumber + secondNumber;
    }
}

console.log(getSum(2)(3));