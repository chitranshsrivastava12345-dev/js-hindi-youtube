// singelton
// object.create

// object literals

const mySym = Symbol("key1")

const JSuser = {
    name : "Chitransh",
    "full name" : "Chitransh Srivastava",
    [mySym] : "myKey1",
    age : 22,
    location : "Kanpur",
    email : "chitransh@google.com",
    isLoggedIn : "false",
    lastLoginDays : ["Monday", "Saturday"]
}

// console.log(JSuser.email);
// console.log(JSuser["email"]);
// console.log(JSuser["full name"]);
// console.log(JSuser[mySym]);

JSuser.email = "chitransh@chatgpt.com"
// Object.freeze(JSuser)
JSuser.email = "chitransh@microsoft.com"
// console.log(JSuser);

JSuser.greeting = function(){
    console.log("Hello JS user");
}

JSuser.greetingTwo = function(){
    console.log(`Hello JS user, ${this.name}`);
}

console.log(JSuser.greeting());
console.log(JSuser.greetingTwo());