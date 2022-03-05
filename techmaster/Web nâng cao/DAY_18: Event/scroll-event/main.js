//Xử lí ẩn hiện nút TOP
window.addEventListener("scroll", function () {
    //B1: Lấy ra vị trí hiện tại của thanh scroll
    let position = document.documentElement.scrollTop
    //B2: Nếu vị trí thanh cuộn > 300 thì hiển thị btn và ngược lại sẽ ẩn btn
    if (position > 300) {
        btn.style.display = "block"
    } else {
        btn.style.display = "none"
    }
})

//Xử lí khi ấn vào nut TOp sẽ quay lại đầu trang

btn.addEventListener("click", function () {
    window.scrollTo({
        top: 0, //Vị trí cần đến
        behavior: "smooth" //Kiểu scroll
    });
});


// ==========ẩn hiện mật khẩu=============