class AccessInvoice{

    constructor(
        private pn:string, 
        public pd:string,
        private pc:number){}

    printproddetails(){
        return (`Inventory details are ${this.pn} and ${this.pd}and cost is 
        ${this.pc}`);
    }
}

let prod1= new AccessInvoice("Samsung","Mobile",1000);
let prod2= new AccessInvoice("Iphone","Tab",5000);

console.log(prod1.printproddetails());
console.log(prod2.printproddetails());


// We can not access private properties outside of class
//prod1.prodname="Redmi";