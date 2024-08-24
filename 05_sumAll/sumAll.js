const sumAll = function (beginInt, endInt) {
    if (beginInt > endInt) {
        const storedBeginInt = beginInt;
        beginInt = endInt;
        endInt = storedBeginInt;
    }
    if (beginInt < 0 || endInt < 0) {
        return "ERROR"
    }
    if (!Number.isInteger(beginInt) || !Number.isInteger(endInt)) {
        return "ERROR"
    }
    if (typeof (endInt) != "number" || typeof (beginInt) != "number") {
        return "ERROR"
    }
    return (endInt * (endInt + 1) - beginInt * (beginInt - 1)) / 2
};

// Do not edit below this line
module.exports = sumAll;
