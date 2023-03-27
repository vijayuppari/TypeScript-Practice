"use strict";
exports.__esModule = true;
exports.InvoiceSale = void 0;
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
exports.InvoiceSale = InvoiceSale;
