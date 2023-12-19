const score = 95
// console.log(score)

// declare a numder in to object 
// const anotherScore = new Number(100)

// console.log(anotherScore);

// const anotherNumber  = new Number(100)

// console.log(anotherNumber.toString().length)
// console.log(anotherNumber.toFixed(2))  //mostly use in e-commerce website price tag

const decimalNum = 13.59

// console.log(decimalNum.toPrecision(2))  // this fucntion helps to get the precise value 

const price = 1000000

// console.log(price.toLocaleString('en-IN'))


// ************** Maths *****************
console.log(Math)

console.log(Math.abs(-4))  //to get abolute value convert negative value into positive 
console.log(Math.round(4.5)) // it helps to roundoff the value
console.log(Math.ceil(4.2)) // it also help to roundoffing the value 4.2 => 5 //retuns
console.log(Math.floor(4.9)) //// it also help to roundoffing the value 4.9 => returns 4

console.log(Math.min(2,5,5,6,8,10)) //return the min value present in array
console.log(Math.max(2,5,5,6,8,10)) //return the max value present in array


Math.random()  // giving random value between 0 to 1

console.log(Math.floor(Math.random()*10) + 1);

const min = 10
const max = 20

console.log(Math.floor(Math.random() * (max - min + 1) + min))
