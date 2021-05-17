const read = require("readline-sync");
let maxAleatoire = read.questionFloat("Nombre aléatoire entre 0 et :");
let nb = Math.round(maxAleatoire * Math.random());
let nbTours = read.questionInt("Nombre de tours en lequel vous souhaitz résoudre le problème?")

console.log("Déterminer le juster prix?");

for (i = 0; i <= nbTours; i++) {
    if (i<nbTours)
    {
  console.log(`${nbTours-i} essais !!`);}
  else if (i=nbTours){
    console.log(`dernier essai !!`);}
  let réponse = read.questionFloat("Nombre ? ");
  if (réponse > nb) {
    console.log("moins");
  } else if (réponse < nb) {
    console.log("plus");
  } else if ((réponse = nb)) {
    console.log("juste prix");
    break;
  }
  console.log(nb);
}
