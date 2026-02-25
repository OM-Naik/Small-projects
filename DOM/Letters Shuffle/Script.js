const letters1 = document.querySelector("h1");
const letters2 = document.querySelector("h3");
const characters = "abcdefghijklmnopqrstuvwxyz";
const letters1Text = letters1.textContent;
const letters2Text = letters2.textContent;
let interation = 0;

function shuffleLetters1() {
    const str = letters1Text.split("").map((char, index) => {

        if (index < interation) {
            return char;
        }
        return characters.split("")[Math.floor(Math.random() * characters.length)];
    }).join("");
    letters1.textContent = str;

    interation += 0.2;

}

function shuffleLetters2() {
    const str = letters2Text.split("").map((char, index) => {
        if (index < interation) {
            return char;
        }
        return characters.split("")[Math.floor(Math.random() * characters.length)];
    }).join("");
    letters2.textContent = str;Y
    interation += 0.2;

}

letters1.addEventListener("mouseenter", function () {
    setInterval(shuffleLetters1, 100);
});

letters2.addEventListener("mouseenter", function () {
    setInterval(shuffleLetters2, 100);
});