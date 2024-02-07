const promisOne  = new Promise((resolve,reject)=>{
    // do and asyn task
    // BD calls , crypto graphy
    setTimeout(()=>{
        console.log('Asyn task is complete')
        resolve()
    },1000)
})

promisOne.then(()=>{
    console.log('promise consumed');
})


new Promise(function(resolve,reject){
    setTimeout(()=>{
        console.log('Asyn task 2 is completed');
        resolve()
    },1000)
}).then(()=>{
    console.log("asyn task 2 resolved");
})

let url = {
    username : "AmanislamWork",  
    email : "amanislam@gmail.com"
}

const promiseThree = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve(url)
    },1000)
})


promiseThree.then((user)=>{  // function taking user object
    Object.keys(user).forEach((key) => {
        console.log(`keys => ${key} value = ${user[key]}`)
    });
})

let logAuth = {
    username : "aman",
    password : "12345678"
}

const promiseFour = new Promise((resolve, reject)=>{
            setTimeout(() => {
                let error = true
                if (error) {
                   resolve(logAuth)     
                }else{

                }

                
            },2000);
})

promiseFour.then((user)=>{

})