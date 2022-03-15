//API: Application Programming Interface

//Khach hang: client
//Boi ban: API
//Nha bep: server (backend)

//Thanh phan cua API:
    //1. HTTP method: 
    //Get: 
        // /api/v1/product: lay tat ca ds product
        // /api/v1/product/1: lay tat ca ds product co id=1
        // /api/v1/product/1/comments
    //Post: 
        // /api/v1/products+data
    //Put:
    //Delete:
        //api/v1/product/1: lay tat ca ds product co id=1

    //2. URL

//Gọi API:
//fetch API: Có sẵn trong js
//axios: thu vien ben ngoai, can noi link vao dd sd

//bam "random" -> call API -> hien thi anh
let btnRandom = document.querySelector(".btn-random")
let imageEl = document.querySelector(".image img")
btnRandom.addEventListener("click", async function() {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/image/random")
        console.log(res);
        
        imageEl.src = res.data.message

    } catch(err) {
        console.log(err)
    }
})

