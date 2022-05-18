var btnSignin = document.getElementById("btn-signin")
var btnSignup = document.getElementById("btn-signup")
var signin = document.getElementById("signin")
var signup = document.getElementById("signup")
var signinClose = document.getElementById("signin-close")
var signupClose = document.getElementById("signup-close")
var dangKy = document.getElementById("dang-ky")
var dangNhap = document.getElementById("dang-nhap")
var backdropFull = document.getElementById("backdrop-full")
var account = document.getElementById("account")

btnSignin.addEventListener("click", function() {
    signin.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})
btnSignup.addEventListener("click", function() {
    signup.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})
signinClose.addEventListener("click", function() {
    signin.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})
signupClose.addEventListener("click", function() {
    signup.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})
dangKy.addEventListener("click", function() {
    signin.classList.toggle("hidden")
    signup.classList.toggle("hidden")
})
dangNhap.addEventListener("click", function() {
    signin.classList.toggle("hidden")
    signup.classList.toggle("hidden")
})
account.addEventListener("click", function() {
    signin.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})
backdropFull.addEventListener("click", function() {
    backdropFull.classList.toggle("hidden")
    signin.classList.add("hidden")
    signup.classList.add("hidden")
    policy.classList.add("hidden")
})


var policy = document.getElementById("policy")
var policyClose = document.getElementById("policy-close")
var policyMore = document.getElementById("policy-more")
var backdropFull = document.getElementById("backdrop-full")


policyMore.addEventListener("click", function() {
    policy.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})

policyClose.addEventListener("click", function() {
    policy.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
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

    