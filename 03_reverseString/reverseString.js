const reverseString = function(string) {
    const array = string.split('');
    //const arrayReversed = array.reverse();  I guess it isn't desinged to be done like this.
    length = array.length;
    const arrayReversed = [];
    let dirtyStringReversed = "";
    for (let i = 1; i <= length; i++) {
        let negativeIndex = i * -1;
        let letter = array.at(negativeIndex);
        dirtyStringReversed += letter;
    }
    return dirtyStringReversed;
};

// Do not edit below this line
module.exports = reverseString;
