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

close.addEventListener("click", function () {
    if (!menu.classList.contains("hidden")) {
        menu.classList.toggle("hidden");
        menu.classList.toggle("showNav");
        menu.classList.add("-z-10");
        humbToggle.classList.remove("opacity-0");
        humbToggle.classList.remove("translate-x-40");
    }
})

// Paket
// const packets = document.querySelectorAll(".packet");
// const btns = document.querySelectorAll(".btn-package");
// packets[0].addEventListener("click", function(){
//     packets[0].classList.toggle("bg-[#1F2127]");
//     packets[0].classList.toggle("choosed");
//     btns[0].classList.toggle("btnUnchoose");
//     btns[0].classList.toggle("btnChoosed");
// })

// Dark mode 
const html = document.querySelector("html");
const darkBtn = document.querySelectorAll(".dark-btn");
const lightBtn = document.querySelectorAll(".light-btn");

darkBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        html.classList.remove("dark")
    })
})

lightBtn.forEach(btn => {
    btn.addEventListener("click", function(){
        html.classList.add("dark")
    })
})