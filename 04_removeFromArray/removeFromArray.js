

const removeFromArray = function(inputArray, ...toRemove) {
    for (item of inputArray) {
        for (element of toRemove) {
            const index = inputArray.indexOf(element);
            if (index != -1) {
                const x = inputArray.splice(index, 1);
                console.log(x)
            }
        }
    }

    return inputArray;

};

// Do not edit below this line
module.exports = removeFromArray;
