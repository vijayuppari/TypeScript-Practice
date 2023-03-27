"use strict";
exports.__esModule = true;
exports.Invoice = void 0;
var Invoice = /** @class */ (function () {
    function Invoice(c, d, a) {
        this.client = c;
        this.details = d;
        this.amount = a;
    }
    Invoice.prototype.printdetails = function () {
        return "The Client is ".concat(this.client, " Own as ").concat(this.details, " and price is ").concat(this.amount);
    };
    return Invoice;
}());
exports.Invoice = Invoice;
