document.addEventListener("keydown",WhichKeyPressed)
function WhichKeyPressed(event){
    // Taking Input
    let keypressed=event.key;
    let youPressed=document.getElementById('key_pressed')
    // for giving output
    let InputKeyCode=event.keyCode
    let Key_Code=document.getElementById('keyCode');
    Key_Code.classList.add('displayNumber')

    // print the input and output
    if(event.ctrlKey && event.keyCode!=17){
        youPressed.innerText="You Pressed: Ctrl+"+keypressed;
        Key_Code.innerText="17+"+InputKeyCode
    }
    else if(event.altKey && event.keyCode!=18){
        youPressed.innerText="You Pressed: Alt+"+keypressed;
        Key_Code.innerText="18+"+InputKeyCode
    }
    else if(event.shiftKey && event.keyCode!=16){
        youPressed.innerText="You Pressed: Shitf+"+keypressed;
        Key_Code.innerText="16+"+InputKeyCode

    }
    else{
        youPressed.innerText="You Pressed: "+keypressed;
        Key_Code.innerText=InputKeyCode
    }
}