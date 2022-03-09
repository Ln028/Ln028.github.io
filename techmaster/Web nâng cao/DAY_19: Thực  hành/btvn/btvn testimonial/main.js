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




