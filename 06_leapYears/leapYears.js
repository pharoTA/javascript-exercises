const leapYears = function (year2Test) {
    if (year2Test % 4 == 0) {
        if (year2Test % 400 == 0) {
            return true
        } else if (year2Test % 100 == 0) {
            return false
        } else return true
    } else return false;
}
// Do not edit below this line
module.exports = leapYears;
