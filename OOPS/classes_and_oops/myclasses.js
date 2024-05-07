//ES6

class user {
    constructor(name, age , password) {
        this.name = name;
        this.age = age;
        this.password = password;
    }

    encrptPassword(){
        return this.password + "ABC"
    }

    changeUsername(){
        return this.name.toUpperCase()
    }
}

const user1 = new  user("John", 30, "123")
console.log(user1.encrptPassword())
console.log(user1.changeUsername())