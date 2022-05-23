const heading = $("#heading")

console.log(heading);

//html(), text(), val()
heading.html("Xin chao")

//style
//Chen tung thuoc tinh:
heading.css("color", "red")
//Chen nhieu thuoc tinh:
heading.css({
    "color": "green",
    "background-color": "red"
})
//Su kien:
$(".btn").click(function() {
    $("#heading").fadeToggle()
})

$(".para").each(function(index, ele) {
    $(ele).css("color", "blue")
})

$(".box ul li").eq(2).css("color", "blue")
$(".box ul li").first().css("color", "green")
$(".box ul li").last().css("color", "red")

$.ajax({
    type: "GET",
    url: "https://dog.ceo/api/breeds/image/random",
    success: function(res) {
        console.log(res);
    },
    error: function(err) {
        console.log(err);
    }
})

async function getRandom() {
    let res = await fetch("https://dog.ceo/api/breeds/image/random")
    let data = await res.json()
    console.log(data);
}

getRandom()
