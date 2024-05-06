const fibonacci = function(length) {

    let cleanLength = parseInt(length);

    if (cleanLength < 0) return "OOPS";
    if (cleanLength === 0) return 0;

    let first = 1;
    let second = 0;

    for (let i = 2; i <= cleanLength; i++) {
        let current = first + second;
        second = first;
        first = current;
        console.log(first);
    }
    return first;
};

fibonacci(6);

// Do not edit below this line
module.exports = fibonacci;
