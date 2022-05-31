
// let a = [
//     {
//         id: 1
//     },
//     {
//         id: 2
//     }
// ]

// let values = localStorage.getItem("product_ids")

var backdropFull = document.getElementById("backdrop-full")

backdropFull.addEventListener("click", function() {
    backdropFull.classList.toggle("hidden")
    signin.classList.add("hidden")
    signup.classList.add("hidden")
    info.classList.add("hidden")
    pay.classList.add("hidden")
    allVoucher.classList.add("hidden")
    success.classList.add("hidden")
    body.classList.toggle("overflow-hidden")
   
})

var info = document.getElementById("info")
var changeInfo = document.getElementById("change-info")

changeInfo.addEventListener("click", function() {
    info.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})

var pay = document.getElementById("pay")
var payChoice = document.getElementById("pay-choice")

payChoice.addEventListener("click", function() {
    pay.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})

var allVoucher = document.getElementById("voucher")

var order = document.getElementById("order")
var success = document.getElementById("success")

order.addEventListener("click", function() {
    success.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")

})

var successClose = document.getElementById("success-close")
console.log(successClose);
successClose.addEventListener("click", function() {
    success.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})



const provinceEl = document.getElementById("province")
const districtEl = document.getElementById("district")
const wardEl = document.getElementById("commune")

