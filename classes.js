var InvoiceSale = /** @class */ (function () {
    function InvoiceSale(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    InvoiceSale.prototype.printdetails = function () {
        return "The Client is ".concat(this.client, " Own as ").concat(this.details, " and price is ").concat(this.amount);
    };
    return InvoiceSale;
}());
var invOne = new InvoiceSale("JP", "Bank", 300);
var invTwo = new InvoiceSale("Wells", "Investment", 500);
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
