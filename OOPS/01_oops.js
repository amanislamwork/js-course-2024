// // object literal

// const user = {
//     name : "aman",
//     loginCount : 20,
//     loggedIN : true,

//     getUserDetails : function(){
//       //  console.log(`name : ${this.name}`)
//       console.log(this);
//     }

// }



// console.log(user.getUserDetails())
// console.log(this);

function user(username,loginCount,isloggedin){
        this.username = username;
        this.loginCount = loginCount;
        this.isloggedin = isloggedin;

        this.greeting = ()=>{
            console.log('welcome' + this.username);
        }

        return this
}

const Userone = new user ('aman' , 25 , false,)
const Usertwo  = new user ('raman' , 10 , true)
console.log(Userone.constructor)
