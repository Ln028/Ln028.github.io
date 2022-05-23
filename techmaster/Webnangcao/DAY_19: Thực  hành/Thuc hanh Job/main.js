// Sử dụng Javascript để thực hiện các công việc sau

// Thêm 3 job bổ sung vào phần ‘job’ của trang bằng cách sao chép ‘job-card’ ban đầu.

const card = document.querySelector("body > .container > div:last-child > div")
console.log(card);
const cardCopy1 = card.cloneNode(true)
const cardCopy2 = card.cloneNode(true)
const cardCopy3 = card.cloneNode(true)

card.insertAdjacentElement("afterend", cardCopy1) 
card.insertAdjacentElement("afterend", cardCopy2)
card.insertAdjacentElement("afterend", cardCopy3)

// Cập nhật tiêu đề của các job mới thành : JavaScript Developer, Java Developer, Python Developer
const titleCard1 = document.querySelector("body > .container > div:last-child > div:nth-child(2) h3")
titleCard1.innerText = "JavaScript Developer"

const titleCard2 = document.querySelector("body > .container > div:last-child > div:nth-child(3) h3")
titleCard2.innerText = "Java Developer"

const titleCard3 = document.querySelector("body > .container > div:last-child > div:nth-child(4) h3")
titleCard3.innerText = "Python Developer"


// Cập nhật Jobs listed thành tổng số công việc hiện có trong trang
const jobsList = document.querySelector(".logo span")
jobsList.innerText = document.querySelectorAll("body > .container > div:last-child > div").length


// Nhập tên công việc vào ô tìm kiếm để lọc các công việc (lọc theo tên công việc). Những công việc được tìm thấy sẽ hiển thị ra, còn lại sẽ bị ẩn đi

const input = document.querySelector("input")
input.oninput = function() {
    
    if(input.value) {
        
        let jobName = document.querySelectorAll("body > .container > div:last-child > div h3")
        
        for (let i = 0; i < jobName.length; i++) {
            const element = jobName[i];
            
            if(!element.innerText.toUpperCase().includes(input.value.toUpperCase()) ) {
                element.parentNode.parentNode.style.display = 'none'
            }
        }
    }
}

// Bấm vào Nút “All jobs” để reset ô tìm kiếm và hiển thị ra tất cả các công việc
const search = document.querySelector(".menu button")


search.addEventListener("click", function() {
    let cardAll = document.querySelectorAll("body > .container > div:last-child > div")
    for (let i = 0; i < cardAll.length; i++) {
        cardAll[i].style.display = "block"
        input.value = ""
        
    }
        
})