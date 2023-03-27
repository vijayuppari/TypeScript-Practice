let greet: Function;

// Function with no parameters means "Void"
greet= () => {
    console.log('Hello','vijay');
};

greet();

// Function with  parameters means return something
const add=(a:number,b:number)=> {
    return a+b;
};

console.log(add(1,2));

// Function with parameters use optional
const addition = (a:number,b:number,c?:number|string) => {
    return a+b;
};

console.log(addition(10,20));

// Function with parameters use default value
const addition1 = (a:number,b:number,c:number=50) => {
    return a+b+c;
};

console.log(addition1(10,20));

