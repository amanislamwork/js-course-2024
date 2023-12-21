// function calculatePrice(num1){
//     return num1
// }

// console.log(calculatePrice(100,200,300,4000))  //return 100


// let use rest 
function calculatePrice(...num1){
    return num1
}

console.log(calculatePrice(100,200,300,4000)) //return [ 100, 200, 300, 4000 ]

const myObj = {
    name : "aman",
    age : 21
}

function getMyObj(getObj){
    console.log(getObj.name)
}

getMyObj(myObj)


const myArr = [ 1 , 2 , 3 , 4 ]

function getMyArr(getArr){
        console.log(getArr[0] * getArr[3])
}

getMyArr(myArr)