const accountId = 123456
let accountEmail = "aman@google.com"
var accountPassword = "654321"
accountCity = "jaipur"
let accountState

//accountId = 2 Not Allowed
accountEmail ="islam@google.com"
accountPassword =" 212121"
accountCity ="mumbai"

console.log(accountId);

console.table([
    accountEmail,
    accountPassword,
    accountCity,
    accountState
])

// {} => scope

/*
pefer not to use var
because of issue in block scope and functional scope
*/