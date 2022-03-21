$(".menu-icon").click(function() {
    $("ul").css({
        "left": "0",
        "color": "#fff",
        "text-align": "center",
        "font-size": "1.2rem"
    })
    $("ul li:first-child").css("display", "block")
    $("#overlay").css("display", "block")
})

$("#overlay").click(function() {
    $("ul").css({
        "left": "-250px",
        "color": "#111111"
    })
    
    $("#overlay").css("display", "none")
})

$("ul li:first-child").click(function() {
    $("ul").css({
        "left": "-250px",
        "color": "#111111"
    })
    $("#overlay").css("display", "none")
})

$(window).resize(function() {
    if($(window).innerWidth() > 991) {
        $("ul").css({
            "left": "-250px",
            "color": "#111111"
        })
        $("ul li:first-child").css("display", "none")
        $("#overlay").css("display", "none")      
    } 
   
})