//for of
let arr = [1,2,3,4,5]

for (const num of arr) {
 //   console.log(num)
}

const name = "aman"

for (const singlename of name) {
   // console.log(singlename)
}


const superheros = new Map()
superheros.set('Iron man' , 'Tony Stark')
superheros.set('Thor', "Chris Hemsworth")
superheros.set('Black Widow', "Scarlett Johansson")

// console.log(superheros)

for (const [superHeroName , realName] of superheros) {
    console.log(`${realName} :- ${superHeroName} `)
}

let myObj = {
    name : "Aman",
    age : 21 ,
    location : "Punjab",
    email : "aman@yahoo.com",
}
console.log(myObj)

for (const getmyObj of myObj) {
    console.log(getmyObj)
}