var main = document.querySelector("main");
var ironman = document.querySelector("main img");

// Follow cursor
main.addEventListener("mousemove", function (dets) {
    ironman.style.left = dets.clientX + "px";
    ironman.style.top = dets.clientY + "px";
    ironman.style.opacity = 1;   // show when inside
});

// Hide when mouse leaves
main.addEventListener("mouseleave", function () {
    ironman.style.opacity = 0;   // hide when outside
});

// Show again when entering
main.addEventListener("mouseenter", function () {
    ironman.style.opacity = 1;
});
