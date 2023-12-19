// dates

let mydate = new Date()

// console.log(mydate.toString())
// console.log(mydate.toLocaleString())
// console.log(mydate.toDateString())
// console.log(mydate.toISOString())
// console.log(typeof mydate)


let mycreateddate = new Date("2023-01-14")
// let mycreateddate = new Date("01-14-2023")

// console.log(mycreateddate.toTimeString())
// console.log(mycreateddate.toLocaleString())



let myTimeStamp = Date.now()


// console.log(mycreateddate.getTime())
// console.log(mycreateddate.getTime())

// console.log(Math.round(myTimeStamp/1000))  // milliseconds to seconds


let newDate = new Date();

// console.log(newDate.getMonth()+1) // to get the current date cause january lying on 0 position in an object
// console.log(newDate.getDay()) 

let dateModify =  newDate.toLocaleString('default',{
     weekday : "long",
     year: "numeric",
     month: "long",
     day: "numeric",
})

console.log(dateModify);

