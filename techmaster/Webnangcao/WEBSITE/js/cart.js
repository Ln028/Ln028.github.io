var backdropFull = document.getElementById("backdrop-full")

backdropFull.addEventListener("click", function() {
    backdropFull.classList.toggle("hidden")
    signin.classList.add("hidden")
    signup.classList.add("hidden")
    deleteCart.classList.add("hidden")
    body.classList.toggle("overflow-hidden")
})

var deleteCart = document.querySelector(".delete-cart")
var btnNo = document.getElementById("no")

btnNo.addEventListener("click", function(){
    deleteCart.classList.toggle("hidden")
    backdropFull.classList.toggle("hidden")
    body.classList.toggle("overflow-hidden")
})



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
    return number.toLocaleString('vi-VN', {style : 'currency', currency : 'VND'});
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
            <div class="flex justify-between mx-4 md:mx-0 md:grid grid-cols-2 py-7 items-center border-b space-x-3">
                <div class="text-center flex flex-row items-center">
                    <span class="md:hidden" >
                        <i onclick="product(${p.id})" class="text-center text-xl md:text-[25px] font-thin fa-solid fa-trash-can cursor-pointer"></i>
                    </span>
                    <img class="max-w-[175px] max-h-[175px] lg:max-w-[232px] lg:max-h-[232px]"
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
                    <div class="text-center h-8 md:h-5 lg:h-8 w-fit flex justify-center outline outline-1 mx-auto bg-white rounded">
                        <button class="h-8 w-8 md:h-5 md:w-5 lg:h-8 lg:w-8 text-center leading-5 lg:leading-8" onclick="subtractCount(${p.id})">
                            <i class="fa-solid fa-minus text-sm"></i>
                        </button>
                        <input class="w-8 h-8 md:h-5 md:w-5 lg:w-[50px] lg:h-8 text-center border-y-0 border-x-black text-sm sm:text-base px-0" type="text" role="spinbutton" min="1" aria-valuenow="1" value="${p.count}" oninput="this.value = 
                        !!this.value && Math.abs(this.value) >= 1 ? Math.abs(this.value) : 1">
                        
                        <button class="h-8 w-8 md:h-5 md:w-5 lg:h-8 lg:w-8 text-center leading-5 lg:leading-8" onclick="addCount(${p.id})">
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
    body.classList.toggle("overflow-hidden")

    var btnYes = document.getElementById("yes")
    btnYes.addEventListener("click", function() {
        for (let i = 0; i < products.length; i++) {
            if(products[i].id == inputValue.value) {
                products.splice(i, 1)
                console.log(inputValue.value);
                deleteCart.classList.toggle("hidden")
                backdropFull.classList.toggle("hidden")
                body.classList.toggle("overflow-hidden")
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

