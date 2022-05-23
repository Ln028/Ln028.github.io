const heading = document.querySelector("h1")

//Xem danh sách class của h1
console.log(heading.classList);

//Thêm class - add()
heading.classList.add("text-big", "text-center")

//Xoá class - remove()
heading.classList.remove("text-big", "text-center")

//Kiểm tra 1 class có tồn tại hay không - contains() --> true/flase
console.log(heading.classList.contains("text-red"));
console.log(heading.classList.contains("demo"));

//Kiểm tra 1 class có tồn tại hay không,nếu không sẽ thêm vào, nếu có sẽ xoá đi - toggle()

//Hành động: function
//Thời gian: time

//setInterval(): có tác dụng lặp đi lặp lại 1 hành động trong khoảng time nhất định

//C1: Viết gộp
// setInterval(function() {
//     heading.classList.toggle("text-red")
// }, 1500) //1500ms = 1.5

//Viết tách ra:
// const toggleClass = () => {
// heading.classList.toggle("text-red")
// }
//Chạy liên tục:
// setInterval(toggleClass, 1000)

//Chạy 10 lần thì dừng lại:
// let count = 0;

// const toggleClass = () => {
//     count++;
//     if(count == 10) {
//         clearInterval(interval)
//     }
//     heading.classList.toggle("text-red")
// }

// let interval = setInterval(toggleClass, 1000)

//Đếm ngược thời gian từ 10s -> 0s. Sau đó cập nhật nội dung cho h1 thành "Chúc mừng năm mới"
const h2 = document.querySelector("h2")
let time = 10;

//B1:Cập nhật thời gian
let updateTime = () => {
    //Giảm time đi 1s
    time--;
    //Cập nhật time mới lên giao diện
    h2.innerText = `${time}s`
    //Kiểm tra time
    if(time == 0) {
        heading.innerText = "Chúc mừng năm mới"

        //Kết thúc quá trình lặp đ lặp lại
        clearInterval(interval)
    }
}

//B2:Cứ 1s thì sẽ update time 1 lần
let interval = setInterval(updateTime, 1000)

//setTimeout: delay bao lâu thì update 1 lần

setTimeout(function() {
    console.log("Xin chao");
}, 4000)
