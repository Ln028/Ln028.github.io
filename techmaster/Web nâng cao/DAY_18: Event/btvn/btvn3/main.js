// Yêu cầu
// Giá trị mặc định của counter ban đầu = 0
// Bấm vào Cộng tăng counter lên 1
// Bấm vào Trừ giảm counter đi 1
// Nếu counter > 0 có màu green
// Nếu counter = 0 có màu #333333
// Nếu counter < 0 có màu red
const counter = document.getElementById("counter")
const prevBtn = document.querySelector(".prevBtn")
const nextBtn = document.querySelector(".nextBtn")
const plus = (value) => {
   counter.innerText = Number(counter.innerText) + value
   if(Number(counter.innerText) > 0) {
       counter.style.color = "green"
   } else if(Number(counter.innerText) == 0) {
    counter.style.color = "#333333"
   } else {
    counter.style.color = "red"
   }
}

prevBtn.addEventListener("click", () => plus(-1))
nextBtn.addEventListener("click", () => plus(1))




