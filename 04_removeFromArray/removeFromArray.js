const removeFromArray = function(array, num) {
    const newArray = [];
    const arrayLength = array.length;
    const argumentsLength = arguments.length;
    let deleteState;
    for (let currentArrayElement = 0; currentArrayElement < arrayLength; currentArrayElement++){
        for (let currentDeleteArgument = 1; currentDeleteArgument <= argumentsLength; currentDeleteArgument++){
            let deleteArgument = arguments[currentDeleteArgument];
            if (array[currentArrayElement] === deleteArgument) {
                deleteState = true;
                break;
            }
            else if (array[currentArrayElement] !== deleteArgument) {
                deleteState = false;
            }
        }
        if (deleteState == true) {
            continue
        }
        else if (deleteState == false){
            newArray.push(array[currentArrayElement]);
        }
    }
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;
