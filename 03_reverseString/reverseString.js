const reverseString = function (stringToReverse) {
    let reversedString = "";
    let reversedArray = [];
    console.log(stringToReverse.length);
    for (let i = 0; i < stringToReverse.length; i++) {
        reversedArray[reversedArray.length] = stringToReverse[stringToReverse.length - i - 1];
    };
    reversedString = reversedArray.join('');
    return reversedString;
};

// Do not edit below this line
module.exports = reverseString;
