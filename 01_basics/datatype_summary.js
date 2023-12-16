//  Primitive

//  7 types : String, Number, Boolearn, null, undefined, Symbol, BigInt

const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail;

const id = Symbol('123')
const anotherId = Symbol('123')

//console.log(id === anotherId);

// const bigNumber = 3456543576654356754n



// Reference (Non primitive)

// Array, Objects, Functions

const heros = ["shaktiman", "naagraj", "doga"];
let myObj = {
    name: "hitesh",
    age: 22,
}

const myFunction = function(){
    // console.log("Hello world");
}

// console.log(typeof myFunction);

// https://262.ecma-international.org/5.1/#sec-11.4.3

// ***************************************************

// stack (primitive) and heap(non-primitive)
let myGirlfrind  = 'Minni'
let myX  = myGirlfrind

myX = 'diya'

// console.log(myGirlfrind);
// console.log(myX);   

let user ={ 
    userEmail:'test@gmail.com',
    userName : 'test'
}

let user2 = user;
user2.userEmail = "test2@gmail.com"

console.log(user.userEmail)
console.log(user2.userEmail)


// stack make a copy of memory
// stack used to store dynamic data

//heap only make refference from single memory
//whereas heap used to store dynamic dta
