const repeatString = function(string, num) {
    let repeat = string;
    if (num > 0) {
        for (let i = 1; i < num; i++){
            repeat = repeat + string;
        }
        return repeat;
    }
    else if (num == 0) {
        repeat = "";
        return repeat;
    }
    else if (num < 0) {
        return "ERROR"
    }
};

// Do not edit below this line
module.exports = repeatString;
