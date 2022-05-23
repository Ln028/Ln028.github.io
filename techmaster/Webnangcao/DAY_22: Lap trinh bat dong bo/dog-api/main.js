
const select = document.querySelector("select")
async function getBreedsList() {
    //B1: goi API: https://dog.ceo/api/breed/list/all
    //Neu thanh cong -> tra ve ds cac loai cho
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/list/all")
        let breedsList = Object.keys(res.data.message)
        console.log(breedsList);

        //b2: Su dung vong lap de render vao the select
        breedsList.forEach(element => {
            const breedsOption = document.createElement("option")
            breedsOption.value = element
            breedsOption.innerText = `${element}`
            select.insertAdjacentElement("afterbegin", breedsOption)
        });
    } catch (err) {
        console.log(err);
    }

}
getBreedsList()

let btnRandom = document.querySelector(".btn-random")
let imageEl = document.querySelector(".image img")
btnRandom.addEventListener("click", async function() {
    try {
        //B1: Lay ra noi dung trong o select
        let value = document.querySelector("select").value
        //B2: Goi API
        let res = await axios.get(`https://dog.ceo/api/breed/${value}/images/random`)
        //B3: Hien thi anh:
        imageEl.src = res.data.message

    } catch(err) {
        console.log(err)
    }
})
