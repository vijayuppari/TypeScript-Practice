interface IsPerson{
    name:string;
    age:number;
    speak(a:string):void;
    spend(b:number):number;
}

const me:IsPerson={
    name:"Vijay",
    age:40,
    speak(text:string) {
        console.log(text);
    },
    spend(amount:number):number {
        console.log("I spent", amount);
        return amount;
    }
}

console.log(me);
console.log(me.name='Mahesh');
console.log(me);