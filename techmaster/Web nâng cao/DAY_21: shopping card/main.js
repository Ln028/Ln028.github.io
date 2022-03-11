//1.Chuc nang can cos cho ung dung:
    //Xoa san pham
    //Thay doi so luong san pham
    //Ma giam gia
    //Cap nhat so tien
    //Cap nhat so luong hang hoa trong gio hang

//2.Doi tuong:
    //San pham
//3.Thuoc tinh cua doi tuong:
    //Id -> id: number
    //Ten sp > title: string
    //Mo ta -> description: string
    //So luong trong gio -> count: number
    //Gia -> price: number
    //Anh -> image: string


let products = [
    {
        id: 1,
        title: "ghe trang",
        description: "Mang vẻ đẹp tinh tế. Thích hợp với mọi không gian",
        count: 2,
        price: 200000,
        image: "https://noithatdailoi.com/wp-content/uploads/bo-ban-ghe-eames-4-ghe-mau-trang-8.jpg"

    },
    {
        id: 2,
        title: "ghe vang",
        description: "Mang một nguồn cảm hứng cho các không gian nội thất hiện đại",
        count: 1,
        price: 150000,
        image: "https://cf.shopee.vn/file/652cfe313794a36bdbb20e41ebb047bc"

    }
]
//Cac ma giam gia:
let promotionCode = {
    A: 10,
    B: 20,
    C: 30,
    D: 40
}

//convert tiefn:
function convertMoney(number) {
    return number.toLocaleString('it-IT', {style : 'currency', currency : 'VND'});
}

//Truy cap vao cac thanh phan:
let productsEl = document.querySelector(".products")

//Hien thi du lieu tren giao dien
function renderProduct(arr) {
    productsEl.innerHTML = "";
    //Cap nhat so luong sp:
    updateTotalProduct(arr)
    //Update so luowng:
    updateTotalMoney(arr)

    //Kiem tra khong co san pham nao trong gio hang
    if(arr.length == 0) {
        productsEl.insertAdjacentHTML("afterbegin", "<li>Khong co sp nao trong gio hang</li>");
        document.querySelector(".option-container").style.display = "none";
        return
    }
    //TH co sp:
    let html = ""
    for (let i = 0; i < arr.length; i++) {
        const p = arr[i];
        html += `
        <li class="row">
        <div class="col left">
            <div class="thumbnail">
                <a href="#">
                    <img src="${p.image}" alt="${p.title}">
                </a>
            </div>
            <div class="detail">
                <div class="name"><a href="#">${p.title}</a></div>
                <div class="description">
                ${p.description}
                </div>
                <div class="price">${convertMoney(p.price)}</div>
            </div>
        </div>

        <div class="col right">
            <div class="quantity">
                <button onclick="subtractCount(${p.id})" class="btn-subtract">-</button>
                <p>${p.count}</p>
                <button onclick="addCount(${p.id})" class="btn-add">+</button>
            </div>

            <div class="remove">
                <span class="close" onclick="removeProduct(${p.id})">
                    <i class="fa fa-times" aria-hidden="true"></i>
                </span>
            </div>
        </div>
    </li>
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

    //Update tong tinh duoc trong phan tu co class "count"
    const totalProduct = document.querySelector(".count")
    totalProduct.innerText = `${total} items in the bag`
}

//Xoa sp:
function removeProduct(id) {
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            products.splice(i, 1)
        }
    }
    renderProduct(products)
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
    renderProduct(products)
}

 //Tang sl:
function addCount(id) {
    for (let i = 0; i < products.length; i++) {
        if(products[i].id == id) {
            products[i].count += 1
        }
    }
    renderProduct(products)
}

//Tính tong tien:
const subtotal = document.querySelector(".subtotal span")
const vat = document.querySelector(".vat span")
const total = document.querySelector(".total span")
const discount = document.querySelector(".discount span")

function updateTotalMoney(arr) {
    let totalMoney = 0
    let VAT = 0;
    let discountMoney = 0
    for (let i = 0; i < arr.length; i++) {
        totalMoney += arr[i].count * arr[i].price
        VAT = totalMoney / 10
    }

    //Ap dung ma giam gia:
    const input = document.getElementById("promo-code")
    const promotionCodes = Object.keys(promotionCode);
    if (promotionCodes.includes(input.value)) {
        discountMoney = promotionCode[input.value] / 100 * totalMoney
        discount.parentNode.classList.remove("hide")
        
    }
    
    subtotal.innerText = convertMoney(totalMoney)
    vat.innerText = convertMoney(VAT)
    discount.innerText = convertMoney(discountMoney)
    total.innerText = convertMoney(totalMoney + VAT - discountMoney)
}

document.getElementById("promo-code").addEventListener("keyup", function (event) {
    updateTotalMoney(products)
})

renderProduct(products)
