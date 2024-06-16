function addTwoNumbers(num1, num2){
    console.log(num1+num2);
}
const result = addTwoNumbers(3,4);
console.log("result", result);           //undefined

function adding(a,b){
    return (a+b);
}
const ans = adding(2,5);
console.log("result",ans);


//***************************    ARGUMENT BINDING     ***************************** */
//********************************************************************************* */

function calculateSum(num1){
    return num1;
}
console.log(calculateSum(3));                //normal function returns 3

function argBinding(...numbers){
    return numbers;
}
console.log(argBinding(24,50,"naman",true));       //numbers stores all the values passed here and returns an array


//****************    passing object to a function ********************** */

const user = {
    userName: "naman",
    price : 199
}

function handleobject(anyObject){
    console.log(`username is ${anyObject.userName} and price is ${anyObject.price}`);
}
handleobject(user);
