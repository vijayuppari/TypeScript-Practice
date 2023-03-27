var AccessInvoice = /** @class */ (function () {
    function AccessInvoice(pn, pd, pc) {
        this.pn = pn;
        this.pd = pd;
        this.pc = pc;
    }
    AccessInvoice.prototype.printproddetails = function () {
        return ("Inventory details are ".concat(this.pn, " and ").concat(this.pd, "and cost is \n        ").concat(this.pc));
    };
    return AccessInvoice;
}());
var prod1 = new AccessInvoice("Samsung", "Mobile", 1000);
var prod2 = new AccessInvoice("Iphone", "Tab", 5000);
console.log(prod1.printproddetails());
console.log(prod2.printproddetails());
// We can not access private properties outside of class
//prod1.prodname="Redmi";
