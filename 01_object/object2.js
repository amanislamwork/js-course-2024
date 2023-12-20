
const tinderUser = new Object()

tinderUser.name = "selom bhai"
tinderUser.age = "50 par lagta nhi hai (to much vfx)"
tinderUser.MaritalStatus = "Bhai hi jante hai"


// console.log(tinderUser)

const nesting = {
    name : {
        fullname : {
            firstname : "Iron",
            lastName : "Iron",
        }
    }
}
// console.log(nesting.name.fullname.firstname)


// comibing two different object

const me = { 1 : "Anime" , 2 : "gym" } 
const you = { 3 : "Time" , 4 : "Ourself" } 

const meAndyou = Object.assign({} , me , you) // gottcha you ❤  Object.assign combine two different object into single {}
// console.log(meAndyou); 

// spread object 

const meAndyou2 = { ...me , ...you }
//  console.log(meAndyou); 

const myAry = [
    {
        name : "aman",
    }
]

console.log(myAry[0].name)


console.log(Object.keys(tinderUser)) // get all the keys of object in single array
// return [ 'name', 'age', 'MaritalStatus' ]
console.log(Object.values(tinderUser)) //get all the values of object in single array 
// return [
//     'selom bhai',
//     '50 par lagta nhi hai (to much vfx)',
//     'Bhai hi jante hai'
//   ]
console.log(Object.entries(tinderUser)) // get the key and value in pair array in the single array array 
// rerurn [
//     [ 'name', 'selom bhai' ],
//     [ 'age', '50 par lagta nhi hai (to much vfx)' ],
//     [ 'MaritalStatus', 'Bhai hi jante hai' ]
//   ]