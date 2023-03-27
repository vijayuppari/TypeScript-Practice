var greet;
// Function with no parameters means "Void"
greet = function () {
    console.log('Hello', 'vijay');
};
greet();
// Function with  parameters means return something
var add = function (a, b) {
    return a + b;
};
console.log(add(1, 2));
// Function with parameters use optional
var addition = function (a, b, c) {
    return a + b;
};
console.log(addition(10, 20));
// Function with parameters use default value
var addition1 = function (a, b, c) {
    if (c === void 0) { c = 50; }
    return a + b + c;
};
console.log(addition1(10, 20));
