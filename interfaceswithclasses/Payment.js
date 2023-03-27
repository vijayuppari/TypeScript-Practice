"use strict";
exports.__esModule = true;
exports.Payment = void 0;
var Payment = /** @class */ (function () {
    function Payment(cid, pd, ca) {
        this.customerid = cid;
        this.paymentdetails = pd;
        this.customeramount = ca;
    }
    Payment.prototype.printdetails = function () {
        return "The Client is ".concat(this.customerid, " Own as ").concat(this.paymentdetails, " and price is ").concat(this.customeramount);
    };
    return Payment;
}());
exports.Payment = Payment;
