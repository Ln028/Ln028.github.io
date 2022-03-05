// Nối tiếp vào bài tập buổi 1 - Bài số 3: ul-li

// Thêm 1 nút add + 1 ô input để nhập text (tạo bằng Javascript).
const ul = document.getElementById("list")
const add = document.createElement("button")
add.innerText = "Add"

const input = document.createElement("input")
input.type = "text"

document.body.appendChild(add)
document.body.appendChild(input)

// Mỗi khi bấm nút vào nút add thêm 1 thẻ li có nội dung là nội dung trong ô input vào cuối danh sách ul.
//Trường hợp không có nội dung trong ô input mà bấm add thì cảnh báo (sử dụng alert)
const liPlus = () => {
    const li = document.createElement("li")
    if (!input.value) {
        alert("Vui lòng điền thông tin")
        return
    }
    li.innerText = input.value
    ul.appendChild(li)
    input.value = ""
}
add.addEventListener("click", liPlus)

// Thêm 1 nút remove (tạo bằng Javascript). Chức năng để xóa thẻ li cuối cùng của danh sách ul
const remove = document.createElement("button")
remove.innerText = "Remove"
document.body.appendChild(remove)

const removeLi = () => {
    const lastLi = document.querySelector("ul li:last-child")
    if(!lastLi) {
        return
    }
    ul.removeChild(lastLi)
}

remove.addEventListener("click", removeLi)

// Thêm 1 nút Hide trên đầu của danh sách ul
const hide = document.createElement("button")
hide.innerText = "Hide"
document.body.prepend(hide)

// Khi bấm vào Hide thì ul sẽ ẩn. Đồng thời label của nút Hide => Show
// Và ngược lại, khi bấm vào Show thì ul sẽ hiện. Đồng thời label của nút Show => Hide

const toggleBtn = () => {

    if (hide.innerText == "Hide") {
        hide.innerText = "Show"
        ul.style.display = "none"
        return
    }
    hide.innerText = "Hide"
    ul.style.display = "block"

}
hide.addEventListener("click", toggleBtn)

