// Immediately Invoked Function Expression

(function(){
    console.log('Hello')
})();

( (name) => {
    console.log('Hello, '+name)
})('aman')