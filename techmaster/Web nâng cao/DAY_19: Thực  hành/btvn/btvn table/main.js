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

const td = document.querySelector("tr:nth-child(4) td:last-child")
td.innerText = "@dixonl"

const trRosa = document.querySelector("tr:nth-child(5)")

const trRosaNew = trRosa.cloneNode(true)

trFist.insertAdjacentElement("afterend", trRosaNew)

tbody.removeChild(trRosa)


const thFirst = document.querySelector("tr th:nth-child(2)")
const thLast = document.querySelector("tr th:nth-child(3)")
const thHandle = document.querySelector("tr th:nth-child(4)")

thHandle.insertAdjacentElement("afterend", thLast)
thLast.insertAdjacentElement("afterend", thFirst)


const tdFirst = document.querySelectorAll("tr td:nth-child(2)")
const tdLast = document.querySelectorAll("tr td:nth-child(3)")
const tdHandle = document.querySelectorAll("tr td:nth-child(4)")
for (let i = 0; i < tdHandle.length; i++) {
    const element = tdHandle[i];
    element.insertAdjacentElement("afterend", tdLast[i])
    tdLast[i].insertAdjacentElement("afterend", tdFirst[i])

}

const tdNew = document.querySelectorAll("tr td:first-child")
for (let i = 0; i < tdNew.length; i++) {
   tdNew[i].innerText = i+1
   if(i%2 != 0) {
       tdNew[i].parentNode.style.backgroundColor = "#f2f2f2"
   }
}
