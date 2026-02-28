// Mobile Navigation Toggle
var menu = document.querySelector(".ri-menu-line");
var close = document.querySelector(".ri-close-line");
var navbar = document.querySelector(".subnav");

if (menu) {
    menu.addEventListener("click", function() {
        navbar.style.top = "0%";
    });
}

if (close) {
    close.addEventListener("click", function() {
        navbar.style.top = "-109%";
    });
}
