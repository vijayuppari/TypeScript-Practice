var names = ["vijay", "Naresh", "Aakash"];
//console.log(names[0]);
//console.log(names.length);
//names.push("Prasad");
//console.log(names);
//names.push("Hello","Hi");
//console.log(names);
//names.pop();
//console.log(names);
names[4] = "Naveen";
names.forEach(function (name1) {
    console.log(name1);
});
var mixed = ["Java", "Ruby", 34, 90];
//console.log(mixed);
mixed.push("Ruby", 524);
console.log(mixed);
// Union Types;
var unionTypes;
unionTypes = [10, "vijay", "Naresh", "Aakash", 500];
console.log(unionTypes);
// Object explicit type
var ninjaTwo;
ninjaTwo = {
    name: "Harish",
    age: 25,
    department: "IT"
};
console.log(ninjaTwo);
// Object declarationwit values
var ninja = {
    name: 'Vijay',
    depatment: 'IT',
    Age: 35
};
ninja.Age = 40;
console.log(ninja);
