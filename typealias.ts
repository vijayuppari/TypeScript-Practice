
type numorstring=number|string;

const greet=(uid:numorstring, item:string)=>{
    console.log(`Item name is ${item} and uid is ${uid} `)
};

const greetAgain=(item:string, uid:number|string )=>{
    console.log(`UID is ${uid} and item name is ${item} `)
};

greet(125,"Samsung");
greetAgain("Apple",89745);

