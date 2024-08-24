const repeatString = function (textToRepeat, numberOfRepeat) {
    repeatedText = "";
    if (numberOfRepeat != parseInt(numberOfRepeat) | numberOfRepeat < 0) {
        repeatedText = "ERROR"
        return repeatedText
    }
    for (let i = 0; i < numberOfRepeat; i++) {
        repeatedText += textToRepeat
    }
    return repeatedText
};

// Do not edit below this line
module.exports = repeatString;
