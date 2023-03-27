var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var adduid = function (obj) {
    var uid = Math.floor(Math.random() * 100);
    return __assign(__assign({}, obj), { uid: uid });
};
var docone = adduid({ name1: "ddada", age: 121 });
console.log(docone.name1);
var docThreee = {
    nam221: "ddada",
    desig: "QA",
    data: { name: 'Shaun' }
};
var docFour = {
    nam221: "ddada",
    desig: "QA",
    data: ['Milk', 'Bread']
};
console.log(docFour, docThreee);
