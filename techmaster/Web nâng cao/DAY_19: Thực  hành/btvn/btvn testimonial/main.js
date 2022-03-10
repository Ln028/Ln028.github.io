const users = [
    {
        name: "Bob",
        quote: "Hello, I'm Bob. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro placeat quibusdam veritatis fuga, architecto numquam nemo perferendis vel esse consequuntur tempore totam laudantium! Placeat nobis ut tempore doloribus ipsam natus!",
        image: "https://randomuser.me/api/portraits/men/41.jpg",
        color: "red"
    },
    {
        name: "Anna",
        quote: "Hello, I'm Anna. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro placeat quibusdam veritatis fuga, architecto numquam nemo perferendis vel esse consequuntur tempore totam laudantium! Placeat nobis ut tempore doloribus ipsam natus!",
        image: "https://randomuser.me/api/portraits/women/50.jpg",
        color: "green"
    },
    {
        name: "Jane",
        quote: "Hello, I'm Jane. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro placeat quibusdam veritatis fuga, architecto numquam nemo perferendis vel esse consequuntur tempore totam laudantium! Placeat nobis ut tempore doloribus ipsam natus!",
        image: "https://randomuser.me/api/portraits/women/22.jpg",
        color: "orange"
    },
    {
        name: "Jennifer",
        quote: "Hello, I'm Jennifer. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro placeat quibusdam veritatis fuga, architecto numquam nemo perferendis vel esse consequuntur tempore totam laudantium! Placeat nobis ut tempore doloribus ipsam natus!",
        image: "https://randomuser.me/api/portraits/women/76.jpg",
        color: "blue"
    },
    {
        name: "Taylor",
        quote: "Hello, I'm Taylor. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Porro placeat quibusdam veritatis fuga, architecto numquam nemo perferendis vel esse consequuntur tempore totam laudantium! Placeat nobis ut tempore doloribus ipsam natus!",
        image: "https://randomuser.me/api/portraits/men/17.jpg",
        color: "tomato"
    }
]

// Yêu cầu:
// Khi bấm vào mỗi user nào sẽ hiển thị màu, quote, name của user đó,

// Ảnh của user được active to hơn 1 tí (thêm class selected vào user được chọn - xem mã HTML để hiểu rõ hơn)

const backgroud = document.querySelector(".testimonials-container")
const quote = document.querySelector(".text")
const name = document.querySelector("strong")

const images = document.querySelectorAll(".authors-container img")

images.forEach(image => {
    removeSelected();
    image.addEventListener("click", function () {
        removeSelected();
        applyStyles(image)
    })
})

function removeSelected() {
    images.forEach(image => {
        if (image.parentNode.classList.contains("selected")) {
            image.parentNode.classList.remove("selected")
        }
    })
}

function applyStyles(image) {
    users.forEach(user => {
        if (image.src == user.image) {
            backgroud.style.backgroundColor = user.color;
            quote.innerText = user.quote;
            name.innerText = user.name;
            image.parentNode.classList.add("selected")
        }
    })
}


//===========Chua bai=============


//let testimonials = [
//     {
//         name : "Marilyn Monroe",
//         quote : "I’m selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can’t handle me at my worst, then you sure as hell don’t deserve me at my best",
//         color : "#0E185F"
//     },
//     {
//         name : "Dr. Seuss",
//         quote : "Don’t cry because it’s over, smile because it happened",
//         color : "#2FA4FF"
//     },
//     {
//         name : "Mae West",
//         quote : "You only live once, but if you do it right, once is enough.",
//         color : "#FFD32D"
//     },
//     {
//         name : "William W. Purkey",
//         quote : "You’ve gotta dance like there’s nobody watching, love like you’ll never be hurt, sing like there’s nobody listening, and live like it’s heaven on earth",
//         color : "#FF8AAE"
//     },
//     {
//         name : "Robert Frost",
//         quote : "In three words I can sum up everything I’ve learned about life: it goes on.",
//         color : "#6A5495"
//     }
// ]

// // Truy cập
// const testimonialsContainerEl = document.querySelector(".testimonials-container");
// const quoteEl = document.querySelector(".text");
// const authorNameEl = document.querySelector(".name");

// const authorsEl = document.querySelectorAll(".author");

// // render testimonial
// function renderTestimonial(index) {
//     // Lấy ra thông tin object tương ứng
//     let testimonial = testimonials[index];

//     // Cập nhật thông tin
//     authorNameEl.innerText = testimonial.name;
//     quoteEl.innerText = testimonial.quote;
//     testimonialsContainerEl.style.backgroundColor = testimonial.color;
// }

// // Lắng nghe sự kiện
// Array.from(authorsEl).forEach((author, index) => {
//     author.addEventListener("click", function() {
//         // Trước khi thêm thì xóa toàn bộ class "selected"
//         Array.from(authorsEl).map(ele => ele.classList.remove("selected"))

//         // Thêm class "selected" vào author đang được ấn
//         author.classList.add("selected")

//         // Render dữ liệu của author được chọn
//         renderTestimonial(index)
//     })
// })

// renderTestimonial(0)




