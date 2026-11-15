var scrollBtn = document.getElementById("id_scroll");
var upScrollBtn = document.getElementById("up_scroll_btn");

scrollBtn.addEventListener("click", function () {
    window.scrollTo({top: window.innerHeight, behavior: "smooth"});
});

upScrollBtn.addEventListener("click", function () {
    window.scrollTo({top: 0, behavior: "smooth"});
});

window.addEventListener("scroll", function () {
    upScrollBtn.style.right = (window.scrollY > 90) ? "1em" : "-44px";
});