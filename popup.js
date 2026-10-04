const ratToggle=document.getElementById("ratToggle");
const followToggle= document.getElementById("followToggle");
const wanderToggle = document.getElementById("wanderToggle");

const stateText = document.getElementById("stateText");

ratToggle.addEventListener("change",() => {
    if (ratToggle.checked) {
        stateText.textContent= "Standing";
    }else{
        stateText.textContent = "Sleeping";
    }
});
folowToggle.addEventListener("change",() => {
    console.log("Follow cursor:",followToggle.checked);
});

wanderToggle.addEventListener("change",() => {
    console.log("wander:",wanderToggle.checked);
});