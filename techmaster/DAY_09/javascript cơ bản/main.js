//Khai báo biến:
// let name;

// console.log(name);
// // Khi 1 biến được khai báo nhưng chưa được gán giá trị thì nó sẽ nhận kiểu dữ liệu là undefined

// //Gán giá trị cho biến:
// name = "Lan Nguyen";
// console.log(name)

// //Cách 1: Vừa khai báo biến vừa gán giá trị cho biến:
// let email = "nguyenlan50aof@gmail.com"
// console.log(email);

// //Khai báo biến sử dụng const: sử dụng const để khai báo hằng số
// const pi = 3.14;
// console.log(pi);

// //Kiểm tra kiểu dữ liệu:
// console.log(typeof name);
// console.log(typeof email);
// console.log(typeof pi);

//có 3 kiểu dữ liệu: undefined; string; number


//String (chuỗi) là một đoạn text có thể không cos ký tự hoặc có từ 1 ký tự trở lên:

//khai báo chuỗi rỗng:
let emptyString = "";

// //Cộng chuỗi:
// let firstName = "Nguyen";
// let lastName = "Lan";

// let fullName = firstName + " " + lastName;
// console.log(fullName);

// console.log(fullName + 10); //Bản chất là "Nguyen Lan" + "10"; 

// console.log(10 + 20 - fullName); // Khi thực hiện phép trừ: 1 số trừ đi 1 cái k phải là sô thì sẽ cho kq NaN (not a number)

// console.log("20" - "10") //bản chất là 20-10


// //Lưu ý: phép cộng thì sẽ converse từ số sang chuỗi các phép tính còn lại thì từ chuỗi sang số


let message = "Xin chào các bạn, mình tên là \"Bùi Hiên\". Mình sinh năm 1997";


// let name = "Bùi Hiên";
// let year = 1997

//sử dụng template string:
// let message = `Xin chào các bạn, mình tên là ${name}. Mình sinh năm ${year}. Năm nay mình ${2022 - year} tuổi`;
console.log(message)

let a = 1;
let b = 22;
let name = 'John';
console.log(b + a);
console.log(a + name);
console.log(a + name + b);
console.log(name + (a + b));
console.log(`${name} + 1`);
console.log(`${name + 1}`);
console.log(`${name + a}`);

console.log(`a + b = ${a + b}`);
console.log(`a + b = ${1 + 2}`);

console.log(`1 + 2 = ${1 + 2}`);
console.log(`1 + 2 = ${a + b}`);

console.log(Math.round(Math.random()))