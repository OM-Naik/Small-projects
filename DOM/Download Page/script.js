// var grow = 0;
// var btn = document.querySelector("button");
// var h2 = document.querySelector("h2");
// var inr = document.querySelector(".inner")

// btn.addEventListener("click", function () {

//     btn.style.pointerEvents = 'none';
//     var timeofdowload = 50 + Math.floor(Math.random() * 50);


//     var interval = setInterval(() => {
//         grow++;
//         h2.innerHTML = grow + "%";
//         inr.style.width = grow + "%";
//     }, timeofdowload)

//     setTimeout(() => {
//         clearInterval(interval);
//         btn.innerHTML = "Completed";
//         btn.style.opacity = "0.6";
//     }, timeofdowload * 100);

//     console.log(`Your file will download in ${timeofdowload / 10} seconds`);
// });

var grow = 0;
var btn = document.querySelector("button");
var h2 = document.querySelector("h2");
var inr = document.querySelector(".inner");

btn.addEventListener("click", function () {
    btn.style.pointerEvents = 'none';
    var timeofdowload = 50 + Math.floor(Math.random() * 50);

    var interval = setInterval(() => {
        grow++;
        h2.innerHTML = grow + "%";
        inr.style.width = grow + "%";

        if (grow >= 100) {
            clearInterval(interval);
            btn.innerHTML = "Completed";
            btn.style.opacity = "0.6";
        }
    }, timeofdowload);

    console.log(`Your file will download in ${timeofdowload / 10} seconds`);

});
