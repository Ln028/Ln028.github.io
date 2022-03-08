// Yêu cầu
// Sử dụng Javascript để thực hiện các công việc sau

// Thêm class “table-bordered” cho <table>
// Thêm class “bg-dark” cho <tr> đầu tiên
// Thêm 1 hàng mới trong table với nội dung như sau : ‘Sean Reyes’ (@sreyes)
// Cập nhật “Leona Dixon’s handle” thành “@dixonl” (hàng 3 - cột Handle)
// Di chuyển “Rosa Reed” lên đầu bảng và đảm bảo tất cả các mục nhập số trong cột đầu tiên được cập nhật tương ứng.
// Đổi chỗ 2 cột “First” và “Handle” cho nhau
// Các row có index là số lẻ ( trừ hàng tiêu đề cột )thì có background = “#f2f2f2”

const table = document.querySelector(".table")
table.classList.add("table-bordered")

const trFist = document.querySelector("tr")
trFist.classList.add("bg-dark")

const trNew = document.createElement("tr")
trNew.innerHTML = `<td>6</td>
<td>Sean</td>
<td>Reyes</td>
<td>@sreyes</td>`

const tbody = document.querySelector("tbody")
tbody.appendChild(trNew)

// const td1 = document.createElement("td")
// const td2 = document.createElement("td")
// const td3 = document.createElement("td")
// td3.innerText = 
// const td4 = document.createElement("td")

const td = document.querySelector("tr:nth-child(4) td:last-child")
td.innerText = "@dixonl"

const trRosa = document.querySelector("tr:nth-child(5)")

const trRosaNew = trRosa.cloneNode(true)

trFist.insertAdjacentElement("afterend", trRosaNew)

tbody.removeChild(trRosa)

const sort = document.querySelectorAll("tr")
const tdnew = document.querySelectorAll("tr td:first-child")
console.log(tdnew);

for (let i = 0; i < tdnew.length; i++) {
   tdnew[i].innerText = i+1
   if(i%2 != 0) {
       tdnew[i].parentNode.style.backgroundColor = "#f2f2f2"
   }
}


const th = document.querySelectorAll("tr th")
for (let i = 0; i < th.length; i++) {
    const element = th[1];
    th[1] = th[3]
    th[3] = element
    console.log(th);  
}
