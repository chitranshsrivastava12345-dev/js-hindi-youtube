const name = "Chitransh"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const gameName = new String('Chitransh-sh-com')

console.log(gameName[0]);
console.log(gameName.__proto__);
console.log(gameName.length);
console.log(gameName.toUpperCase());

console.log(gameName.charAt(4));

console.log(gameName.indexOf('s'));

const newString = gameName.substring(0, 4);
console.log(newString);

const anotherString = gameName.slice(-12, 5)
console.log(anotherString);

const newStringOne = "    chitransh    "
console.log(newStringOne.trim());

const url = "https://chitransh.com/chitransh%20srivastava"
console.log(url.replace('%20', '-'));

console.log(url.includes('chitransh'));

console.log(gameName.split('-'));