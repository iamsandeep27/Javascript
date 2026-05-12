// String in JS 


const name ="Sandeep Sharma";
const age =21;

console.log(`Hello ,My name is ${name} and I am ${age} years old.`);
// Using string interpolation 

const favGame = new String (`Cricket`);
console.log(favGame);

console.log(favGame[5]);
console.log(favGame.concat ());
console.log(favGame.toUpperCase());
console.log(favGame.charAt(3));
console.log(favGame.indexOf('C'));


const newString =favGame.substring(1,5);
console.log(newString);


const anotherString =favGame.slice(-1,2);
console.log(anotherString);

const newString1= "   Sandeep   ";
console.log(newString1);
console.log(newString1.trim());

// trim remove whitespace before string start and after string end.
const str=" Z o o "
console.log(str.trim());


const  university ="Kathmandu University"
console.log(university.replace('Kathmandu' , 'Gandaki '));

//node Day-05/script.js

