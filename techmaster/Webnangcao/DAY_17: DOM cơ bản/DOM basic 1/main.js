//1.Truy cap phan tu thong qua id - tra ve phan t duy nhat

const heading = document.getElementById("heading");
console.log(heading);

//2.TagName - trả về nhiều phần tử
const paraTagname = document.getElementsByTagName("p")
console.log(paraTagname);
console.log(paraTagname[0]);
console.log(paraTagname.length);

//for bình thường thì ok
for (let i = 0; i < paraTagname.length; i++) {
    console.log(paraTagname[i]);
}

//map: khong ap dung truc tiep duoc
// paraTagname.map(p => console.log(p))
//Muốn áp dụng được thì phải convert paraTagname sang array
Array.from(paraTagname).map(p => console.log(p))

//3.ClassName - tính chất thương tự như TagName
const paraClassName = document.
getElementsByClassName("para");
console.log(paraClassName);

//4.QuerySelector: Trả về phần tử đầu tiên mà nó tìm thấy <==> .find()
//VD: muốn gọi thẻ h1 trong bài này, gọi theo css thì sẽ có các cách: h1, #heading, h1#heading,..

const headingSelector = document.querySelector("#heading")
console.log(headingSelector);

const para2 = document.querySelector(".para")
console.log(para2);

const para3 = document.querySelector("p:nth-child(4)")
console.log(para3);

//.box ul
const ul1 = document.querySelector(".box ul")
console.log(ul1);


//ul:nth-child(6)
//.box + ul
//body > ul
const ul2 = document.querySelector("body>ul")
console.log(ul2);

//.li + li
//.box li:nth-child(3)
const li33 = document.querySelector(".box li:nth-child(3)")
console.log(li33);

//5.QuerySelectorAll: Trả về nhiều phần tử
const paraSelectorAll = document.querySelectorAll("p")
console.log(paraSelectorAll);

//Truy cập cục bộ
//VD: truy cập vào thẻ ul nằm trong class = "box"
const box = document.querySelector(".box")
const ulInsideBox = box.querySelector("ul")
console.log(ulInsideBox);

//Truy cập gián tiếp

console.log(ulInsideBox.parentElement); //Lấy ra cha của thẻ ul
console.log(ulInsideBox.firstElementChild);//lấy ra thẻ là con đầu tiên của thẻ ul
console.log(ulInsideBox.lastElementChild); //lấy ra thẻ là con cuối cùng của thẻ ul
console.log(box.previousElementSibling);//lấy ra anh em liền trước của thẻ box
console.log(box.nextElementSibling); // lấy ra anh em liền sau của thẻ box
