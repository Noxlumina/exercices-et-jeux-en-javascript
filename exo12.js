const read = require("readline-sync");

/*let temperatures = [12,25,5,7,6,-5];
let diff = temperatures[0]

for (let i = 0; i < temperatures.length; i++)
{
    let temperature = temperatures[i];
    let diff1= Math.abs(0- temperature); 
    if (diff1<diff )
    {
        diff = diff1;
        let tempro = temperature;
    }
    else if ((diff1 = diff) && Math.sign(temperature<0))
    {
        tempro = temperature;
    }

}
console.log(`La température la plus proche est ${tempro}`);
*/
let temperatures = [12, 25, 5, 7, 6, -5,-3,3];
let tempProche = temperatures[0];

for (let index = 0; index < temperatures.length; index++) {
  let temperature = temperatures[index];

  if(
      (Math.abs(temperature) < Math.abs(tempProche))
      ||
      ((Math.abs(temperature) == Math.abs(tempProche))  && temperature<0)
       ) {
    tempProche = temperature;
  }
}
console.log(tempProche);
