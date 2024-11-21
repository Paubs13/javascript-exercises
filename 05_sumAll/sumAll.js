const sumAll = function(a, b) {
    let higherValue;
    let lowerValue;
    if (a > 0 && b > 0 && (a % 1) == 0 && (b % 1) == 0 && typeof a === "number" && typeof b === "number"){
        if (a > b) {
            higherValue = a;
            lowerValue = b;
        }
        else if (a < b) {
            higherValue = b;
            lowerValue = a;
        }
        let sum = lowerValue;
        for(let counter = lowerValue + 1; counter <= higherValue; counter ++) {
            sum = sum + counter;
        }
        return sum;
    }
    else {
        return "ERROR"
    } 
};

// Do not edit below this line
module.exports = sumAll;
