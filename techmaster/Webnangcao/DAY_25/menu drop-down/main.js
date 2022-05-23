// const menuIconEl = document.querySelector(".menu-icon")
// const menuEl = document.querySelector(".menu ul")
// menuIconEl.addEventListener("click", function() {
//     menuEl.classList.toggle("show")
// })

// window.addEventListener("resize", function() {
//     if(window.innerWidth > 768) {
//         menuEl.classList.remove("show")
//     }
// })

let isShow = false

$(".menu-icon").click(function() {
    isShow = !isShow
    $(".menu ul").slideToggle(function() {
        if (isShow) {
            $(".menu ul").css("display", "flex")
        } else {
            $(".menu ul").css("display", "none")
        }
    })
})


$(window).resize(function() {
    if($(window).innerWidth() > 768) {
        $(".menu ul").css("display", "flex")
    } else {
        $(".menu ul").css("display", "none")
    }
   
})