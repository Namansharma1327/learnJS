const name = "naman";
const repocount = 50;
// console.log(name + repocount);

console.log(`hello my name is ${name.toUpperCase()} my repocount is ${repocount}`);

//**********   (TRIM METHOD)   ************* */

const newname = "    namen  sharma  ";
console.log(newname.trim());         //vanishes the white spaces from start and end only

console.log(`${newname.trimStart()}`);
console.log(`${newname.trimEnd()}`);


//********** (REPLACE METHOD)     ********* */

console.log(newname.replace("men", "dar"));          // nadar sharma


//********** (INCLUDES METHOD) **************/

console.log(newname.includes("men"));

//**********  (SPLIT METHOD)    ********** */

let gameName = "G T A VICE CITY";
console.log(gameName.split(' ', '6'));   //splits the string basis on space and  here 6 is the limit


