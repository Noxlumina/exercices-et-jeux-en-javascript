const read = require("readline-sync");

console.log("starstair");

let nb = read.questionFloat("Nombre ? ");
var stars = "";

for (var i=1; i<=nb;i++)
{
//console.log(i);
stars=stars+"*";
console.log(stars);

}
