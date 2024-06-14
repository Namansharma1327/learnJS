let num = 27;
console.log(num);                     //27
let number = new Number(13);
console.log(number);                  //[Number:13]
console.log(num.toFixed(2));          //27.00

const hundreds = 10000000;
console.log(hundreds.toLocaleString('en-IN'));      //put commas in btw i.e 1,00,00,000





//****************************     MATHS    ********************* */


console.log(Math.abs(-4));                   //negative to postitive i.e 4
console.log(Math.round(4.6));                // round off to the nearest value i.e 5
console.log(Math.ceil(4.1));                  //5
console.log(Math.floor(4.7));                 // 4

let random = Math.floor(Math.random()*100);      //Math.random() generates a random no. btw 0$1 
console.log(random);
