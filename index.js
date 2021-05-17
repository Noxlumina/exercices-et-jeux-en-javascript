console.log("Hello World");
var monCar = 'A';
var maChaine = "Ma chaine de caratere";
var monNum = 12;
var monBool = true;
console.log(monCar);
console.log(maChaine);
console.log(monBool);
console.log(monNum);

let age = -2;
let a = " ";

if (a) console.log("hello");

if (age < 50 && age >= 18) {
  console.log("tu peux entrer");
} else if (age < 0) {
  console.log("tu te fous de moi");
} else {
  console.log("tu ne peux pas entrer");
};

let age2 = 5;
let anniversaire = true;
let b = age2;
// condition? éxecuter si vraie: éxécuter si faux

age2 = anniversaire? b++ : b;
console.log(b);

while (a < 10)
{
    a++;console.log(a);if(a===5){console.log("fin de boucle");break;}
};

let prenoms = ["killian", "thomas", "adrien", "marc"];

for(let index=0;index<prenoms.length;index++)
{
    console.log(index);
    console.log(prenoms[index])
} //index prend +1

/*prenoms.forEach(prenoms=>{HTMLFormControlsCollection.log(prenoms);})*/