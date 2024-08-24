const removeFromArray = function (arrayToHandle, ...args) {
    let arrayHandled = [];
    for (let i = 0; i < arrayToHandle.length; i++) {
        let meantToBeRemoved = false;
        for (let j = 0; j < args.length; j++) {
            if (arrayToHandle[i] === args[j]) {
                meantToBeRemoved = true;
            }
        }
        if (!meantToBeRemoved) {
            arrayHandled.push(arrayToHandle[i]);
        }
    }
    return arrayHandled
};

// Do not edit below this line
module.exports = removeFromArray;
