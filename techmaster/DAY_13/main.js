// Khai báo array rỗng
// let arr = [];

// // Khai báo array
// let number = [];

// Gán giá trị cho các phần tử của array thông qua chỉ số
// number[0] = 1;
// number[1] = "Bùi Hiên";
// number[2] = true;
// // console.log(number);

// // Khai báo và khởi tạo giá trị cho array
// let myArr = [1, 2, 3, 4, true, false, "Nguyễn Văn A"];

// //Thay đổi giá trị của mảng thông qua chỉ số
// myArr[4] = 5

// //Cho thành mảng rỗng:
// //C1: myArr = []
// myArr.length = 0

// console.log(myArr);

//Value style: Áp dụng với kiểu dữ liệu nguyên thủy (primity type)
// let text = "Hi"
// let message = text
// console.log(text, message);

// message = "Hello"
// console.log(text, message);

//Tính tham chiếu của array (reference)
// let arr1 = [1, 2, 3, 4]
// let arr2 = arr1

// console.log(arr1);
// console.log(arr2);

// arr2[0] = 5
// console.log("Sau khi thay đổi giá trị");
// console.log(arr1);
// console.log(arr2);

//So sánh:
// let arr1 = [1,2,3,4]
// let arr2 = [1,2,3,4]
// let arr3 = [4,3,2,1]
// let str = "1,2,3,4"

//console.log(arr1 == arr2); //false do 2 arr được lưu trư ở 2 địa chỉ ô nhớ khác nhau
//console.log(arr3 == arr3.sort()); // [4,3,2,1] == [1,2,3,4] => true do cùng 1 địa chỉ ô nhớ
//console.log(arr1 == str); // true do lúc này arr1 được convert sang chuỗi và so sánh với chuỗi. bản chất là (arr1.toString() == str)
//console.log(arr1 === str); //false do khác kiểu dữ liệu

//Sử dụng vòng lặp qua array
let numbers = [1,2,3,4,5];
for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
    
}

//Tính tổng các giá trị của mảng
let sum = 0
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
    
}
console.log(sum);

//Tính tổng các giá trị lẻ của mảng
let sumOdd = 0
for (let i = 0; i < numbers.length; i++) {
    if(numbers[i] % 2 == 1) {
        sumOdd+=numbers[i]
    }
    
}
console.log(sumOdd);



//Bài tập:

//Kiểm tra 1 mảng có phải là mảng tăng dần hay không:
function checkArr1(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] > arr[i+1]) {
            return false
        }
    }
    return true 
}
console.log(checkArr1([1,2,3,4,5,5,9]));
console.log(checkArr1([1,5,4,8,9]));

//Kiểm tra mảng có phải là mảng giảm dần hay không:

function checkArr2(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] < arr[i+1]) {
            return false
        }
    }
    return true
}
console.log(checkArr2([5,4,3,1,0]));
console.log(checkArr2([9,8,7,6,5]));


//Kiểm tra mảng có phải là mảng số chẵn tăng dần hay không
function checkArr3(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] % 2 != 0 || arr[i] > arr[i+1]) {
            return false
        } 
    }
    return true
}
console.log(checkArr3([2,4,6,8,14]));


//Kiểm tra mảng có phải là mảng số lẻ giảm dần hay không
function checkArr4(arr) {
    for (let i = 0; i < arr.length - 1; i++) {
        if(arr[i] % 2 == 0 || arr[i] < arr[i+1]) {
            return false
        }       
    }
    return true
}
console.log(checkArr4([9,7,5,4,3,1]));