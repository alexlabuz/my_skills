/* ==========================================================================
   SCRIPT DU PORTFOLIO
   Deux petites choses seulement :
   1. Afficher la barre de navigation une fois le hero (écran d'accueil) passé
   2. Mettre à jour l'année dans le footer
   ========================================================================== */

// 1. Navigation : visible dès qu'on a fait défiler la moitié du hero
const nav = document.querySelector(".nav");
const hero = document.querySelector(".hero");

function updateNav() {
  const limit = hero.offsetHeight * 0.5;
  nav.classList.toggle("is-visible", window.scrollY > limit);
}

window.addEventListener("scroll", updateNav, { passive: true });
updateNav();

// 2. Année automatique dans le footer
document.getElementById("year").textContent = new Date().getFullYear();

// Gère le bouton pour revenir en hait de la page
var upScrollBtn = document.getElementById("up_scroll_btn");

upScrollBtn.addEventListener("click", function () {
    window.scrollTo({top: 0});
});

window.addEventListener("scroll", function () {
    upScrollBtn.style.right = (window.scrollY > 90) ? "1em" : "-44px";
});