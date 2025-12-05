var img = document.querySelector('.main-img');
var like = document.querySelector('#like');

img.addEventListener('dblclick', function () {
    // Remove animation class so it can restart
    like.classList.remove("animate");

    // Force reflow to restart animation
    void like.offsetWidth;

    // Add animation class
    like.classList.add("animate");
});