async function getProvince() {
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/")

        //render:
        
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
        console.log(res.data);
        districtEl.innerHTML = `<option value="none">Chọn Quận/Huyện</option>`
        wardEl.innerHTML = `<option value="none">Chọn Phường/Xã</option>`
        renderDistrict(res.data.districts)
        console.log(provinceEl.options[provinceEl.selectedIndex].text);

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
        wardEl.innerHTML = `<option value="none">Chọn Phường/Xã</option>`
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



const cancel = document.querySelector(".cancel")
const confirm = document.querySelector(".confirm")
const name = document.querySelector(".name")
const telephone = document.querySelector(".telephone")
const address = document.querySelector(".address")
const nameInfo = document.querySelector(".name-info")
const nameErr = document.getElementById("name-error")
const diachinhanhang = document.querySelector(".diachi")
const diachiErr = document.getElementById("diachi-error")
const phoneEl = document.querySelector(".phone-number")
const phoneErr = document.getElementById("phone-error")
const tinh = document.querySelector("#province option")
const tinhErr = document.getElementById("province-error")
const huyen = document.querySelector("#district option")
const huyenErr = document.getElementById("district-error")
const xa = document.querySelector("#commune option")
const xaErr = document.getElementById("commune-error")
console.log(tinh.innerText);

function validatePhone(phoneEl) {
    var phoneNumb = /^\d{10}$/;
    return (phoneEl.value.match(phoneNumb))
}
cancel.addEventListener("click", function() {
    info.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})
confirm.addEventListener("click", async function () {
    const isValidPhone = validatePhone(phoneEl) 
    try {
        nameErr.innerText = ""
        diachiErr.innerText = ""
        phoneErr.innerText = ""
        tinhErr.innerText = ""
        huyenErr.innerText = ""
        xaErr.innerText = ""
        if(nameInfo.value == "" || diachinhanhang.value == "" || !isValidPhone || provinceEl.options[provinceEl.selectedIndex].text == "Chọn Tỉnh/Thành phố" || districtEl.options[districtEl.selectedIndex].text == "Chọn Quận/Huyện" || wardEl.options[wardEl.selectedIndex].text == "Chọn Phường/Xã") {
            if(nameInfo.value == "") {
                nameErr.innerText = "Không được để trống thông tin"
            }
            if(diachinhanhang.value == "") {
                diachiErr.innerText = "Không được để trống thông tin"
            }
            if(!isValidPhone) {
                phoneErr.innerText = "Số điện thoại phải có 10 chữ số"
            }
            if(provinceEl.options[provinceEl.selectedIndex].text == "Chọn Tỉnh/Thành phố") {
                tinhErr.innerText = "Không được để trống thông tin"
            }
            if(districtEl.options[districtEl.selectedIndex].text == "Chọn Quận/Huyện") {
               huyenErr.innerText = "Không được để trống thông tin"
            }
             if(wardEl.options[wardEl.selectedIndex].text == "Chọn Phường/Xã") {
                xaErr.innerText = "Không được để trống thông tin"
            }
            return
        }
        else {
            name.innerText = nameInfo.value
            telephone.innerText = phoneEl.value
            address.innerText = `${diachinhanhang.value}, ${wardEl.options[wardEl.selectedIndex].text}, ${districtEl.options[districtEl.selectedIndex].text}, ${provinceEl.options[provinceEl.selectedIndex].text}`
            info.classList.toggle("hidden")
            backdropFull.classList.toggle("hidden")
            body.classList.toggle("overflow-hidden")
            return
        }
    } catch (err) {
        console.log(err);
    }
})


var voucher = document.getElementById("voucher")
var code = document.getElementById("code")
var voucherClose = document.getElementById("voucher-close")


code.addEventListener("click", function() {
    voucher.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})
voucherClose.addEventListener("click", function() {
    voucher.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})
var voucherId = document.getElementById("voucher-id")
let vouchers = [
    {
        id: 4,
        title: "10",
        dvt: "%",
        condition: 400,
        hsd: "30.04.2022"
    },
    {
        id: 5,
        title: "8",
        dvt: "%",
        condition: 200,
        hsd: "30.04.2022"
    },
    {
        id: 6,
        title: "15",
        dvt: "k",
        condition: 150,
        hsd: "30.04.2022"
    },
    {
        id: 7,
        title: "20",
        dvt: "k",
        condition: 250,
        hsd: "30.04.2022"
    },
    {
        id: 8,
        title: "20",
        dvt: "%",
        condition: 600,
        hsd: "30.04.2022"
    }
]

function convertMoney(number) {
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
}

function renderVoucher(arr) {
    voucherId.innerHTML = "";
    let html1 = ""
    if(arr.length == 0) {
        voucherId.innerHTML = `<p class="text-center pt-5 text-red-500 font-bold">Không có mã khuyến mại</p>`;
        return
    }
    for (let i = 0; i < arr.length; i++) {
        const v = arr[i];
        html1 += `
        <div
        class="flex h-20 md:h-[123px] w-[260px] md:w-[350px] space-x-2 md:space-x-5 border border-emerald-800 rounded-r mx-auto hover:scale-105">
            <div class="relative w-20 md:w-[123px]">
                <div class=" absolute top-[5px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                <div class=" absolute top-[20px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                <div class=" absolute top-[35px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                <div class=" absolute top-[50px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                <div class=" absolute top-[65px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                <div class="hidden md:block absolute top-[80px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full ">
                </div>
                <div class="hidden md:block absolute top-[95px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full ">
                </div>
                <div class="hidden md:block absolute top-[110px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full ">
                </div>
                <img class="h-full" src="./image/Sonder2.png" alt="logo">
            </div>
            <div class="grow pr-2 text-xs md:text-sm space-y-1 md:space-y-3 flex flex-col justify-center">
                <div class="flex justify-between items-center space-x-2">
                    <p class="promo-code text-sm font-semibold text-red-500">Giảm <span>${v.title}</span><span>${v.dvt}</span></p>
                    <p onclick="addVoucher(${v.id})" class="text-emerald-800 cursor-pointer hover:underline whitespace-nowrap">Dùng ngay
                        <i class="fa-solid fa-chevron-right text-xs"></i>
                    </p>
                </div>
                <p>Đơn tối thiểu <span class="min-price">${v.condition}</span>k</p>
                <p class="text-gray-400">HSD: ${v.hsd}</p>
            </div>
        </div>
        `
    }
    voucherId.innerHTML = html1
}

renderVoucher(vouchers)

var codeId = document.getElementById("code-id")
var myVoucher = document.getElementById("myvoucher")
    

function addVoucher(id) {
    codeId.innerHTML = ""
    
    let html2 = ""

    for (let i = 0; i < vouchers.length; i++) {
        if(vouchers[i].id == id) {
            html2 = `
            <div
            class="flex h-20 w-fit space-x-2 border border-emerald-800 rounded-r mx-auto">
                <div class="relative w-20">
                    <div class=" absolute top-[5px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                    <div class=" absolute top-[20px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                    <div class=" absolute top-[35px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                    <div class=" absolute top-[50px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                    <div class=" absolute top-[65px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
                    <img class="h-full" src="./image/Sonder2.png" alt="logo">
                </div>
                <div class="grow pr-2 text-xs space-y-1 flex flex-col justify-center">
                    <div class="flex justify-between items-center space-x-2">
                        <p class="promo-code text-sm font-semibold text-red-500">Giảm <span>${vouchers[i].title}</span><span>${vouchers[i].dvt}</span></p>
                        <p onclick="addVoucher(${vouchers[i].id})" class="text-emerald-800 cursor-pointer hover:underline whitespace-nowrap">Đổi mã khác
                        <i class="fa-solid fa-chevron-right text-xs"></i>
                    </p>
                    </div>
                    <p>Đơn tối thiểu <span class="min-price">${vouchers[i].condition}</span>k</p>
                    <p class="text-gray-400">HSD: ${vouchers[i].hsd}</p>
                </div>
            </div>
            `
        } 
        codeId.innerHTML = html2
        voucher.classList.toggle("hidden")
        backdropFull.classList.toggle("hidden")
        body.classList.toggle("overflow-hidden")
    }
    updateTotalMoney(products)
}


let products = JSON.parse(localStorage.getItem("products"))

let productsEl = document.getElementById("products-payment")


function renderProduct(arr) {
    productsEl.innerHTML = "";
    

    //Kiem tra khong co san pham nao trong gio hang
    if(arr.length == 0) {
        productsEl.innerHTML = `<p class="text-center pt-5 text-red-500 font-bold">Không có sản phẩm nào trong giỏ hàng</p>`;
        return
    }
    //TH co sp:
    let html3 = ""
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];

        html3 += `
            <div class="flex justify-between mx-4 md:mx-0 md:grid grid-cols-2 py-7 items-center border-b">
                <div class="text-center flex flex-row items-center">
                    <img class="max-w-[175px] max-h-[175px] md:max-w-[232px] md:max-h-[232px]" src="${p.image}" alt="${p.title}">
                    <h5 class="hidden md:block font-semibold text-base"> ${p.title}</h5>
                </div>
                <div class="flex flex-col md:grid grid-cols-3 items-center space-y-4">
                    <h5 class="md:hidden font-semibold text-xs sm:text-base text-center"> ${p.title}</h5>
                    <p class="text-center text-red-500 md:text-black text-sm sm:text-base lg:text-lg font-medium">${convertMoney(p.price)}</p>
                    <span class="mx-auto w-8 md:w-12 text-center text-sm sm:text-base md:text-lg border border-gray-900 rounded">${p.count}</span>
                    <p class="text-center text-base lg:text-lg font-medium hidden md:block">${convertMoney(p.price*p.count)}</p>
                </div>
            </div>
        `
        
    }
    //Chen lai noi dung cho phan tu:
    productsEl.innerHTML = html3
}


