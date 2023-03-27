var Products = /** @class */ (function () {
    function Products(proname, proddetails, proamount) {
        this.proname = proname;
        this.proddetails = proddetails;
        this.proamount = proamount;
    }
    Products.prototype.format = function () {
        console.log("".concat(this.proname, " and ").concat(this.proddetails, " and ").concat(this.proamount));
    };
    return Products;
}());
var p1 = new Products("SAM", "Mobile", 5000);
p1.format();
p1.proddetails = 'adad';
p1.format();
