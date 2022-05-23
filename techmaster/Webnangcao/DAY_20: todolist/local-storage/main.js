if(typeof(Storage) !== "undefined") {
    console.log('Có hỗ trợ');
} else {
    console.log('Không hỗ trợ');
}

//1.Phuong thuc luu du lieu:
    //Luu du lieu dang nguyen thuy:
localStorage.setItem('name', 'Ngô B');
localStorage.setItem('number', '1');
localStorage.setItem('isStatus', 'false');


    //Đối với kiểu dữ liệu arr hay obj thì kiểu dữ liêuj convert sang dạng chuỗi => phai su dung JSON.stringify
let numbers = [1,2,3,4,5,6];
localStorage.setItem("numbers", JSON.stringify(numbers))

let users = [
    {
        name: "Nguyen Van A",
        age: 24
    },
    {
        name: "Nguyen Van B",
        age: 29
    }
]
localStorage.setItem("users", JSON.stringify(users))


//2.Phuong thuc lay du lieu:
    //Lay du lieu nguyen thuy:
let name = localStorage.getItem("name")
console.log(name);

    //Lay du lieu cua arr hoac obj

console.log(JSON.parse(localStorage.getItem("numbers")));

console.log(localStorage.getItem("users"));
console.log(JSON.parse(localStorage.getItem("users")));

    //Lay gia tri cua du lieu k ton tai:
    console.log(localStorage.getItem("email"));//=>cho gia tri null

//Lay so luowngj key-value trong localStorage

let count = localStorage.length;
console.log(count);
