const prompt= require('prompt-sync') ();

const totalsubject= Number(prompt('how many subject?'));
let marks= 0;

for(let a=0; a<totalsubject; a++){

marks= marks+ Number(prompt("eng"))
// marks= marks+ Number(prompt("math"))
// marks= marks+ Number(prompt("ict"))
// marks= marks+ Number(prompt("phy"))
// marks= marks+ Number(prompt("chem"))
}
const avag= (marks/totalsubject);
console.log("avag number",avag);