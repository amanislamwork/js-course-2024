const myNums = [1,2,3]

// const myTotal = myNums.reduce((acc , curVal) => {
//     console.log(`acc => ${acc} , current Value => ${curVal}`)
//     return acc + curVal
// },0)

const myTotal = myNums.reduce((acc , curVal) =>  acc + curVal,0)

console.log(myTotal);


const shoppingCart = [
    {
        itemName: "js course",
        price: 2999
    },
    {
        itemName: "py course",
        price: 999
    },
    {
        itemName: "mobile dev course",
        price: 5999
    },
    {
        itemName: "data science course",
        price: 12999
    },
]

const totalPrice = shoppingCart.reduce( (acc, items) => acc + items.price , 0 )

console.log(totalPrice);