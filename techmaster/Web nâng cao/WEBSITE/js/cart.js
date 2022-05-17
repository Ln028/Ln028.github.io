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
    deleteCart.classList.add("hidden")
    voucher.classList.add("hidden")
})

var deleteCart = document.querySelector(".delete-cart")
var btnNo = document.getElementById("no")

btnNo.addEventListener("click", function(){
    deleteCart.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
})
    
// var voucher = document.getElementById("voucher")
// var code = document.getElementById("code")
// var voucherClose = document.getElementById("voucher-close")


// code.addEventListener("click", function() {
//     voucher.classList.toggle("hidden")
//     backdropFull.classList.toggle("hidden")
// })
// voucherClose.addEventListener("click", function() {
//     voucher.classList.toggle("hidden")
//     backdropFull.classList.toggle("hidden")
// })


// let a = [
//     {
//         id: 1
//     },
//     {
//         id: 2
//     }
// ]

// localStorage.setItem("product_ids", "1,2,3,5,8")


let products = [
    {
        id: 1,
        title: "Sách Giáo Khoa Bộ Lớp 1 - Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
        count: 1,
        price: 199000,
        image: "./image/sgk1.jpeg"

    },
    {
        id: 2,
        title: "Sách Giáo Khoa Bộ Lớp 2 - Cánh Diều - Sách Bài Học (Bộ 9 Cuốn) (2021)",
        count: 1,
        price: 199000,
        image: "./image/sgk2.jpeg"

    },
    {
        id: 3,
        title: "Sách Giáo Khoa Bộ Lớp 3 - Sách Bài Học (Bộ 9 Cuốn) (2021)",
        count: 1,
        price: 199000,
        image: "./image/sgk3.jpeg"

    }
]

function getProductsFromLocalStorage() {
    let localStorageValue = localStorage.getItem("products");
    if(localStorageValue) {
       todos = JSON.parse(localStorageValue)
    } else {
        products = [];
    }
    renderProduct(products)
}
function setProductsToLocalStorage(arr) {
    localStorage.setItem("products", JSON.stringify(arr));
    renderProduct(products)
}

window.onload = getProductsFromLocalStorage


//convert tiefn:
function convertMoney(number) {
    return number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

//Truy cap vao cac thanh phan:
let productsEl = document.getElementById("products")

//Hien thi du lieu tren giao dien
function renderProduct(arr) {
    productsEl.innerHTML = "";
    

    //Kiem tra khong co san pham nao trong gio hang
    if(arr.length == 0) {
        productsEl.innerHTML = `<p class="text-center pt-5 text-red-500 font-bold">Không có sản phẩm nào trong giỏ hàng</p>`;
        return
    }
    //TH co sp:
    let html = ""
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];

        html += `
            <div class="flex justify-between mx-4 md:mx-0 md:grid grid-cols-2 py-7 items-center border-b ">
                <div class="text-center flex flex-row items-center">
                    <span class="md:hidden" >
                        <i onclick="product(${p.id})" class="text-center text-xl md:text-[25px] font-thin fa-solid fa-trash-can cursor-pointer"></i>
                    </span>
                    <img class="max-w-[175px] max-h-[175px] md:max-w-[232px] md:max-h-[232px]"
                    src="${p.image}" alt="${p.title}">
                    <h5 class="hidden md:block font-semibold text-base">
                        <a href="./product.html" class="hover:underline hover:text-emerald-800">${p.title}</a>
                    </h5>
                </div>
                <div class="flex flex-col md:grid grid-cols-4 items-center space-y-4">
                    <h5 class="md:hidden font-semibold text-xs sm:text-base text-center">
                        <a href="./product.html" class="hover:underline hover:text-emerald-800">${p.title}</a>
                    </h5>
                    <p class="price text-center text-red-500 md:text-black text-sm sm:text-base font-medium">${convertMoney(p.price)}
                    </p>
                    <div class="text-center h-5 lg:h-8 w-fit flex justify-center outline outline-1 mx-auto bg-white rounded">
                        <button class="h-5 w-5 lg:h-8 lg:w-8 text-center leading-5 lg:leading-8" onclick="subtractCount(${p.id})">
                            <i class="fa-solid fa-minus text-sm"></i>
                        </button>
                        <input
                        class="w-8 lg:w-[50px] h-5 lg:h-8 li text-center border-y-0 border-x-black text-sm sm:text-base px-0"
                        type="text" role="spinbutton" aria-valuenow="1" value="${p.count}">
                        <button class="h-5 w-5 lg:h-8 lg:w-8 text-center leading-5 lg:leading-8" onclick="addCount(${p.id})">
                            <i class="fa-solid fa-plus text-sm"></i>
                        </button>
                    </div>
                    <p class="text-center font-medium hidden md:block">${convertMoney(p.price*p.count)}</p>
                    <span class="hidden md:block text-center text-xl md:text-[25px]"> 
                        <i onclick="product(${p.id})" class="fa-solid fa-trash-can cursor-pointer font-thin"></i>
                    </span>
                </div>
            </div>
        `
        
    }
    //Chen lai noi dung cho phan tu:
    productsEl.innerHTML = html
}

//Tinh so luong san pham:
function updateTotalProduct(arr) {
    //Duyet vong lap de tinh tong cac gia tri cua thuoc tinh "count"
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
       
        const element = arr[i];
        total += element.count
    }
}

