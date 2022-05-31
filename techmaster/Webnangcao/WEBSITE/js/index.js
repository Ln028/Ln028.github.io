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
var body = document.querySelector("body")

backdropFull.addEventListener("click", function() {
    backdropFull.classList.toggle("hidden")
    signin.classList.add("hidden")
    signup.classList.add("hidden")
    body.classList.toggle("overflow-hidden")
    
})

var cartPlus = document.querySelectorAll(".cart-plus")
for (let i = 0; i < cartPlus.length; i++) {
    cartPlus[i].addEventListener("click", function() {
        alert("Thêm vào giỏ hàng thành công")
    })   
}