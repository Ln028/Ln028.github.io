var btn = document.querySelector("button")

var sidebar = document.getElementById("sidebar")
var toggleSidebarMobileHamburger = document.getElementById("toggleSidebarMobileHamburger")
var toggleSidebarMobileClose = document.getElementById("toggleSidebarMobileClose")

var sidebarBackdrop = document.getElementById("backdrop")
var content = document.getElementById("content")

var click = function() {
    toggleSidebarMobileHamburger.classList.toggle("hidden");
    toggleSidebarMobileClose.classList.toggle("hidden");
    sidebar.classList.toggle("hidden");
    sidebarBackdrop.classList.toggle("hidden")
    content.classList.toggle("fixed")


}
btn.addEventListener("click", click)

sidebarBackdrop.addEventListener("click", click)

