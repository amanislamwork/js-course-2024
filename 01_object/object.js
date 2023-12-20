// object singleton


// object literal

// symbol
const mySym = Symbol("key1")

const User = {
   name : "Aman",
   [mySym] : "xkey",
   age : 21 ,
   "full Name" : "Aman Islam" ,
   location : "Punjab",
   email : "aman@yahoo.com",
   isLoggedIn : true ,
   lastLogin : ["wednesday", "Thrusday"],
}

// console.log(User.email)
// console.log(User["email"])
// console.log(User["full Name"]) // access String key
// console.log(User[mySym])   // Access symbol


User.email = "aman@email.com"
// Object.freeze(User)                    // .freeze helps to fix the value in object and the then it not change after using it.
User.email = "aman@test.com"
// console.log(User)


User.greeting = function(){
   console.log("Hello World")
}

User.consversation = function(){
   console.log(`Hello ${this.name}, Let me guess your age you are about ${this.age} years old.`)
}
console.log(User)
console.log(User.consversation())

// console.log(User)
