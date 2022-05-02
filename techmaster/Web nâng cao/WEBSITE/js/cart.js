var btnSignin = document.getElementById("btn-signin")
var btnSignup = document.getElementById("btn-signup")
var signin = document.getElementById("signin")
var signup = document.getElementById("signup")
var signinClose = document.getElementById("signin-close")
var signupClose = document.getElementById("signup-close")
var dangKy = document.getElementById("dang-ky")
var dangNhap = document.getElementById("dang-nhap")
var backdropFull = document.getElementById("backdrop-full")

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
backdropFull.addEventListener("click", function() {
    backdropFull.classList.toggle("hidden")
    signin.classList.add("hidden")
    signup.classList.add("hidden")
    deleteCart.classList.add("hidden")
    voucher.classList.add("hidden")
})

var deleteTrash = document.querySelector(".trash")
var deleteCart = document.querySelector(".delete-cart")



deleteTrash.addEventListener("click", function() {
    deleteCart.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})

// function trash(arr) {
    //     for (let i = 0; i < arr.length; i++) {
    //         const element = arr[i];
    //         element.addEventListener("click", function() {
    //             deleteCart.classList.toggle("hidden")
    //             backdropFull.classList.toggle("hidden")
    //         })
            
    //     }
    //     return trash(deleteTrash)
    // }
    
var voucher = document.getElementById("voucher")
var code = document.getElementById("code")
var voucherClose = document.getElementById("voucher-close")


code.addEventListener("click", function() {
    voucher.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})
voucherClose.addEventListener("click", function() {
    voucher.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})