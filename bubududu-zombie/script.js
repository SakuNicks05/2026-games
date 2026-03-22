const player = document.getElementById("player");

function jump() {
    player.style.bottom = 200 + "px";
    requestAnimationFrame(jump);
}

document.addEventListener("click", () => {
    player.style.bottom = 200 + "px";
    
    setTimeout(() => {
        player.style.bottom = 100 + "px";
    }, 1000);
});