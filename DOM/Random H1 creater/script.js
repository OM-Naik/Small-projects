// var butn = document.querySelector("button");
// var containerrrr = document.querySelector(".container");

// butn.addEventListener("click", function () {
//     var h1 = document.createElement("h1");
//     h1.textContent = "Hello World";

//     var X = Math.floor(Math.random() * 100);
//     var Y = Math.floor(Math.random() * 100);
//     var rot = Math.floor(Math.random() * 360);

//     h1.style.position = "absolute";


//     h1.style.left = X + '%';
//     h1.style.top = Y + '%';
//     h1.style.rotate = rot + 'deg';

//     containerrrr.appendChild(h1);
// });

var butn = document.querySelector("button");
var containerrrr = document.querySelector(".container");
var elem = ['Hello World', 'Welcome!', 'Hi there!', 'Greetings!', 'Salutations!', 'Howdy!', 'Hey!', 'What\'s up?', 'Good day!', 'Yo!'];

butn.addEventListener("click", function () {
    var h1 = document.createElement("h1");

    var X = Math.floor(Math.random() * 100);
    var Y = Math.floor(Math.random() * 100);
    var rot = Math.floor(Math.random() * 360);
    var randomIndex = Math.floor(Math.random() * elem.length);
    var scl = Math.random() * 2;

    h1.style.transform = `scale(${scl})`;

    h1.textContent = elem[randomIndex];

    h1.style.position = "absolute";


    h1.style.left = X + '%';
    h1.style.top = Y + '%';
    h1.style.rotate = rot + 'deg';

    containerrrr.appendChild(h1);
});