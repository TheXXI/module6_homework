const arr = [0, NaN, 'string', 2, 5, true, 4, 0, null, undefined];

function evenAndOddNumbersCount() {
    let even = 0;
    let odd = 0;
    let zeroIndexes = [];

    arr.forEach((item, index) => {
        if (typeof(item) == 'number' && !isNaN(item)) {
            if (item == 0) {
                zeroIndexes.push(index);
            } else if (item % 2 == 0) {
                even++;
            } else {
                odd++;
            }
        }
    });

    console.log(`even: ${even}`);
    console.log(`odd: ${odd}`);
    console.log(`zeroIndexes: ${zeroIndexes}`);
}

evenAndOddNumbersCount();