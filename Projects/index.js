let randomNum = parseInt(Math.random() * 100 + 1)
console.log(randomNum)
const submitBtn = document.querySelector('#subt')
const guessField = document.querySelector('#guessField')
const previousGuesses = document.querySelector('.guesses')
const remaining = document.querySelector('.lastResult')
const lowOrHi = document.querySelector('.lowOrHi')
const StartOver = document.querySelector('.resultParas')

let p = document.createElement('p')

let preGuess = []

let numGuess = 1

let playGames = true

if (playGames) {
    submitBtn.addEventListener('click', (e) => {
        e.preventDefault()

        let guess = parseInt(guessField.value)
        validateGuess(guess)

    })
}


function validateGuess(guess) {
    if(isNaN(guess)){
        alert("Please Enter the Valid Number")
    }else if(guess < 1 ){
        alert('Please Enter the Number greater than 1')
    }else if(guess > 100){
        alert('Please Enter the Number greater than 1')
    }else{

        preGuess.push(guess)
        if(numGuess === 10){
            displayGuess(guess)
            displayMessage(`Your Game is Over. Random Number is ${guess}`)
            endGame()
        }else{
            displayGuess(guess)
            checkGuess(guess)
        }
    }
}

function checkGuess(guess) {
    if(guess == randomNum){
        displayMessage("🎯 Bulls Eye! You guessed it Right")
        endGame()
    }else if(guess < randomNum){
        displayMessage(`Number is TOO LOW`)
    }else if (guess < randomNum){
        displayMessage(`Number is TOOO High`)
    }
}

function displayGuess(guess) {
    guessField.value = ''
    previousGuesses.innerHTML += `${guess}, `
    numGuess++
    remaining.innerHTML = `${11 - numGuess}`
}

function displayMessage(message) {
    lowOrHi.innerHTML = `<h2> ${message} </h2>`
}

function endGame() {
    guessField.value = ' '
    guessField.setAttribute('disabled', '')
    p.innerHTML = `<a type="button" class = "btn btn-danger" id = "newGame"> Start new Game </a>`
    StartOver.appendChild(p)
    playGames = false;
    startGame()
}

function startGame() {
    let newGameBtn = document.querySelector('#newGame')
    newGameBtn.addEventListener('click', (e) => {
        randomNum = parseInt(Math.random() * 100 + 1);
        console.log(randomNum)
        preGuess = [];
        numGuess = 1;
        guessField.value = ''
        previousGuesses.innerHTML = ''
        lowOrHi.innerHTML = ''
        remaining.innerHTML = `${11 - numGuess}`
        guessField.removeAttribute('disabled')
        StartOver.removeChild(p)
       
        playGames = true
    })
}
