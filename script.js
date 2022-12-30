var defilementList = document.querySelector("#defilement_list")

document.querySelector('.home_page').addEventListener("click", () => {
    window.location.hash = "#home";
})

document.querySelectorAll(".mes_competence_page").forEach(element => {
    element.addEventListener("click", () => { 
        window.location.hash = "#my_competence";
    })
});

document.querySelector(".plus_page").addEventListener("click", () => {
    window.location.hash = "#plus"
})

function changePageByHash() {
    document.querySelector("#bottom_bar .home_page").classList.remove("active")
    document.querySelector("#bottom_bar .mes_competence_page").classList.remove("active")
    document.querySelector("#bottom_bar .plus_page").classList.remove("active")
    switch (window.location.hash) {
        case "#home":
        case "":
            defilementList.style.left = "0"
            document.querySelector("#bottom_bar .home_page").classList.add("active")
            break;
        case "#my_competence":
            defilementList.style.left = "-100%"
            document.querySelector("#bottom_bar .mes_competence_page").classList.add("active")
            break;
        case '#plus':
            defilementList.style.left = "-200%"
            document.querySelector("#bottom_bar .plus_page").classList.add("active")
    }
}

window.addEventListener("hashchange", () => changePageByHash())
changePageByHash()