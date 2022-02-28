//Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

//Cách làm:
//B1: sắp xếp thứ tự giá trị giảm dần của các số trong mảng
//B2: sử dụng vòng lặp for qua mảng, nếu giá trị nào của vòng lặp nhỏ hơn giá trị đầu tiên của mảng thì sẽ return giá trị đó luôn
function max2(arr) {
    let getMax2 = arr.sort((a,b) => b-a)
    for (let i = 0; i < getMax2.length; i++) {
        if(getMax2[i] < getMax2[0]) {
            return getMax2[i]
        }
    }
}
console.log(max2([1,5,6,8,1,8,7,9,9]));

//Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

//Cách làm: 
//B1: 

function stringHasMaxLength(arr) {
    let getString = [arr[0]];
    for (let i = 0; i < arr.length; i++) {
       if(arr[i].length < arr[0].length) {
           getString = [arr[i]]
       }      
       return getString

    }
    return getString
}
console.log(stringHasMaxLength(['Lan', 'Hong', 'Ngan', 'Loan']));

//Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

//Cách làm: Dùng Math.floor và Math.random để tính ra chỉ số ngẫu nhiên của mảng, return phần tử có chỉ số ngẫu nhiên đó

function randomElement(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
}
console.log(randomElement(['Hieu', 1, 'Hong', 20, 'Loan']));

//Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

//Cách làm: Dùng method filter và includes để lọc ra những phần tử trong mảng arr1 với điều kiện phần tử đó cũng nằm trong mảng arr2 

function similarity(arr1, arr2) {
    return union1 = arr1.filter(value => arr2.includes(value))
}
console.log(similarity([1, 2, 3], [1, 2, 3, 5, 6]));

//Bài 5 (2 điểm). Viết function truyền vào 2 tham số:
//Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
//Tham số 2: Là 1 số x <= 1000
//Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

function time(str, numb) {
    


    
}

//Bài 6 (2 điểm). Cho mảng users như sau:

users = [
    {
        name: "Bùi Công Sơn",
        age: 30,
        isStatus: true
    },
    {
        name: "Nguyễn Thu Hằng",
        age: 27,
        isStatus: false
    },
    {
        name: "Phạm Văn Dũng",
        age: 20,
        isStatus: false
    }
]

//Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true

//Cách làm: Dùng method filter để lọc ra những user đáp ứng đủ 2 điều kiện: age > 25 và isStatus = true
const element1 = user => {
    return user.filter(person => person.age > 25 && person.isStatus == true)
}
console.log(element1(users));

//Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

//Cách làm: Dùng method sort để sắp xếp thứ tự các user có age tăng dần
const element2 = user => {
    return user.sort((a, b) => a.age - b.age)
}
console.log(element2(users));

//Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

//Cách làm:
//B1: gọi 1 object rỗng
//B2: chạy vòng lặp for qua mảng, nếu phần tử thứ i của mảng chưa nằm trong object thì gán giá trị của phần tử đó bằng 0, sau mỗi lần lặp thì giá trị của phần tử đó được cộng thêm 1.
//B3: thoát vòng lặp for và trả về object

function array(arr) {
    let result = { };
    for (let i = 0; i < arr.length; i++) {
        if(!result[arr[i]]) {
            result[arr[i]] = 0;
        } 
        result[arr[i]] = result[arr[i]] + 1;
    }
    return result
}

console.log(array(["one", "two", "three", "one", "one", "three"]));
