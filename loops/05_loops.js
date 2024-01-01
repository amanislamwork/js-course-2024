const myArr = ['java','python','javascript','c++']

// myArr.forEach( function (items){
//     console.log(items)
// })

// myArr.forEach( (items) => {
//     console.log(items)
// }
// )

function callitems(items){
    console.log(items)
}

myArr.forEach(callitems)
const myArr1 = [
    {
        langName : "Java",
        langFile : "Java"
    },
    {
        langName : "C Plus",
        langFile : "C+"
    },
    {
        langName : "Javascript",
        langFile : "Js"
    }
]

myArr1.forEach(( program ) =>{
    console.log(`${program.langFile} ⇉ ${program.langName} `  )
} )