const read = require("readline-sync");

console.log("pyramid");

let nb = read.questionFloat("Nombre ? ");
var stars = "";

for (var i=1; i<=nb;i++)
{
//console.log(i);
stars=stars+" ";
}
stars=stars+"*";
console.log(stars);

for (var i=nb; i>1;i--)
{
    stars= stars + "**";
    sarts=stars.substring(2);
    console.log(stars); 
}