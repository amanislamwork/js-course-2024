// for (let i = 0; i < 11; i++) {
//     const element = i;
//     if(element == 5){
//         console.log('5 is the best element')
//     }
//     console.log(element)
// }

// // console.log(element)

// for (let i = 1; i < 10; i++) {
//     console.log(`Table of ${i}`)
//     for (let j = 1; j < 10; j++) {
//         console.log(i + "*" + j + "=" + i*j  )
//     }
// }

// let myArr = ['Iron Man' , 'Thor' , 'Hulk']

// for (let index = 0; index < myArr.length; index++) {
//     const element = myArr[index];  
//     console.log(element);
// }


// for (let index = 1; index < 20; index++) {
//    if( index == 5){
//     console.log(`Here u are bloody ${index}`)
//     break
//    }
//     console.log(index);
// }

for (let index = 1; index < 20; index++) {
    if( index == 5){
     console.log(`i leave you this time, ${index} next time loop will be fired`)
     continue
    }
     console.log(index);
 }


 console.log(this)