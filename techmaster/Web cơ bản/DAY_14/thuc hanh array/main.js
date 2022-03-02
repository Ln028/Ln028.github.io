//Bài 1: Viết function để kiểm tra 1 giá trị có nằm trong mảng hay không?

//checkElementExist([1,2,3,4,5], 5) => true
//checkElementExist([1,2,3,4,5], 6) => false

function array(arr, numb) {
    let checkElementExist = arr.includes(numb)
    return checkElementExist
}
console.log(array([1,2,3,4,5], 5));

function array1(arr, numb) {
    
    return arr.some((x) => x === numb)
}
console.log(array([1,2,3,4,5], 6));

function arr1(arr, numb) {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] == numb) {
            return true
        }
        return false  
    }
}
console.log(arr1([1,2,3,4,5], 8));

//Bài 2: Viết function truyền vào 1 mảng các số, và 1 giá trị bất kỳ. Trả về mảng mới với các giá trị lớn hơn giá trị truyền vào

//getElementGreater([1,2,3,4,5], 3) => [4,5]
//getElementGreater([1,2,3,4,5], 5) => []

function array1(arr, numb) {
    let getElementGreater = arr.filter(arr => arr > numb)
    return getElementGreater 
}
console.log(array1([1,2,3,4,5], 3));

//Bài 3: Viết function random 1 số nguyên trong khoảng min, max bất kỳ
// randomNumber(3,10) => 4
// randomNumber(3,10) => 7

function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

//Bài 4: Viết function để tạo mã màu HEX ngẫu nhiên.

function changeHex() {
    let hex = "#"
    let hexValues = [0,1,2,3,4,5,6,7,8,9,'A','B','C','D','E','F'];
    for (let i = 0; i < 6; i++) {
        let index = Math.floor(Math.random() * hexValues.length)
        hex += hexValues[index];
    }
    return hex
}
console.log(changeHex());

//Bài 5: Viết function để tạo mã màu RGB ngẫu nhiên.
function randomRgbaCode() {
    let res = []
    for (let i = 0; i < 3; i++) {
        res[i] = Math.floor(Math.random() * 256)
    }
    return `rgba(${res.toString()})`
}
console.log(randomRgbaCode());
