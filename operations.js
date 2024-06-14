let value = 3;
let negvalue = -value;
console.log(negvalue);

console.log(1 + "2");          //12
console.log("1" + 2);          //12
console.log("1" + 2 + 2);      //122
console.log(1 + 2 + "2");      //32

console.log(null > 0);         //false {converts null into 0}
console.log(null <= 0);        //true  {converts null into 0}
console.log(null == 0);        //false {doesnt convert null into 0}

//STICT CHECK
console.log("2" === 2);         //false {datatypes doesnt match}
