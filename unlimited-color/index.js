//generate a random color

const randomColor = function(){
    const hex = "0123456789ABCDEF"

    let color = '#'

    for(i = 0; i < 6; i++){
        color += hex[Math.round(Math.random()*16)]

    }
    return color
}

let intervalId;
const startChangingColor = function(){

    intervalId = setInterval(changebgcolor,1000)
    
    function changebgcolor(){
        document.body.style.backgroundColor = randomColor();
    }


}
const  stopChangingColor = function(){
    clearInterval(intervalId)
    intervalId = null;
}

document.querySelector('#start').addEventListener('click',startChangingColor)
document.querySelector('#stop').addEventListener('click', stopChangingColor)