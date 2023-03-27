
let adding:(a:number, b:number)=>void;

adding =(onenum:number, oneTwo:number)=>{
    console.log(`${onenum} and ${oneTwo}`, (onenum+oneTwo));
}

adding(10,20);


let calc:(a1:number,a2:number,a3:string)=>number;

calc=(addone1:number,addtwo2:number,result:string)=>{
    if(result==='add'){
        return (addone1+addtwo2);
    }else{
        return addone1-addtwo2;
    }
}


let logdetails:(obj:{name:string, age:number})=>void

let personsstudent:{sname:string,ayear:number};
personsstudent= {
    sname:"adad",
    ayear:40
};


//way 1:
logdetails=(ninja:{name:string,age:number})=>{
        console.log(`${ninja.name}, ${ninja.age}`);
}

//way 2:
logdetails=(personsstudent)=>{
    console.log(`${personsstudent.name}, ${personsstudent.age}`);
}































// // example 1:

// let greet:(a:string, b:number)=>void

// greet =(item:string, uid:number)=>{
//     console.log(`item is ${item} and uid is ${uid}`);
// }
// greet("Hello",789);
// // 
// // example 2:

// let greet1: (obj: {name:string, 
//     department:string}) => void;

// greet1 = (ninja1= {name:"vijay", department:"HR"})=>{
// console.log("");
// }

// // example 3: