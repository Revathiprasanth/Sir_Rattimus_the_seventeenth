// create a new HTML element
const sirRat = document.createElement("div");
// give it an id, its like a name tag
sirRat.id = "sir-rattimus";
// add to webpage
document.body.appendChild(sirRat);//child?, make it visible

const followDistance = 200;
let walkDirection = 1;
const walkSpeed = 1;

//sirRat positions
let sirRatX = window.innerWidth - 70;
let sirRatY = window.innerHeight - 70;

//cursor position
let cursorX = sirRatX;
let cursorY = sirRatY;

//remember where cursor is
document.addEventListener('mousemove',(event) => {

    cursorX = event.clientX;
    cursorY = event.clientY;

    console.log(cursorX, cursorY)
});

//animation loop
function animate(){

    let distance = Math.abs(cursorX - sirRatX);


    if (distance < followDistance) {

    // follow cursor
    sirRatX += (cursorX - sirRatX) * 0.05;
}
    else {

    // wander around
    sirRatX += walkDirection * walkSpeed;

}



    sirRatY = window.innerHeight - 100;

    if (sirRatX > window.innerWidth - 70) {
    walkDirection = -1;
}
    
    if (sirRatX < 0) {
    walkDirection = 1;
}


    sirRat.style.transform =
    `translate(${sirRatX}px, ${sirRatY}px)`;


    requestAnimationFrame(animate);
}

animate();