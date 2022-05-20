var dangNhap = document.getElementById("dang-nhap")
var backdropFull = document.getElementById("backdrop-full")

backdropFull.addEventListener("click", function() {
    backdropFull.classList.toggle("hidden")
    signin.classList.add("hidden")
    signup.classList.add("hidden")
    policy.classList.add("hidden")
    body.classList.toggle("overflow-hidden")
})


var policy = document.getElementById("policy")
var policyClose = document.getElementById("policy-close")
var policyMore = document.getElementById("policy-more")
var backdropFull = document.getElementById("backdrop-full")


policyMore.addEventListener("click", function() {
    policy.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})

policyClose.addEventListener("click", function() {
    policy.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})


//Thay doi so luong sp:
    //Giam sl:
    const giamSl = document.querySelector(".down")
    const tangSl = document.querySelector(".up")
    const input = document.querySelector(".input")
    giamSl.addEventListener("click", function() {
        if(input.innerText == 1) {
            return
        }
        input.innerText = Number(input.innerText) - 1
        console.log(input.innerText);
    })
    tangSl.addEventListener("click", function() {
        input.innerText = Number(input.innerText) + 1
        console.log(input.innerText);
    })

    