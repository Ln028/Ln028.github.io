//function bình thường
function sum(a, b) {
    return a + b
}

//1. Gán function cho 1 biến - function expression

// function không tên - anonymous function
let sumNumber = function(a,b) {
    return a + b
}
console.log(1, 2);

//2. Truyền function vào làm tham số cho 1 functon khác
//Ví dụ: Tính tổng các giá trị lẻ trong mảng

//Cách viết bình thường
let sumOdd = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] % 2 == 1) {
            total += arr[i]
        }      
    }
    return total
}
console.log(sumOdd([1,2,3,4,5]));

//Cách viết khác:
//TH1: Tìm mảng các giá trị lẻ
let isOdd = function(arr) {
    let res = [];
    for (let i = 0; i < arr.length; i++) {
        if(arr % 2 == 1) {
            res.push(arr[i])
        }
        
    }
    return res
}
//TH2: tính tổng
let sumArr = function(arr) {
    let total = 0;
    for (let i = 0; i < arr.length; i++) {
            total += arr[i]     
    }
    return total
}
console.log(sumArr(isOdd([1,2,3,4,5])));

// 3. Có thể được trả về từ functions khác
const funcA = function (a, b) {
    return function (c) {
        return a + b + c
    }
}

const data = funcA(4, 5); // Trả về function khi gọi funcA
console.log(data); //data là function

console.log(data(6));// gọi function data và truyền vào đối số


//Arrow function
//cách viết 1:
let sumArrow = (a, b) => {
    return a+ b;
}
//cách viết 2: TH function chỉ có 1 câu lệnh return thì có thể viết như sau: loại bỏ {} và từ khoá return
let sumArrow1 = (a,b) => a + b

//Vòng lặp forEach
// Khai báo mảng các số
let numbers = [1, 2, 3, 4, 5, 6]

// In ra các phần tử của mảng
numbers.forEach(function(value) {
    console.log(value);
})
//hoặc có thể viết như sau:
numbers.forEach(ele => {
    console.log(ele);
})


//Vòng lặp forOf:
let numbers = [1, 2, 3, 4, 5, 6]

// In ra các giá trị của mảng
for (const value of numbers) {
    console.log(value);
}

// Tính tổng các giá trị trong mảng
let sum1 = 0;
for (const value of numbers) {
    sum1 += value
}
console.log(sum1);

