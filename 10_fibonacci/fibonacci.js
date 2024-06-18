const fibonacci = function(nArg) {//n = 6
    let n;

    if(typeof nArg !== 'number')    n = parseInt(nArg);
    else    n = nArg;

    if(n < 0)   return "OOPS";

    let first = 0;//fisrt = 0
    let second = 1;//second = 1
    let current = 0;

    for (i = 1; i <= n; i++) {//i = 6; 6 <= 6
        current = first + second;//current = 5 + 3 = 8
        second = first;//second = 3
        first = current;//first = 5
    }
    return current;
};

// Do not edit below this line
module.exports = fibonacci;
