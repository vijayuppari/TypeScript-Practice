import {InvoiceSale} from './class2';

let invOne= new InvoiceSale("JP","Bank",300);
let invTwo= new InvoiceSale("Wells","Investment",500);

console.log(invOne.printdetails());
console.log(invTwo.printdetails());

// We can create Array and push the objects as well but when u tried to push 
//apart from objects it wont accept

let invoiceTree:InvoiceSale[]=[];
invoiceTree.push(invOne);
invoiceTree.push(invTwo);
//console.log(invoiceTree)
invoiceTree.forEach(invOne12=>{
    console.log(invOne12.client, invOne12.details,invOne12.amount);
});

//invOne.client="Bank Of America";
//console.log(invoiceTree);