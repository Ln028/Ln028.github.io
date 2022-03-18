// API lấy danh sách các tỉnh (province)
// GET : https://provinces.open-api.vn/api/p/

// Lấy danh sách quận huyện (district)
// GET : https://provinces.open-api.vn/api/p/${provinceCode}?depth=2

// Lấy danh sách xã phường
// GET : https://provinces.open-api.vn/api/d/${districtCode}?depth=2

const provinceEl = document.getElementById("province")
const districtEl = document.getElementById("district")
const wardEl = document.getElementById("commune")

async function getProvince() {
    try {
        let res = await axios.get("https://provinces.open-api.vn/api/p/")

        //render:
        console.log(res.data);
        renderProvince(res.data)
    } catch(err) {
        console.log(err);
    }
}

function renderProvince(arr) {
    arr.forEach(ele => {
        provinceEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`
    })
}
provinceEl.addEventListener("change", async function(){
    try {
        let provinceCode = provinceEl.value
        let res = await axios.get(`https://provinces.open-api.vn/api/p/${provinceCode}?depth=2`)
        console.log(res.data.districts);
        districtEl.innerHTML = ""
        wardEl.innerHTML = ""
        renderDistrict(res.data.districts)

    } catch(err) {

    }
})
function renderDistrict(arr) {
    arr.forEach(ele => {
        districtEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`
    })
}

districtEl.addEventListener("change", async function(){
    try {
        let districtCode = districtEl.value
        let res = await axios.get(`https://provinces.open-api.vn/api/d/${districtCode}?depth=2`)
        console.log(res.data.wards);
        wardEl.innerHTML = ""
        renderWards(res.data.wards)

    } catch(err) {

    }
})

function renderWards(arr) {
    arr.forEach(ele => {
        wardEl.innerHTML += `<option value="${ele.code}">${ele.name}</option>`
    })
}



getProvince()