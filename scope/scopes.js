
var c = 300

if(true){
    let a = 10
    const b = 20
    var c = 30     //going out the block scope (block scope ⇄ globe scope)

    // console.log(a);
}

// console.log(a)
// console.log(b)            
// console.log(c)


function user(){
    const userName = "Aman"
    function city(){
        let cityName = "punjab"
        console.log(userName)
        function GetCityname(){
            console.log(cityName)
        }
        GetCityname()
    }
    
   city()
}

user()

/*Note for Above nested function:
Parent function dont access child function variable but child function can access variable from parent functions
*/

if(true){
    const firstName = "Tony"
    if(true){
        const lastName = "Stark"
       console.log(`${firstName} ${lastName}`)
    }
//    console.log(firstName)
    
}


// ***************diff b/w Function and expression

//Function 
// console.log(addOne(8))   // it can be call before the function define

function addOne(num){
    return num + 1
}




//Expression
// console.log(addTwo(8)) //but it through error if we call it before expression is define


const expxsion =  function(num){
    return num + 2
}

// console.log(expxsion(8))











