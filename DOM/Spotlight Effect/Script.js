addEventListener("mousemove", function (event) {
    let spotlight = document.querySelector("main");
    let x = event.clientX;
    let y = event.clientY;
    spotlight.style.setProperty("--cursorX", x + "px");
    spotlight.style.setProperty("--cursorY", y + "px");
});