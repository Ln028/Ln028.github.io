$(".menu-icon").click(function() {
    $(".menu-sidebar").css({
        "display": "flex",
        "left": "0",
        "color": "#fff",
        "text-align": "center",
        "font-size": "1.2rem"
    })
    $("#overlay").css("display", "block")
})

$("#overlay").click(function() {
    $(".menu-sidebar").css({
        "display": "none"
    })
    
    $("#overlay").css("display", "none")
})

$("ul li:first-child").click(function() {
    $(".menu-sidebar").css({
        "display": "none"
    })
    $("#overlay").css("display", "none")
})

$(window).resize(function() {
    if($(window).innerWidth() > 991) {
        $(".menu-sidebar").css({
            "display": "none"
        })
        $("#overlay").css("display", "none")      
    } 
   
})