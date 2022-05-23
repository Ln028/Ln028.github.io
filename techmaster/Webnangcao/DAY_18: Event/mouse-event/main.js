   
//    document.addEventListener('mousedown', function() {
//     console.log('mousedown');
//    })
   
//    document.addEventListener('mousemove', function() {
//     console.log('mousemove');
//    })
   
//    document.addEventListener('mouseup', function() {
//     console.log('mouseup');
//    })

   document.addEventListener('click', function(event) {
    console.log(event);
   })
//    event: cung cap thong tin su kien

//Thực hành:

//Yêu cầu: Nhấn chuột vào 1 vị trí bất kỳ trên trang web, tạo 1 hình tròn tại vị trí nhấn chuột. Mỗi lần nhấn chuột chỉ có 1 hình tròn được xuất hiện.


document.addEventListener("mousemove", function(event) {
    //Trước khi vẽ hình tròn mới cần phải xoá hình tròn trước đó đi
    const boxEl = document.querySelector(".box")
        //Nếu box tồn tại thì xoá đi
        if(boxEl) {
            boxEl.parentElement.removeChild(boxEl)
        }

    //b1: tạo hình tròn: thẻ div và gán class box
    let box = document.createElement("div")
    box.classList.add("box")

    //B2: Lấy ra vị trí đang nhấn chuột 
    let x = event.offsetX;
    let y = event.offsetY;

    //B3: Gán lại toạ độ cho box
    box.style.top = `${y - 50}px`;
    box.style.left = `${x - 50}px`;

    document.body.appendChild(box)
})
