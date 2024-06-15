let arr = [1,2,4,"naman", true];
console.log(arr);

let arr2 = new Array(1,99,36,57,4,5,47,95,9);
// console.log(arr2);
// console.log(`value at index 2 is ${arr2[2]}`);

//*************** array methods  ******* */
arr2.push(27);                     //pushes value at the end
// console.log(arr2);

arr2.pop();                         //removes the last element from array
// console.log(arr2);

arr2.unshift(8);                    // adds the element at the start
// console.log(arr2);

arr2.shift();                       // removes the first element
// console.log(arr2);

console.log(arr2.includes(99));        //false as 99 is not in array

console.log(arr2.indexOf(4));          //returns index of 4
console.log(arr2.indexOf(898));        //returns -1 as 898 is not in array

let myarray = [1,3,5,6,8,4,2,9,7,36,41];
console.log(myarray.slice(2,5));         //[5,6,8] doesnt include the last index
console.log(myarray);                     //complete original array

console.log(myarray.splice(2,5));        //[5,6,8,4] also includes the last index
console.log(myarray);                    //[1,2,9,7,36,41] changed the original array after splice


//************** CONCAT METHOD ************ */

let names = ["naman", "aman"];
let lastName = ["sharma", "verma"];

let fullName = names.concat(lastName);
console.log(fullName);


//************************************** */

console.log(Array.from("BHARDWAJ"));         //make array of characters

let mark1 = 90;
let mark2= 99;
let mark3 = 33;

console.log(Array.of(mark1, mark2, mark3));        //[90,99,33] gives array of all marks
console.log(Array.isArray("daman"));             //returns false qki daman naam ka koi array nai hai
 



