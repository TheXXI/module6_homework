function isSimpleNumber (number) {
    if (number > 1000) {
        return console.log('Данные неверны');
    }

    if (number == 0 || number == 1) {
        return console.log('Число не является простым');
    }

    let check = true;

    for (let i = 2; i < number; i++) {
        if (number % i == 0) {
            check = false;
        }
    }

    if (check) {
        console.log('Число является простым');
    } else {
        console.log('Число не является простым');
    }
}

isSimpleNumber(853);