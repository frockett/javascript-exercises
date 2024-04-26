const sumAll = function(x, y) {
    let total = 0;

    if (!Number.isInteger(x) || !Number.isInteger(y) || x < 0 || y < 0) {
        return "ERROR";
    }

    const floor = x < y ? x : y;
    const ceiling = x > y? x : y;

    for (i = floor; i < ceiling + 1; i++) {
        total += i;
    }

    return total;
};


// Do not edit below this line
module.exports = sumAll;
