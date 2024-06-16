const sumAll = function(a, b) {
    if(!Number.isInteger(a) || !Number.isInteger(b))    return 'ERROR';
    if (a < 0 || b < 0) return 'ERROR';
    if (b < a) {
        [a, b] = [b, a];
    }

    let sum = 0;//sum = 0

    for (let i = a; i <= b; i++) {//i = 5; 5 <= 4
        sum += i;//sum = 1 + 2 + 3 + 4
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
