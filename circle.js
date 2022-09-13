const pi = 3.14;
function circleArea(r) {
    calculation = pi * r ** 2;
    console.log("Circle Area: " + calculation)
}
function circleCircumference(r) {
    calculation = 2 * pi * r;
    console.log("circleCircumference: " + calculation)
}
module.exports = {
    circleArea,
    circleCircumference
}