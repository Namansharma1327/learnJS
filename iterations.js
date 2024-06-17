// const arr = [1,2,5,6,8,7];

// for(let i of arr){
//     console.log(i);
// }

// const name = "Naman Bhai ";
// for(let j of name){
//     console.log(j);
// }


//*********************** callBack functions   ****************** */

const sports = ["hockey", "cricket", "basketball"];

//****************  NORMAL FUNCTION  ************* */
// sports.forEach(function (i) {
//     console.log(i);
    
// })


//****************** ARROW FUNCTION  ***************** */
// sports.forEach((items) => {
//     console.log(items);
// })

//**************** passing function  ****************** */
// function printMe(value){
//     console.log(value);
// }

// sports.forEach(printMe);

// const variety = [
//     {
//         sport : "basketball",
//         player: 5
//     },
//     {
//         sport : "cricket",
//         player: 11
//     },
//     {
//         sport : 'badminton',
//         player: 2
//     }

// ]
// variety.forEach((items) =>{
//     console.log(items.sport);
// })



//******************************    FILTER    **************************** */

// const myNumbers  = [2,3,6,5,1,4,8,9,7];

// let answer = myNumbers.filter((num) =>{
//     return num >4;
// })
// console.log(answer);

//*****************************    MAP    ********************************* */

// const myNumbers = [1,2,3,4,5];
// let final = myNumbers.map((value)=>{
//           return (value*2);
// })
// console.log(final);


//*****************************  CHAINING   ******************************** */

// const myNumbers = [1,2,3,4,5];

// let final = myNumbers.map((num) => num*10).map((num)=> num+1).filter((num)=>num>20)    //implicit return
// console.log(final);


// const myNumbers = [1,2,3,4,5];
// let final = myNumbers.map((num) =>{
//     return (num*10);
// }).map((num) =>{
//     return (num+5);                       //returning value explicitely
// }).filter((num)=>{
//     return (num >34);
// })
// console.log(final);


//*****************************   REDUCE   ************************* */

// const myNumbers = [1,2,3,4,5,6];
// let initialValue = 0;
// let final = myNumbers.reduce((accumulator, currValue) => {
//     // console.log(`accumulator ${accumulator} and currvalue ${currValue}`)
//     return (accumulator+currValue);
// },initialValue);
// console.log(final);

const shoppingCart = [
    {
        course: "alpha",
        price: 5000
    },
    {
        course: "delta",
        price: 2000
    },
    {
        course: "JS",
        price: 599
    }
]

const finalPrice = shoppingCart.reduce((acc, item) => {
    return (acc+(item.price));
},0)
console.log(finalPrice);