const subtotal = document.querySelector("#subtotal")
const ship = document.querySelector("#ship")
const discount = document.querySelector("#discount")
const total = document.querySelector("#total")

function updateTotalMoney(arr) {
    let totalMoney = 0
    let shipMoney = 15000
    let discountMoney = 0
    for (let i = 0; i < arr.length; i++) {
        totalMoney += arr[i].count * arr[i].price
    }

    // //Ap dung ma giam gia:

    
    const code = document.querySelector("#code-id .promo-code")
    const codeNumber = document.querySelector("#code-id .promo-code span")
    
    if(!code) {
        discountMoney = 0
    } else {
        const min = document.querySelector("#code-id .min-price")
        if(Number(min.innerText)*1000 > Number(totalMoney)){
            codeId.innerHTML = `<p class="text-red-500 italic">Đơn hàng chưa đủ điều kiện áp dụng mã KM này</p>`
            discountMoney = 0
        } else {
            if (code.innerText.includes("%")) {
                discountMoney = Number(codeNumber.innerText) / 100 * totalMoney
                
            } if(code.innerText.includes("k")) {
                discountMoney = Number(codeNumber.innerText)*1000
            }
        }
        
    }
    
    subtotal.innerText = convertMoney(totalMoney)
    ship.innerText = convertMoney(shipMoney)
    discount.innerText = convertMoney(discountMoney)
    total.innerText = convertMoney(totalMoney + shipMoney - discountMoney)
}


updateTotalMoney(products)

renderProduct(products)

const xacnhan = document.querySelector(".xacnhan")
const choice = document.querySelectorAll(".choice div")
const pp = document.querySelector(".pp")
console.log(pp);
    for (let i = 0; i < choice.length; i++) {
        let element = choice[i];
        element.addEventListener("click", function() {
            pp.innerHTML = `
            ${element.innerText} <i class="fa-solid fa-angle-right text-sm"></i></p>
        `
        })
    }
    
xacnhan.addEventListener("click", function() {
    
    if(pp.innerHTML != "") {
        payChoice.innerHTML = pp.innerHTML
    }
    console.log(payChoice.innerText);
    pay.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})