// Primitive

// 7 types: String, Number, Boolean, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedin = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id === anotherId)

// const bigNumber = 23458765467439379499n

// Reference(Non Primitive)

// Array, Objects, Functions

const heroes = ["shaktiman", "nagraaj", "doga"];

let myobj = {
    name : "Chitransh",
    age : 22,
}

const myfunction = function(){
    console.log("hello world");
}

console.log(typeof anotherId);


// ++++++++++++++++++++++++++++

// Stack(Primitive), Heap(Non-Primitive)


let myYoutube = "Chitransh Srivastava"

let anotherName = myYoutube
anotherName = "Chitransh"

console.log(myYoutube);
console.log(anotherName);

let userOne = {
    email : "user@google.com",
    upi : "user@ybl"
}

let userTwo = userOne

userTwo.email = "Chitransh@google.com"

console.log(userOne.email);
console.log(userTwo.email);