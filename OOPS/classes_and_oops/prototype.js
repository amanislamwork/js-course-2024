String.prototype.trueLength = function(){
    console.log(`${this}`);
    console.log(`True length is: ${this.trim().length}`);
}

let myHeros = ['thor' , 'spiderman']

let HeroPower = {
    thor : 'hammer',
    spiderman : 'web',

    getSpiderpower : function(){
        console.log(`spipy power is ${this.spiderman}`)
    }
}

Object.prototype.aman = function(){
    console.log('aman is present in all object')
}


Array.prototype.heyaman = function(){
    console.log('Hi Aman')
}


// HeroPower.aman();



// ************** Inheritence *********************
const User = {
    name: "chai",
    email: "chai@google.com"
}

const Teacher = {
    makeVideo: true
}

const TeachingSupport = {
    isAvailable: false
}

const TASupport = {
    makeAssignment: 'JS assignment',
    fullTime: true,
    __proto__: TeachingSupport
}

Teacher.__proto__ = User

// modern syntax
Object.setPrototypeOf(TeachingSupport, Teacher)


let myName = "Aman   "

myName.trueLength()
