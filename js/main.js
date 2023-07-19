const humbToggle = document.querySelector("#hamburger-toggle");
const menu = document.querySelector("#menu");
const show = document.querySelector("#show-menu");
const close = document.querySelector("#close");
humbToggle.addEventListener("click", function () {
    if (menu.classList.contains("hidden")) {
        menu.classList.toggle("hidden");
        menu.classList.toggle("showNav");
        menu.classList.add("-z-10");
        humbToggle.classList.add("opacity-0");
        humbToggle.classList.add("translate-x-40");
    }
})
console.log(close);
close.addEventListener("click", function () {
    if (!menu.classList.contains("hidden")) {
        menu.classList.toggle("hidden");
        menu.classList.toggle("showNav");
        menu.classList.add("-z-10");
        humbToggle.classList.remove("opacity-0");
        humbToggle.classList.remove("translate-x-40");
    }
})