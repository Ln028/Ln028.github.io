const users = [
    {
        username: "bob",
        password: "123"
    },
    {
        username: "alice",
        password: "456"
    },
    {
        username: "lisa",
        password: "789"
    },
    {
        username: "anna",
        password: "101"
    },
    {
        username: "bobby",
        password: "112"
    },
]


//Yêu cầu: Khi người dùng bấm vào nút “Login” thì thực hiện các chức năng sau:

//1. Kiểm tra xem có trường nào được để trống hay không, nếu có thì thông báo (sử dụng alert)
const login = document.getElementById("btn-login")
const user = document.getElementById("username")
const pass = document.getElementById("password")

const checkLogin = () => {
    if(!user.value || !pass.value) {
        alert("Vui lòng điền đầy đủ thông tin")
    }
    
}
login.addEventListener("click", checkLogin)

//2. Nếu người dùng đã điền đầy đủ thông tin thì kiểm tra với thông tin đó, có trùng với user nào không? Nếu có thông báo “Đăng nhập thành công”. Nếu không thông báo “Tài khoản hoặc mật khẩu không chính xác”

const loginInfo = () => {
    const resultLogin = users.filter(item => {
        return item.username == user.value && item.password == pass.value;
    })
    if (resultLogin.length) {
        alert("Đăng nhập thành công");
        return
    } 
    alert("Tài khoản hoặc mật khẩu không chính xác")

}

login.addEventListener("click", loginInfo)

