const myArr = [0 , 1 , 2 , 3 , 4 , 5]
const myArr2 = new Array (0 ,1 ,2, 3, 4, 5)

// console.log(myArr)
// console.log(myArr2)



// methods
// myArr.push(6)
// myArr.push(7)
// myArr.pop()

// myArr.unshift(9);
//myArr.shift(9);


// console.log(myArr.includes(9))
// console.log(myArr.indexOf(9))
// console.log(myArr.indexOf(3))

const newArr = myArr.join(); //  .join helps to make the array into string

// console.log(myArr)
// console.log(typeof newArr)


// slice or splice

console.log("A" , myArr)  //current array return A [ 0, 1, 2, 3, 4, 5 ]

console.log(myArr.slice(1 , 3 ))
console.log("B" , myArr) // array after slice (original array remain the same) // return B [ 0, 1, 2, 3, 4, 5 ]


console.log(myArr.splice(1 , 3 ))
console.log("C" , myArr) // array after splice (array is affected after the splice) // return C [ 0, 4, 5 ]
