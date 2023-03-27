var greet = function (uid, item) {
    console.log("Item name is ".concat(item, " and uid is ").concat(uid, " "));
};
var greetAgain = function (item, uid) {
    console.log("UID is ".concat(uid, " and item name is ").concat(item, " "));
};
greet(125, "Samsung");
greetAgain("Apple", 89745);
