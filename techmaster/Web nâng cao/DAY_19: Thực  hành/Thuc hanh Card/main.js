// Yêu cầu
// Sử dụng Javascript để thực hiện các công việc sau

// Một tính năng mới vào gói Pro: ‘24/7 Phone support’
const newLi = document.querySelector("li")
newLi.innerText = "24/7 Phone support"

const ulPro = document.querySelector("#pro-plan ul")

ulPro.appendChild(newLi)


// Đổi vị trí 2 card pricing (pro, basic) => (basic, pro)

const div1 = document.querySelector(".row div")
console.log(div1);
const divCopy = div1.cloneNode(true)
const divAll = document.querySelector(".row")

divAll.appendChild(divCopy)
divAll.removeChild(div1)

// Trong gói Pro hãy cập nhật nút ‘Get Started’ hiện tại thành màu xanh có màu background: #0984e3, có chữ màu #fff và có dòng chữ ‘Buy Now’
const btn = document.querySelector("#pro-plan button")
btn.style.backgroundColor = "#0984e3"
btn.style.color = "#fff"
btn.innerText = "Buy Now"

// Tăng dung lượng lưu trữ của gói Pro thêm 25%, gói Basic thêm 50%
const countPro = document.querySelector("#pro-plan .storage-amount")
countPro.innerText = Number(countPro.innerText) * 125 / 100

const countBasic = document.querySelector("#basic-plan .storage-amount")
countBasic.innerText = Number(countBasic.innerText) * 150 / 100