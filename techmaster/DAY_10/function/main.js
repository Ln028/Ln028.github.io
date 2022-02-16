//function:

//Định nghĩa:
function sayHello() {
    console.log("Xin Chào");
}
//Thực thi:
sayHello()

//function có 1 tham so:
function sayHelloWithName(name) {
    console.log(`Xin chao ${name}`);
}

sayHelloWithName("Nguyen Van A")
sayHelloWithName("Tran Thi C")

//function có 2 tham số:
function sayHelloWithNameAndYear(name, year) {
    console.log(`Xin chào ${name}. Năm nay ${2022-year} tuổi.`)
}

sayHelloWithNameAndYear("Lan Nguyen", 1994) 

//Lưu ý: Truyền giá trị tương ứng với tham số theo đúng thứ tự

//Function có trả về kết quả. Ví dụ:
//Tính tổng 2 số:
// function sum(num1 = 10, num2 = 20) {
//     let result = num1 + num2;
//     return result
    //Chú ý: các câu lệnh đằng sau từ khóa return sẽ không được thực thi
// }
//thực thi:
// let data = sum(3,4); 
// console.log(data);

// console.log(sum(5,6));
// console.log(sum(data, 5))



console.log(sum()) //Truyền thiếu 2 giá trị -> num1 = 10, num2 = 20
console.log(sum(3)) //Truyền thiếu 1 giá trị -> num1 = 3, num2 = 20
console.log(sum(2,3)) //Truyền đủ giá trị -> num1 = 2, num2 =3

//1.In ra dòng chữ: Xin chào các bạn:
function sayHelloEveryone() {
    console.log("Xin chào các bạn")
}
sayHelloEveryone()

//2.In ra dòng chữ : Xin chào X (với X là một chuỗi bất kỳ, nhập vào tham số khi gọi hàm):
function sayHelloName(Name) {
    console.log(`Xin chào ${Name}`)
}
sayHelloName("Lan Nguyen")

//3.In ra dòng chữ : Xin chào “X” (với X là một chuỗi bất kỳ, nhập vào tham số khi gọi hàm):

function sayHelloName2(Name2) {
    console.log(`Xin chào "${Name2}"`)
}
sayHelloName2("Lan Nguyen")

//4.Tính tổng 2 số a, b bất kỳ:

function sum(a = 2, b =3 ) {
    let result = a + b;
    return result
}
console.log(sum(4,6))

//5. Tính bình phương của 1 số bất kỳ:
function pow(a = 5) {
    let result = a * a;
    return result
}
console.log(pow(4))

//6.Tính thế kỷ của 1 năm bất kỳ (năm là 1 số nguyên dương):

function floor(a = 2022) {
    let result = a / 100;
    return result
}
console.log(Math.floor(floor()))
