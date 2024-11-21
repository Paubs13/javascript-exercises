const removeFromArray = function(array, num) {
    const newArray = [];
    const length = array.length;
    for (let i = 0; i < length; i++){
        if (array[i] == num) {
            continue;
        }
        else if (array[i] !== num) {
            newArray.push(array[i]);
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
