"use strict";
exports.__esModule = true;
var class2_1 = require("./class2");
var invOne = new class2_1.InvoiceSale("JP", "Bank", 300);
var invTwo = new class2_1.InvoiceSale("Wells", "Investment", 500);
console.log(invOne.printdetails());
console.log(invTwo.printdetails());
// We can create Array and push the objects as well but when u tried to push 
//apart from objects it wont accept
var invoiceTree = [];
invoiceTree.push(invOne);
invoiceTree.push(invTwo);
//console.log(invoiceTree)
invoiceTree.forEach(function (invOne12) {
    console.log(invOne12.client, invOne12.details, invOne12.amount);
});
//invOne.client="Bank Of America";
//console.log(invoiceTree);
