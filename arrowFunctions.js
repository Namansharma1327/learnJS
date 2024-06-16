// function chai(){
//     const userName = "aman";
//     console.log(this.userName);               //undefined  {as "this" cannot be used with functions}
// }
// chai();
// let exp = function chai(){
//     const userName = "aman";
//     console.log(this.userName);              // undefined
// }
// console.log(exp());

const chai = () =>{
    let userName = "Naman";
    console.log(this.userName);                //undefined

}
chai();