// Yêu cầu
// Highlight tất cả các từ có độ dài lớn hơn hoặc bằng 8 ký tự trong đoạn văn (background = “yellow”)

// const para = document.querySelector("p")
// const toArr = (para.innerText).split(" ")

// let newArr = toArr.filter(ele => ele.length >= 8);

// let uniqueArr = []
// for (let i = 0; i < newArr.length; i++) {
//     const element = newArr[i];
//     if (!uniqueArr.includes(element)) {
//         uniqueArr.push(element)
//     }
// }

// for (let i = 0; i < uniqueArr.length; i++) {
//     const element = uniqueArr[i];

//     para.innerHTML = para.innerHTML.replaceAll(element, `<span style="background-color: yellow;">${element}</span>`)
// }

// =====chữa bài======
let para = document.querySelector("p");
const content = para.innerText;
const array = content.split(" ");

for (let i = 0; i < array.length; i++) {
   if(array[i].length >= 8) {
       array[i] = `<span style="background-color:yellow">${array[i]}</span>`
   }   
}
para.innerHTML = array.join(" ")

// Thêm link hiển thị text “facebook” link đến trang facebook.com ở sau thẻ p
// const fbLink = document.createElement("a")
// fbLink.innerText = "facebook"
// fbLink.href = "https://facebook.com"
// para.insertAdjacentElement("afterend", fbLink)

// // Đếm số từ có trong đoạn văn. Tạo 1 thẻ div để hiển thị số từ
// console.log(toArr.length);
// const count = document.createElement("div")
// count.innerText = toArr.length
// count.style.backgroundColor = "green"
// count.style.width = "50px"
// count.style.border = "3px solid #333333"
// count.style.color = "white"

// fbLink.insertAdjacentElement("afterend", count)

// // Thay thế các ký hiệu ? => 🤔, ! => 😲

// para.innerHTML = para.innerHTML.replace(/\?/g, `🤔`)
// para.innerHTML = para.innerHTML.replace(/!/g, `😲`)
