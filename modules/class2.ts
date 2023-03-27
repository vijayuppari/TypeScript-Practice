export class InvoiceSale {

    client:string;
    details:string;
    amount:number;  

    constructor(c:string,d:string,a:number){
        this.client=c;
        this.details=d;
        this.amount=a;
    }

    printdetails(){
        return `The Client is ${this.client} Own as ${this.details} and price is ${this.amount}`;
    }
}
