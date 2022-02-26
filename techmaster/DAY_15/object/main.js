//object:
//property - thuộc tính: Mô tả đặc điểm, tính chất của 1 đối 
//Method - phương thức: Mô tả về hành động
//Method - function

//1.Khởi tạo 1 object như thế nào
let emptyObj = {}

//C1: Khởi tạo object rỗng, sau đó điền giá trị cho nó
let person = {}
person.id = 1
person.name = "Nguyễn Văn A"
person.address = "Hà Nội"
person.sayHello = function() {
    console.log("Xin chào các bạn")
}
person.eat = function(name) {
    console.log(`Đang ăn ${name} ...`);
}

console.log(person)

//Lấy giá trị của object:
console.log(person.name);
console.log(person.address);
person.sayHello();
person.eat("cơm");
person.eat("pizza")

//Set lại giá trị:
person.id = 10;
person.address = "Đà Nẵng"

console.log(person);

//Xoá 1 thuộc tính:
delete person.id
console.log(person);

//C2: Vừa khai báo, vừa khởi tạo giá trị cho object (Khuyên dùng)
let user = {
    id : 1,
    name : "Lan Nguyen",
    age : 28,
    showInfo1() {
        console.log(`Mình tên là ${user.name}. Năm nay mình ${user.age} tuổi`);
    },
    showInfo2 : function() {
        console.log(`Mình tên là ${user.name}. Năm nay mình ${user.age} tuổi`);
    },
    "first name" : "Nguyen"
}
console.log(user);
user.showInfo1();
user.showInfo2();

console.log(user.name);
console.log(user["name"]);
console.log(user["first name"]);

//Phương thức:
let student = {
    name: "Nguyễn Văn A",
    age: 19,
    email: "nguyenvana@gmail.com"
}
//1. Lấy danh sách key của object -> trả về 1 mảng chứa các key
console.log(Object.keys(student));

//2.Lấy danh sách value của object -> trả về 1 mảng chứa các value
console.log(Object.values(student));

//3.Kiểm tra 1 key có nằm trong object hay không
console.log(student.hasOwnProperty("email"));//true
console.log(student.hasOwnProperty("name"));//true
console.log(student.hasOwnProperty("address"));//false

//Các cách duyệt mảng: for, while, do-while, forEach, for ... of
//Duyệt object : for, for ... in
//C1: sử dụng forr ... in
for (const key in student) {
    // console.log(student[key]);
    console.log(`key: ${key} - value : ${student[key]}`);
}

//C2:sử dụng vòng lặp for
//Lấy ra mảng các key của object student
let keys = Object.keys(student)

//Sử dụng vòng lặp for qua mảng keys
for (let i = 0; i < keys.length; i++) {
    //key = keys[i]
    //VD: name = key[0]
    console.log(student[keys[i]]);
    
}
