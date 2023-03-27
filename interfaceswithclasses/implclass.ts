import {HasFormatter} from './interface1';
import {Payment} from './Payment.js';
import {Invoice} from './Invoice';


let docOne:HasFormatter;
let docTwo:HasFormatter;

docOne = new Invoice("Iphone","Mobile",5000);
docTwo = new Payment(500,"Viay",80000);

let docs:HasFormatter[]= [];
docs.push(docOne);
docs.push(docTwo);
console.log(docs);



