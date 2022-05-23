let colors = [
    '#3498db',
    '#9b59b6',
    '#e74c3c',
    '#2c3e50',
    '#d35400',
]

// Yêu cầu
// Render số box = số lượng màu ra ngoài màn hình bằng javascript (5 box)
// Box được tạo bởi thẻ div, có class=“box”, background tương ứng với từng mã màu
// Cập nhật số lượng total box trong thẻ <span> có class “points”
// Khi bấm vào box bất kỳ thì box đó biến mất, đồng thời số lượng total box giảm đi 1
// Khi click vào nút “more box” thì số lượng box tăng lên 5 (tương ứng với 5 màu trong mảng colors), đồng thời số lượng total box cũng tăng lên 5


const btn = document.querySelector("button")
const box = document.querySelector(".boxes")



btn.addEventListener("click", function () {

    for (let i = 0; i < colors.length; i++) {
        const boxEl = document.createElement("div")
        boxEl.classList.add("box")
        boxEl.style.backgroundColor = colors[i];
        box.appendChild(boxEl)

        boxEl.addEventListener("click", function () {
            box.removeChild(boxEl)
            const point = document.querySelector(".points")
            point.innerText = box.children.length
        })

    }
    const point = document.querySelector(".points")
    point.innerText = box.children.length

})


//============Chữa bài=============

// let colors = ['#3498db', '#9b59b6', '#e74c3c', '#2c3e50', '#d35400'];
// let colorsCopy = [...colors];

// const boxesEl = document.querySelector(".boxes");
// const pointsEl = document.querySelector(".points");
// const btn = document.querySelector("#btn");

// // Render box
// function renderBox(arr) {
//     // Clear hết dữ liệu trước khi render
//     boxesEl.innerHTML = "";

//     // Sử dụng vòng lặp để render
//     let html = ""
//     for (let i = 0; i < arr.length; i++) {
//         html += `
//             <div 
//                 class="box" 
//                 style="background-color:${arr[i]}"
//                 onclick="deleteBox(${i})"
//             ></div>
//         `
//     }
//     boxesEl.innerHTML = html;

//     // Cập nhật số lượng
//     updateTotalBox(arr)
// }

// // Cập nhật số lượng
// function updateTotalBox(arr) {
//     pointsEl.innerText = arr.length;
// }

// // Xóa box
// function deleteBox(index) {
//     for (let i = 0; i < colors.length; i++) {
//         if(i == index) {
//             colors.splice(i, 1)
//         }
//     }
//     renderBox(colors)
// }

// // Thêm box
// btn.addEventListener("click", function() {
//     colors = [...colors, ...colorsCopy];
//     renderBox(colors)
// })

// renderBox(colors)
