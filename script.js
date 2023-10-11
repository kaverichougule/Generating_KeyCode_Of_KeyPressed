const audio = new Audio("./audio1.mp3");
document.body.addEventListener("keydown",WhichKeyPressed)
console.log(audio)

function WhichKeyPressed(event){
    audio.play()
    // console.log(event)      gives the object of the event performed
    let keypressed=event.key;
    let youPressed=document.getElementById('key_pressed')
    youPressed.innerText="You Pressed: "+keypressed;

    let InputKeyCode=event.keyCode
    let Key_Code=document.getElementById('keyCode');
    Key_Code.classList.add('displayNumber')
    Key_Code.innerText=InputKeyCode
}

