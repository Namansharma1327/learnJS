
// const mySym = Symbol("key1");

// const person = {
//     name: "naman",
//     "full name" : "DAMANPREET KAUR PAWAR",
//     [mySym]: "my symbol",
//     age: 22,
//     location: "haldwani",
//     email: "lj.naman@gmail.com",
//     isLoggedIn: true,
//     lastLoginDays: ["monday", "wednesday", "satuday"],
    

// }
// console.log(person.lastLoginDays);      //returns array
// console.log(person.location);           //haldwani
// console.log(person["full name"]);      //dot method cant work when initialized with string
// console.log(person[mySym]);

// person["full name"]= "sjdsan";

// console.log(person["full name"]);

// person.location = "delhi";
// console.log(person.location);
// Object.freeze(person);

// console.log(person);
// person.age = 32;
// console.log(person);


//*********************** MOST IMPORTANT FOR INTERVIEWS ******************** */


// person.greeting = function(){
//     console.log("hi everyone");

// }
// console.log(person.greeting);           //returns [function]
// console.log(person.greeting());         //executes the function and return "hi everyone"

// person.greetings2 = function(){
//     console.log(`jai shree RAM ${this.name}`);
// }
// console.log(person.greetings2);          //returns [function]
// console.log(person.greetings2());        //executes the function and return "jai shree RAM naman"


//**************************** NESTING OF OBJECTS ****************** */

// const regularUser = {
//     name: "naman sharma",
//     bankAccounts:{
//         punjab:{
//             accNum: "abc123",
//             ifscCode: "punb0001"
//         }
//     }
// }
// console.log(regularUser.bankAccounts);


//*********************** */ COMBINING OBJECTS ************** */
const obj1 = {
   1:"a",
   2:"b"
}
const obj2 = {
    3:"c",
    4:"d"
}

const obj3 = {obj1,obj2}         // object ke andar object.. not as expected
// console.log(obj3);

const obj4 = Object.assign({},obj1,obj2);
console.log(obj4); 


