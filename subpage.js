// Mobile Navigation Toggle
var menu = document.querySelector(".ri-menu-line");
var close = document.querySelector(".ri-close-line");
var navbar = document.querySelector(".subnav");

if (menu && navbar) {
    menu.addEventListener("click", function() {
        navbar.classList.add("is-open");
    });
}

if (close && navbar) {
    close.addEventListener("click", function() {
        navbar.classList.remove("is-open");
    });
}
