const select = document.getElementById("list")
async function getBreedsList() {
    try {
        let res = await axios.get("https://dog.ceo/api/breeds/list/all")
        let breedsList = Object.keys(res.data.message)
        for (let i = 0; i < breedsList.length; i++) {
            const element = breedsList[i];
            const breedsOption = document.createElement("option")
            breedsOption.value = element
            breedsOption.innerText = `${element}`
            select.insertAdjacentElement("beforeend", breedsOption)
        }

    } catch (err) {
        console.log(err);
    }

}
getBreedsList()

let btn = document.querySelector(".btn")


btn.addEventListener("click", async function () {
    try {
        let value = document.querySelector("select").value
        let res = await axios.get(`https://dog.ceo/api/breed/${value}/list`)

        let subBreedAll = res.data.message
        let content = document.getElementById("content")
        content.innerText = ""
        
        let subBreed = document.createElement("ul")
        content.insertAdjacentElement("beforeend", subBreed)
    
        subBreed.innerText = "Sub Breeds List"
                
        if (subBreedAll.length == 0) {
            let subBreedEl = document.createElement("li")
            subBreed.insertAdjacentElement("beforeend", subBreedEl)
            subBreedEl.innerText = "Khong co sub breed"
            return
        }
        
        for (let j = 0; j < subBreedAll.length; j++) {
            const ele = subBreedAll[j];
            const liEl = document.createElement("li")
            const subBreedEle = document.createElement("a")
            subBreedEle.innerText = `${ele}`
            subBreedEle.href = "#"
            subBreedEle.addEventListener("click", function() {
                randomDogImage(value, ele)
            })
            liEl.appendChild(subBreedEle)
            
            subBreed.insertAdjacentElement("beforeend", liEl)

        }

    } catch (err) {
        console.log("err")
    }
})

let randomDogImage = async function(breed, subBreed) {
    try {
        const image = document.querySelector(".image img")
        let res = await axios.get(`https://dog.ceo/api/breed/${breed}/${subBreed}/images`)

        let imgRandom = res.data.message
        image.src = imgRandom[Math.floor(Math.random() * imgRandom.length)];
        console.log(res);
    } catch(err) {
        console.log(err);
    }
}
