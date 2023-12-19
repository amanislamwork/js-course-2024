const marvelHeros = ['Thor', 'Iron Man' , 'Spiderman']
const dcHeros = ['Superman', 'Flash' , 'Batman']

//marvelHeros.push(dcHeros) //add another array in parent array

// console.log(marvelHeros[3][1]) 


let allHeros =  marvelHeros.concat(dcHeros)  // concate two different arrays in one new array

let  all_new_heros = [...marvelHeros , ...dcHeros]  // spread different arrays into one array 


// console.log(all_new_heros)


const another_array = [1,2,3,4,[5,6],7,8,[9,[10,11]]]

const another_array_combined = another_array.flat(Infinity) // combine array its subs-array and its subsarray into new single array

console.log(another_array_combined)


console.log(Array.isArray('hitesh')) // check its an array our not
console.log(Array.from('hitesh')) // convert into array

console.log(Array.from({name : 'hitesh'})) // return empty array


let num1 = 100
let num2 = 200
let num3 = 300
console.log(Array.of(num1, num2 , num3))
