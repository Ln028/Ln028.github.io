

$.get("https://dog.ceo/api/breeds/list/all", function(res) {
    let breedsList = Object.keys(res.message)
    $.each(breedsList, function(index, element) {
        $("#list").append(`<option>${element}</option>`)
    })
})


$(".btn").click(function() {
    $.get(`https://dog.ceo/api/breed/${$("select").val()}/list`, function(res) {
        let subBreedAll = res.message
        $("#content").text("")
        $("img").attr("src", "")
        
        $("#content").append(`<ul>Sub Breeds List</ul>`)
        if(subBreedAll.length == 0) {
            $("ul").append("<li>Khong co sub breed</li>")
            return
        } 
        $.each(subBreedAll, function(index, element) {
            $("ul").append("<li><a></a></li>")
            $("a").text(`${element}`)
            $("a").attr("href", "#")

            $("a").click(function() {
                $.get(`https://dog.ceo/api/breed/${$("select").val()}/${element}/images`, function(res) {
                    let imgRandom = res.message
                    $("img").attr("src", `${imgRandom[Math.floor(Math.random() * imgRandom.length)]}`)
                    
                })
                
               
            })
        })
        
    })
    
})

    