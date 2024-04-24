const reverseString = function(input) {
    const a = Array.from(input);
    let output = ""
    for (i = a.length - 1; i > -1; i--) {
        output += a[i];
    }
    return output;
};

// Do not edit below this line
module.exports = reverseString;
