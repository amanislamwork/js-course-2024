function Setusername(username){
    this.username = username
    console.log('called')
}

function createuser(username,email,password){
   Setusername.call(this,username)

    this.email = email
    this.password = password
}

const user1 = new createuser('mohan' , 'mohan@email.com' , "123456789")

console.log(user1)