//Xoa sp:
var inputValue = document.getElementById("product")
function product(id) {
    inputValue.value = id
    deleteCart.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")

    var btnYes = document.getElementById("yes")
    btnYes.addEventListener("click", function() {
        for (let i = 0; i < products.length; i++) {
            if(products[i].id == inputValue.value) {
                products.splice(i, 1)
                console.log(inputValue.value);
                deleteCart.classList.toggle("hidden")
                backdropFull.classList.toggle("hidden")
            } 
        }
        setProductsToLocalStorage(products)
        updateTotalMoney(products)
    })
}

//Thay doi so luong sp:
    //Giam sl:
    
function subtractCount(id) {
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            if(products[i].count == 1) {
                return
            }
            products[i].count -= 1
            
        }
    }
    setProductsToLocalStorage(products)
    updateTotalMoney(products)
}

 //Tang sl:
function addCount(id) {
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            products[i].count += 1
        }
    }
    setProductsToLocalStorage(products)
    updateTotalMoney(products)
}
 

//Tính tong tien:
const subtotal = document.querySelector(".subtotal")

function updateTotalMoney(arr) {
    let totalMoney = 0
    for (let i = 0; i < arr.length; i++) {
        totalMoney += arr[i].count * arr[i].price
    }
    subtotal.innerText = convertMoney(totalMoney)
}
setProductsToLocalStorage(products)
updateTotalMoney(products)



renderProduct(products)




// var voucherId = document.getElementById("voucher-id")
// let vouchers = [
//     {
//         id: 4,
//         title: "10%",
//         condition: "Đơn tối thiểu 400k",
//         hsd: "30.04.2022"
//     },
//     {
//         id: 5,
//         title: "8%",
//         condition: "Đơn tối thiểu 200k",
//         hsd: "30.04.2022"
//     },
//     {
//         id: 6,
//         title: "15k",
//         condition: "Đơn tối thiểu 150k",
//         hsd: "30.04.2022"
//     },
//     {
//         id: 7,
//         title: "20k",
//         condition: "Đơn tối thiểu 250k",
//         hsd: "30.04.2022"
//     },
//     {
//         id: 8,
//         title: "20%",
//         condition: "Đơn tối thiểu 600k",
//         hsd: "30.04.2022"
//     }
// ]
// function renderVoucher(arr) {
//     voucherId.innerHTML = "";
//     let html = ""
//     for (let i = 0; i < arr.length; i++) {
//         const v = arr[i];
//         html += `
//         <div
//         class="flex h-20 md:h-[123px] w-[260px] md:w-[350px] space-x-2 md:space-x-5 border border-emerald-800 rounded-r mx-auto hover:scale-105">
//             <div class="relative w-20 md:w-[123px]">
//                 <div class=" absolute top-[5px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                 <div class=" absolute top-[20px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                 <div class=" absolute top-[35px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                 <div class=" absolute top-[50px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                 <div class=" absolute top-[65px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                 <div class="hidden md:block absolute top-[80px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full ">
//                 </div>
//                 <div class="hidden md:block absolute top-[95px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full ">
//                 </div>
//                 <div class="hidden md:block absolute top-[110px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full ">
//                 </div>
//                 <img class="h-full" src="./image/Sonder2.png" alt="logo">
//             </div>
//             <div class="grow pr-2 text-xs md:text-sm space-y-1 md:space-y-3 flex flex-col justify-center">
//                 <div class="flex justify-between items-center space-x-2">
//                     <p class="text-base md:text-lg font-semibold text-red-500">Giảm ${v.title}</p>
//                     <p onclick="addVoucher(${v.id})" class="text-emerald-800 cursor-pointer hover:underline whitespace-nowrap">Dùng ngay
//                         <i class="fa-solid fa-chevron-right text-xs"></i>
//                     </p>
//                 </div>
//                 <p>${v.condition}</p>
//                 <p class="text-gray-400">HSD: ${v.hsd}</p>
//             </div>
//         </div>
//         `
//     }
//     voucherId.innerHTML = html
// }

// renderVoucher(vouchers)

// var voucherClick = document.getElementById("voucher-click")
// var codeId = document.getElementById("code-id")
// var myVoucher = document.getElementById("myvoucher")

// function addVoucher(id) {
//     myVoucher.value = id
//     console.log(myVoucher);
//     for (let i = 0; i < vouchers.length; i++) {
//         if(vouchers[i].id == myVoucher.value) {
//             codeId.innerHTML = `
//             <div
//             class="flex h-20 w-fit space-x-2 border border-emerald-800 rounded-r mx-auto">
//                 <div class="relative w-20">
//                     <div class=" absolute top-[5px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                     <div class=" absolute top-[20px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                     <div class=" absolute top-[35px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                     <div class=" absolute top-[50px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                     <div class=" absolute top-[65px] translate-x-[-60%] w-[10px] h-[10px] bg-white rounded-full "></div>
//                     <img class="h-full" src="./image/Sonder2.png" alt="logo">
//                 </div>
//                 <div class="grow pr-2 text-xs space-y-1 flex flex-col justify-center">
//                     <div class="flex justify-between items-center space-x-2">
//                         <p class="text-sm font-semibold text-red-500">Giảm ${vouchers[i].title}</p>
//                         <p onclick="addVoucher(${vouchers[i].id})" class="text-emerald-800 cursor-pointer hover:underline whitespace-nowrap">Đổi mã khác
//                         <i class="fa-solid fa-chevron-right text-xs"></i>
//                     </p>
//                     </div>
//                     <p>${vouchers[i].condition}</p>
//                     <p class="text-gray-400">HSD: ${vouchers[i].hsd}</p>
//                 </div>
//             </div>
//             `
//             voucher.classList.toggle("hidden")
//             backdropFull.classList.toggle("hidden")
//         } 
//     }

// }