//functions

// console.log('A');
// console.log('M');
// console.log('A');
// console.log('N');

function sayMeName(){
    console.log('A');
    console.log('M');
    console.log('A');
    console.log('N');
}

sayMeName // it just a refference function not executed 
sayMeName() //to execute the function you have to add "()" 

//                            ------------ these are parameters                         
//                           ↓   
function addTwoNumber(num1 , num2){
    console.log('hey World')
    return num1 + num2
}
//                            ------------ these are arguments                         
//                           ↓   
const result = addTwoNumber(2 , 50)

console.log(`Result → ${result}  `)


function userLoggin(Username) {
    if(!Username){
        console.log('Please enter valid Username')
        return
    }
    return `${Username} is just logged in to my website`
}

    
console.log(userLoggin())