//for in loop

let myObj = {
    name : "Aman",
    age : 21 ,
    location : "Punjab",
    email : "aman@yahoo.com",
}
// console.log(myObj);

for (const key in myObj) {
  console.log(`keys => ${key} and value => ${myObj[key]}`)
}

let myArr = [1,2,3,4,5,6]

for (const key in myArr) {
   console.log(`key is ${key} and value is ${myArr[key]}`);
}


// const superheros = new Map()
// superheros.set('Iron man' , 'Tony Stark')
// superheros.set('Thor', "Chris Hemsworth")
// superheros.set('Black Widow', "Scarlett Johansson")

// for (const key in superheros) {
//    console.log(key)
// }

//note ↑
//for in loop unable to itterate Map()
