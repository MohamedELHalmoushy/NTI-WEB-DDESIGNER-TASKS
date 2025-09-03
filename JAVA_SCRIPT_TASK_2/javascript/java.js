var img = document.getElementById("mainImage");
var btn = document.getElementById("toggleBtn");
var originalSrc = "images/english.png";
var newSrc = "images/espanol.png";
var toggled = false;

btn.addEventListener("click", function () {
    if (toggled) {
        img.src = originalSrc;
        btn.textContent = "Change Image";
    } else {
        img.src = newSrc;
        btn.textContent = "Back to Original";
    }
    toggled = !toggled;
});