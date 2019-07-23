const pressed = [];
const secretCode = 'wesbos';

window.addEventListener('keyup', (e) => {
    pressed.push(e.key);
    console.log(pressed);
    //console.log((-(secretCode.length) - 1) + ' __ ' + (pressed.length - secretCode.length));
    pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length);
    if(pressed.join('').includes(secretCode)) {
        console.log('You did it!');
        cornify_add();
    }
    console.log(pressed);
});