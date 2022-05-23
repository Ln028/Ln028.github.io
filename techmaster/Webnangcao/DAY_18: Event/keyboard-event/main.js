
// // Lắng nghe sự kiện keyup
// document.addEventListener("keyup", function () {
//     console.log("keyup");
// });

// // Lắng nghe sự kiện keypress
// document.addEventListener("keypress", function () {
//     console.log("keypress");
// });

// Lắng nghe sự kiện keydown
document.addEventListener("keydown", function (event) {
    if(event.keyCode == 13) {
        console.log("Hello 1");
    } else if(event.keyCode == 32) {
        console.log("Hello 2");
    } else {
        console.log("Hello 3");

    }
});

//===============Thực hành=================
//Bài 1:

//Nhấn phím enter thì xuất hiện 1 hình tròn ở vị trí bất kỳ trong trang web

//Nhấn các phím space thì xuất hiện 1 hình vuông ở vị trí bất kỳ trong trang web

//Nhấn các phím còn lại thì đổi màu background của trang web thành 1 màu bất kỳ

//Mỗi lần nhấn phím chỉ có 1 hình được xuất hiện (hình tròn hoặc hình vuông tùy thuộc vào phím được bấm)

document.addEventListener("keydown", function (event) {
    if(event.keyCode == 13) {
        //Vẽ hình tròn
        drawCircle()
    } else if(event.keyCode == 32) {
        //Vẽ hình vuông
        drawRectangle()
    } else {
        //Thay đổi background của body
        changeBackground()

    }
});

const drawCircle = () => {

}

const drawRectangle = () => {

}

const changeBackground = () => {

}

//Thực hiện tương tự mouse event tuy nhiên khác ở bước 2 là phải random vị trí bất kỳ của top, left


//bài 2:
//b1: tạo 1 hình tròn bằng html 
//b2: truy cập vào thằng box
const box = document.querySelector(".box")
box.offsetTop = 200;
box.offsetLeft = 200


