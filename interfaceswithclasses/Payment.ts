 import {HasFormatter} from './interface1';
 
export class Payment implements HasFormatter{

    customerid:number;
    paymentdetails:string;
    customeramount:number;  

    constructor(cid:number,pd:string,ca:number){
        this.customerid=cid;
        this.paymentdetails=pd;
        this.customeramount=ca;
    }

    printdetails(){
        return `The Client is ${this.customerid} Own as ${this.paymentdetails} and price is ${this.customeramount}`;
    }
}
