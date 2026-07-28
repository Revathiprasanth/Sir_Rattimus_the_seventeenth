// create a new HTML element
const sirRat = document.createElement("div");
// give it an id, its like a name tag
sirRat.id = "sir-rattimus";
// add to webpage
document.body.appendChild(sirRat);//child?, make it visible

const followDistance = 200;
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

        sirRatX += (cursorX - sirRatX) * 0.05;

    }


    sirRatY = window.innerHeight - 100;


    sirRat.style.transform =
    `translate(${sirRatX}px, ${sirRatY}px)`;


    requestAnimationFrame(animate);
}

animate();