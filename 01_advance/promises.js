<<<<<<< HEAD
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
=======
// Promise One
const newPromise = new Promise((resolve, reject) => {
  setTimeout(function () {
    // console.log("asyn task is completed");
    resolve();
  }, 1000);
});

newPromise.then((value) => {
  console.log("promise consume");
});
// Promise Two
new Promise((resolve, reject) => {
  setTimeout(function () {
    console.log("asyn task2 is completed");
    resolve();
  }, 1000);
}).then(() => {
  // console.log("promise 2 consume");
});

// Promise Three
let url = {
  username: "AmanislamWork",
  email: "amanislam@gmail.com",
};

const newPromiseTwo = new Promise((resolve, reject) => {
  setTimeout(function () {
    resolve(url);
  }, 1000);
});

newPromiseTwo.then((value) => {
  console.log(value);
});

// Promise Four

const newPromiseThree = new Promise((resolve, reject) => {
  setTimeout(function () {
    let error = false;
    if (!error) {
      resolve(url);
    } else {
      reject("Something Went Wrong");
    }
  }, 1000);
});

newPromiseThree
  .then((user) => {
    console.log(user);
    return user.username;
  })
  .then((name) => {
    console.log(name);
  })
  .catch((error) => {
    console.log(error);
  })
  .finally(() => {
    console.log("the promise either resolved or rejected");
  });


//   promise five

let url2 = {
    username: "Aman",
    phone: "+91 7894521535",
}

const newPromiseFour = new Promise((resolve, reject) => {
    setTimeout(function () {
        let error = true;
        if (!error) {
          resolve(url2);
        } else {
          reject("Error : JS Went Wrong");
        }
      }, 1000);
    })

    newPromiseFour.then((data)=>{
      console.log(data);
    }).catch((error)=>{
      console.log(error);
    })

async function consumePromiseFour(){
  try {
    const response =   await fetch('https://api.github.com/users/amanislamwork')
  const data =   await response.json()
  console.log(data)
  } catch (error) {
    console.log(error)
  }
} 
consumePromiseFour()


fetch('https://api.github.com/users/amanislamwork')
.then((reponse)=>{
  return reponse.json()
})
.then((data)=>{
    console.log(data)
    console.log(data.id)
})
.catch((error)=>{
  console.log(error)
})
.finally(() => console.log("code is either resolve and reject") )


// A fetch() promise only rejects when a network error is
//  encountered (which is usually when there's a permissions
//   issue or similar). A fetch() promise does not reject
//  on HTTP errors (404, etc.). Instead, a then() handler 
//  must check the Response.ok and/or Response.status properties.
>>>>>>> ffb3087f9ba2a49371818b9e80b23c4fe867e6e8
