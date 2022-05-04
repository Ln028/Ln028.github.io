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
    info.classList.add("hidden")
    pay.classList.add("hidden")
    allVoucher.classList.add("hidden")
    success.classList.add("hidden")
   
})

var info = document.getElementById("info")
var changeInfo = document.getElementById("change-info")

changeInfo.addEventListener("click", function() {
    info.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})

var pay = document.getElementById("pay")
var payChoice = document.getElementById("pay-choice")

payChoice.addEventListener("click", function() {
    pay.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})

var changeVoucher = document.getElementById("change-voucher")
var myVoucher = document.getElementById("my-voucher")
var applyVoucher = document.getElementById("apply-voucher")
var allVoucher = document.getElementById("voucher")
var voucherClose = document.getElementById("voucher-close")

applyVoucher.addEventListener("click", function() {
    myVoucher.classList.toggle("hidden")
})
changeVoucher.addEventListener("click", function() {
    myVoucher.classList.toggle("hidden")
    allVoucher.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})
voucherClose.addEventListener("click", function() {
    allVoucher.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})


var order = document.getElementById("confirm")
var success = document.getElementById("success")

order.addEventListener("click", function() {
    success.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})



const provinceEl = document.getElementById("province")
const districtEl = document.getElementById("district")
const wardEl = document.getElementById("commune")

async function getProvince() {
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/")

        //render:
        console.log(res.data);
        renderProvince(res.data)
    } catch(err) {
        console.log(err);
    }
}

function renderProvince(arr) {
    arr.forEach(ele => {
        provinceEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`
    })
}
provinceEl.addEventListener("change", async function(){
    try {
        let provinceCode = provinceEl.value
        let res = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
        console.log(res.data.districts);
        districtEl.innerHTML = ""
        wardEl.innerHTML = ""
        renderDistrict(res.data.districts)

    } catch(err) {

    }
})
function renderDistrict(arr) {
    arr.forEach(ele => {
        districtEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`
    })
}

districtEl.addEventListener("change", async function(){
    try {
        let districtCode = districtEl.value
        let res = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
        console.log(res.data.wards);
        wardEl.innerHTML = ""
        renderWards(res.data.wards)

    } catch(err) {

    }
})

function renderWards(arr) {
    arr.forEach(ele => {
        wardEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`
    })
}



getProvince()