var me = {
    name: "Vijay",
    age: 40,
    speak: function (text) {
        console.log(text);
    },
    spend: function (amount) {
        console.log("I spent", amount);
        return amount;
    }
};
//console.log(me);
console.log(me.name = 'Mahesh');
console.log(me);
