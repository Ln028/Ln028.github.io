// Yêu cầu
// Thêm label cho các trường username, password, confirm password (sử dụng thẻ label để thêm các tiêu đề tương ứng cho các ô input)
// Kiểm tra xem password và confirm pass có trùng nhau hay không
// Đảm bảo nút ‘Đăng ký’ bị disable cho đến khi người dùng nhập dữ liệu hợp lệ vào tất cả các trường đầu vào.
// Sau khi nhập đầy đủ thì ‘Đăng ký’ được enable.
// Khi user nhập đủ thông tin hợp lệ và bấm vào nút submit thì tạo 1 hộp thoại thông báo đăng ký thành công

const username = document.querySelector("#username")
const labelUser = document.createElement("label")
labelUser.innerText = "Username: "
username.insertAdjacentElement("beforebegin", labelUser)

const password = document.querySelector("#password")
const labelPass = document.createElement("label")
labelPass.innerText = "Password:"
password.insertAdjacentElement("beforebegin", labelPass)

const confirmPass = document.querySelector("#confirmPassword")
const labelConfirm = document.createElement("label")
labelConfirm.innerText = "Confirm password:"
confirmPass.insertAdjacentElement("beforebegin", labelConfirm)

const btn = document.querySelector("#btn")
btn.disabled = true
btn.style.backgroundColor = "#cccccc"

const input = document.querySelectorAll("input")

for (let i = 0; i < input.length; i++) {
    input[i].oninput = function () {
        if (username.value && password.value && confirmPass.value) {
            if (password.value == confirmPass.value) {
                btn.disabled = false
                btn.style.backgroundColor = "#3171E5"
            } else {
                btn.disabled = true
                btn.style.backgroundColor = "#cccccc"
            }          
        } else {
            btn.disabled = true
            btn.style.backgroundColor = "#cccccc"
        }
    }
}

btn.addEventListener("click", function () {
    alert("Đăng kí thành công")


})

