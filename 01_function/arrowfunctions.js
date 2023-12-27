const user = {
    name : "Aman",

    printMessage : function(){
        console.log(`Welcome Back, ${this.name}`)
        console.log(this)
    }
}

// user.printMessage();
// user.name = "Sam";
// user.printMessage();

// console.log(this)


function gym(){
    console.log(this);
}

// gym()


// arrow function 

// const sayMyName =  function(firstname,lastname){
//        console.log(`say my name ? `)
//        console.log(`${firstname} ${lastname} `)
//        console.log(`! You god damn right`)
// }

// sayMyName("John","Wick")

// exterior return
// () => {

// }

// const sayMyName = (firstname,lastname) => {
//     return `say my name ? ${firstname} ${lastname} ! You god damn right`
// }

// console.log(sayMyName("John","Wick")) 


// interior return
const sayMyName = (firstname,lastname) =>  ( `say my name ? ${firstname} ${lastname} ! You god damn right` )

console.log(sayMyName("John","Wick")) 

