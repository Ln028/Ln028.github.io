//1.Lấy ra nội dung của 1 phần tử
const heading = document.querySelector("#heading");

console.log(heading.innerHTML);
console.log(heading.innerText);
console.log(heading.textContent);

//in ra thẻ ul nằm trong class "box"
const ul1 = document.querySelector(".box ul")

console.log(ul1.innerHTML);//lấy ra tên thẻ và nội dung thẻ
console.log(ul1.innerText);//lấy ra được nội dung của thẻ, không láy được nội dung của thẻ ẩn
console.log(ul1.textContent);//lấy ra được nội dung của thẻ, giữ nguyên format thẻ

//2. Thay đổi nội dung của 1 phần tử
heading.innerHTML = "Xin chào"
heading.innerText = "Hê lu"
heading.textContent = "Hi"

heading.innerHTML = "<span>Hello</span>"//Nếu nội dung text có thẻ html thì dùng cách này, vì 2 cách kia sẽ hiểu tên thẻ là nội dung html luôn
// heading.innerText = "<span>Hello</span>"
// heading.textContent = "<span>Hello</span>"

//3. Thay đổi css của 1 phần tử
heading.style.color = "red"
heading.style.backgroundColor = "yellow"
heading.style.fontSize = "50px"

//4.Tạo - thêm - xoá - thay thế - copy
//4.1. Tạo
//VD: tạo thẻ p có nội dung là "Thẻ para 4"
const para4 = document.createElement("p");
para4.innerText = "Thẻ para 4"

console.log(para4);

//Tạo thẻ a, link đến trang google.com, có text là google
const link = document.createElement("a")
link.innerText = "Google"
link.href = "https://www.google.com/"
link.target = "_blank"

console.log(link);

//4.2. Thêm:
//VD: thêm para4 vào vị trí con đầu tiên của thẻ body
//prepend: thêm vào đầu phần tử cha
document.body.prepend(para4) //rieeng ther body khoong caanf truy caapj vafo 

////VD: thêm para4 vào vị trí con cuoi cung của thẻ body
document.body.appendChild(para4) 

//thêm para4 vào vị trí bất kì
//insertBefore
const box = document.querySelector(".box")
document.body.insertBefore(link, box)

//Chèn thẻ li có nội dung là "Thẻ li new" vào giữa thẻ li 33 và li 44"
//B1: tạo thẻ
const liNew = document.createElement("li")
liNew.innerText = "Thẻ li new"
const ul = document.querySelector(".box ul")
const li44 = document.querySelector("ul li:last-child")

ul.insertBefore(liNew, li44)

//insertAdjacentHTML
//Chèn thẻ button có nội dung"Đăng nhập" vào đằng sau thẻ box

//C1:
//box.insertAdjacentHTML("afterend", "<button>Đăng nhập</button>")

//C2:
const ul2 = document.querySelector("body > ul")
// ul2.insertAdjacentHTML("afterend", "<button>Đăng nhập</button>")

//insertAdjacentElement
const button = document.createElement("button")
button.innerText = "Đăng ký"
ul2.insertAdjacentElement("afterend", button)

//4.3. Xoá
//removeChild
//Ví dụ: xoá para1
//C1:
const para1 = document.querySelector("p")
// document.body.removeChild(para1)

//C2: Truy cap gian tiep the cha
para1.parentElement.removeChild(para1)

//4.4. Thay thế
//replaceChild
//VD: Thay thế thẻ para2 bằng thẻ a link đến trnag facebook.com

//B1: tạo thẻ a
const linkFb = document.createElement("a")
linkFb.innerText = "Facebook"
linkFb.href = "https://facebook.com"

//B2: Truy cập vào thẻ muốn thay thế và cha của nó
const para2 = document.querySelector(".para")
// document.body.replaceChild(linkFb, para2)
para2.parentElement.replaceChild(linkFb, para2)

//4.5. Copy
//VD: copy thẻ class "box" và chèn vào cuối cùng của thẻ body
const boxCopy = box.cloneNode(true)
// const boxCopy1 = box.cloneNode(false)

// console.log(boxCopy);
// console.log(boxCopy1);

document.body.appendChild(boxCopy)

