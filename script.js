// Année automatique dans le footer
document.getElementById('annee').textContent = new Date().getFullYear();

// Gère le bouton pour revenir en hait de la page
var upScrollBtn = document.getElementById("up_scroll_btn");

upScrollBtn.addEventListener("click", function () {
    window.scrollTo({top: 0});
});

window.addEventListener("scroll", function () {
    const btnClass = upScrollBtn.classList;
    (window.scrollY > 90) ? btnClass.remove("closed") : btnClass.add("closed");
});