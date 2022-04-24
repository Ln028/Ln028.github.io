// //Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// //Cách làm:
// //B1: sắp xếp thứ tự giá trị giảm dần của các số trong mảng
// //B2: sử dụng vòng lặp for qua mảng, nếu số hiện tại có giá trị nhỏ hơn giá trị của số đầu tiên trong mảng thì sẽ trả về kết quả là số đó luôn.
// // function max2(arr) {
// //     let getMax2 = arr.sort((a,b) => b-a)
// //     for (let i = 0; i < getMax2.length; i++) {
// //         if(getMax2[i] < getMax2[0]) {
// //             return getMax2[i]
// //         }
// //     }
// // }
// // console.log(max2([1,5,6,8,1,8,7,9,9]));

// function max2(arr) {
//     let getMax2 = arr.sort((a,b) => b-a)
//     for (let i = 0; i < getMax2.length; i++) {
//         if(getMax2[i] < getMax2[0]) {
//             return getMax2[i]
//         }
         
//     }
// }
// console.log(max2([1,5,6,8,1,8,7,9,9]));

// //Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// //Cách làm: 
// //B1: Gán độ dài lớn nhất có giá trị 0, resultMax là 1 mảng rỗng
// //B2: Chạy vòng lặp forEach qua mảng, kiểm tra điều kiện độ dài mỗi item trong mảng >= độ dài lớn nhất. Tiếp theo nếu độ dài của phần tử hiện tại > độ dài lớn nhất thì khởi tạo lại mảng (thành mảng rỗng)
// //B3: Khi tìm được phần tử có độ dài >= độ dài lớn nhất thì độ dài lớn nhất = độ dài của phần tử đó. Su đó thêm các phần tử này vào mảng result.
// //B4: thoát vòng lặp for, trả về kết quả của result

// function stringHasMaxLength(arr) {
//     let maxLength = 0;
//     let resultMax = [];
//     arr.forEach(item => {
//         if (item.length >= maxLength) {
//             if (item.length > maxLength) {
//                 resultMax = []
//             }
//             maxLength = item.length;
//             resultMax.push(item);
//         }
//     })
//     return resultMax;
// }
// console.log(stringHasMaxLength(['Hieu', 'Lan', 'Hong', 'Ngan', 'Loan']));



// //Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// //Cách làm: Dùng Math.floor và Math.random để tính ra chỉ số ngẫu nhiên của mảng, trả về kết quả là phần tử có chỉ số ngẫu nhiên đó

// function randomElement(arr) {
//     return arr[Math.floor(Math.random() * arr.length)]
// }
// console.log(randomElement(['Hieu', 1, 'Hong', 20, 'Loan']));

// //Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// //Cách làm: Lọc ra những phần tử trong mảng arr1 (dùng method filter) với điều kiện phần tử đó cũng nằm trong mảng arr2 (dùng method includes)

// function similarity(arr1, arr2) {
//     return union1 = arr1.filter(value => arr2.includes(value))
// }
// console.log(similarity([1, 2, 3], [1, 2, 3, 5, 6]));

// //Bài 5 (2 điểm). Viết function truyền vào 2 tham số:
// //Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// //Tham số 2: Là 1 số x <= 1000
// //Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// //Cách làm:
// //B1: tách chuỗi thời gian t thành mảng các phần tử giờ, phút, giây (dùng method split). Sau đó chuyển kiểu dữ liệu của các phần tử từ chuỗi sang số (dùng method map)
// //B2: quy đổi thời gian từ giờ phút giây của t sang giây
// //B3: Tính tổng tPlusX = thời gian t cộng thêm x giây
// //B4: Quy đổi tPlusX từ giây sang giờ phút giây
// //B5: Trả về kết quả là chuỗi giá trị giờ phút giây

// function time(t,x) {
//     let arr = t.split(":").map(item => Number(item))
//     let tToSeconds = arr[2] + arr[1]*60 + arr[0] * 3600;
//     let tPlusX = tToSeconds + x;
//     let newHours = Math.floor(tPlusX/3600);
//     let newMinutes = Math.floor((tPlusX % 3600) / 60);
//     let newSeconds = (tPlusX % 3600) % 60;
//     let newTime = `${newHours}:${newMinutes}:${newSeconds}`
//     return newTime
// }
// console.log(time('6:50:20', 9));

// //Bài 6 (2 điểm). Cho mảng users như sau:

// users = [
//     {
//         name: "Bùi Công Sơn",
//         age: 30,
//         isStatus: true
//     },
//     {
//         name: "Nguyễn Thu Hằng",
//         age: 27,
//         isStatus: false
//     },
//     {
//         name: "Phạm Văn Dũng",
//         age: 20,
//         isStatus: false
//     }
// ]

// //Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true

// //Cách làm: Dùng method filter để lọc ra những user đáp ứng đủ cả 2 điều kiện: age > 25 và isStatus = true
// const element1 = user => {
//     return user.filter(person => person.age > 25 && person.isStatus == true)
// }
// // function element1(user) {
// //     return user.filter(person => person.age > 25 && person.isStatus == true)
// // }


// console.log(element1(users));

// //Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần

// //Cách làm: Dùng method sort để sắp xếp thứ tự các user có age tăng dần
// // const element2 = user => {
// //     return user.sort((a, b) => a.age - b.age)
// // }
// function element3(user) {
//     return user.sort((a,b) => a.age - b.age)
// }
// console.log(element3(users));

// //Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// //Cách làm:
// //B1: Gán resuft là 1 object rỗng
// //B2: Lặp qua từng phần tử trong mảng, nếu phần tử hiện tại của mảng đã nằm trong object thì giá trị của phần tử đó được cộng thêm 1 và tiếp tục vòng lặp. Nếu phần tử hiện tại không nằm trong mảng, thì đưa phần tử đó vào trong mảng và khởi tạo giá trị của phần tử đó = 1.
// //B3: thoát vòng lặp for và trả về giá trị của object.

// function array(arr) {
//     let result = {};
//     for (let i = 0; i < arr.length; i++) {
//         if (!result[arr[i]]) {
//             result[arr[i]] = 1;
//         } else if(result[arr[i]]) {
//             result[arr[i]] = result[arr[i]] + 1;
//             // continue
//         } 
        
//     }
//     return result
// }

// console.log(array(["one", "two", "three", "one", "one", "three"]));



// function reverseString(s) {
//     // Create the result list
//     const result = [];
//     // Start from the end of the string and iterate towards the start
//     for (let i = 0; i < s.length; i ++) {
//     // Push the current char in the list
//     result.unshift(s[i]);
//     }
//     // Combine the result in a string
//     return result.join('');
//    }
//    console.log(reverseString("abc"));

//    function search(arr) {
//        for (let i = 0; i < arr.length; i++) {
//            if(arr[i] == 22) {
//                return arr[i]
//            }
           
//        }
//    }
//    console.log(search([1,3,5,7,9,11,14,18]));






// //Bài 1:

// // Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra

// // Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
// // Nếu số đó chia hêt cho 3 thì in ra “Fizz”
// // Nếu số đó chia hêt cho 5 thì in ra “Buzz”

// function number(x) {
//     if(x % 3 == 0 && x % 5 == 0) {
//         return "FizzBuzz"
//     } else if(x % 3 == 0) {
//         return "Fizz"
//     } else if(x % 5 == 0) {
//         return "Buzz"
//     }
// }
// console.log(number(10));


// // Bài 2:

// // Viết function giải phương trình bậc nhất (ax + b= 0)

// // Cần kiểm tra trường hợp a = 0 và a != 0
// // In ra kết quả

// function giaiPt1(a, b) {
//     if(a === 0 && b === 0) {
//         return "Phuong trinh vo so nghiem"
//     } else if (a === 0 && b != 0) {
//         return "Phuong trinh vo nghiem"
//     } else if(a != 0 && b === 0) {
//         return "Phuong trinh co nghiem x=0"
//     } else {
//         return `Phuong trinh co nghiem x = ${-b/a}`
//     }
// }
// console.log(giaiPt1(1, 3));


// // Bài 3:

// // Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)

// // Cần kiểm tra trường hợp a = 0 và a != 0
// // In ra kết quả


// function giaiPt2(a, b, c) {
//     if(a === 0) {
//         if(b === 0 && c === 0) {
//             return "Phuong trinh vo so nghiem"
//         } else if (b === 0 && c != 0) {
//             return "Phuong trinh vo nghiem"
//         } else if(b != 0 && c === 0) {
//             return "Phuong trinh co nghiem x=0"
//         } else {
//             return `Phuong trinh co nghiem x = ${-c/b}`
//         }
//     } else if (a != 0) {
//         let delta = b*b - 4*a*c
//         if(delta === 0) {
//             return `Phương trình có nghiệm kép  x1 = x2 = ${-b/(2*a)}`
//         } else if(delta < 0) {
//             return "Phuong trinh vo nghiem"
//         } else {
//             return `Phuong trinh co nghiem kep la x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}; x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`
//         }
//     }
// }
// console.log(giaiPt2(0, 3, 6));

// // Bài 4:

// // Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?

// // Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// // Nếu không in ra kết quả “Không la năm nhuận”
// // Cách tính năm nhuận như thế nào thì lên mạng tra

// function checkYear(number) {
//     if(number % 400 == 0) {
//         return `${number} la nam nhuan`
//     } else if(number % 4 == 0 && number % 100 != 0) {
//         return `${number} la nam nhuan`
//     } else {
//         return `${number} khong phai la nam nhuan`
//     }
// }
// console.log(checkYear(2003));


// // Bài 5:

// // Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng

// // Sử dụng return

// function tinhBMI(x, y) {
//     return `Chi so BMI = ${x/(y**2)}`
// }
// console.log(tinhBMI(47, 1.56));

// // Bài 6:

// // Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng

// // Sử dụng return

// function tinhDoF(number) {
//     return `Gia tri do F tuong ung la ${number * 9/5 + 32}`
// }
// console.log(tinhDoF(25));


// // Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

// // Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

// function repeatString1(str) {
//     let newStr1 = ""
//     for (let i = 0; i < 11; i++) {
//        newStr1 += str
//     }
//     return newStr1
// }
// console.log(repeatString1("b"));

// // Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

// // Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

// function repeatString2(str) {
//     let newStr2 = ""
//     for (let i = 1; i <= 11; i++) {
//         if(i == 1) {
//             newStr2 = str
//         } else {
//             newStr2 = newStr2 + "-" + str
//         }
//     }
//     return newStr2
// }
// console.log(repeatString2("a"));

// // Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

// // Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’

// function repeatString3(str, n) {
//     let newStr3 = ""
//     for (let i = 1; i <= n; i++) {
//         if(i == 1) {
//             newStr3 = str
//         } else {
//             newStr3 = newStr3 + "-" + str
//         }
        
//     }
//     return newStr3
// }
// console.log(repeatString3("a", 5));

// // Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100
// function sum() {
//     let show = 0
//     for (let i = 0; i <= 100; i++) {
//         if(i % 5 == 0) {
//             show += i
//         }
        
//     }
//     return show
    
// }
// console.log(sum());

// // Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.
// function theTichKhoiCau(r) {
//     return `V = ${4/3 * Math.PI * Math.pow(r, 3)}`
// }
// console.log(theTichKhoiCau(5));



// // Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// // Note : Kết quả xuôi và ngược là như nhau

// // Ví dụ :

// // sum(3,8) = 22
// // sum(8,3) = 22

// function tinhTong(numb1, numb2) {
//     let number = 0
//     if(numb1 < numb2) {
//         for (let i = numb1 + 1; i < numb2; i++) {
//             number += i
//         }
//     } else if(numb1 > numb2) {
//         for (let i = numb2 + 1; i < numb1; i++) {
//             number += i
//         }
//     }
//     return number
// }
// console.log(tinhTong(6, 2));

// // Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

// function kiemTraSnt(numb) {
//     if(numb < 2) {
//         return false
//     } else {
//         for (let i = 2; i < numb; i++) {
//             if(numb % i == 0) {
//                 return false
//             }
//         }
//         return true
//     }
// }
// console.log(kiemTraSnt(7));

// // Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

// function tinhTongSnt(numb) {
//     let tongSnt = 0
//     if (numb <2) {
//         return 0
//     } else {
//         for (let i = 2; i <= numb; i++) {
//             let test = true
//             for (let j = 2; j < i; j++) {
//                 if(i % j == 0) {
//                     test = false
//                     break
//                 }            
//             } 
//             if(test == true) {
//                 tongSnt += i
//             }
//         }
//     }
//     return tongSnt
// }
// console.log(tinhTongSnt(12));


// // Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

// function tinhTongUocSo(numb) {
//     let tongUocSo = 0
//     for (let i = 1; i <= numb; i++) {
//        if(numb % i == 0) {
//         tongUocSo += i
//        }
        
//     }
//     return tongUocSo
// }

// console.log(tinhTongUocSo(12));

// // Học viên về tìm hiểu các phương thức liên quan đến string ( string methods) và làm các bài tập sau:

// // Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false

// // Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

// // Ví dụ:

// // checkStringExist(“i love you”, “you”) => true
// // checkStringExist(“i love you”, “hate”) => false

// function checkStringExist(str1, str2) {
//     return str1.includes(str2)
// }
// console.log(checkStringExist("i love you", "you"))



// // Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

// // Ví dụ:

// // shortenString(“Xin chào các bạn”) => “Xin chào…”
// // shortenString("hello’) => “hello”

// function shortenString(str) {
//     let newString = ""
//     for (let i = 0; i < str.length; i++) {
//         if(str.length<=8) {
//             newString = str
//         } else {
//             newString = str.substr(0, 8) + "..."
//         }
//     }
//     return newString
// }
// console.log(shortenString("Hello"));

// // Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

// // Ví dụ

// // “Race car” => true,
// // “hello world” => false.

// function checkReverse(str) {
//     let string1 = str.toLowerCase().replace(/\s/g, "")
//     return string1 == string1.split("").reverse().join("")
// }
// console.log(checkReverse("hello world"));

// // Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

// // Ví dụ

// // 53751 -> 13557
// // 14350 -> 10345
// // 203950 -> 200359

// function numberSort(numb) {
//     let array = numb.toString().split("").sort()
//     console.log(array);
//     for (let i = 0; i < array.length; i++) {
//         if(array[0] == 0 && array[i] != 0) {
//             array[0] = array[i];
//             array[i] = 0
//             break
//         } 
//     }
//     return Number(array.join(""))
// }
// console.log(numberSort(14360005));

// // Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

// // Ví dụ:

// // “HELLO world” => “hello_world”
// // “Xin Chào Các BẠN” => “xin_chào_các_bạn”

// function snakeStr(str) {
//     let strToArr = str.toLowerCase().split(" ")
//     return strToArr.join("_")
// }
// console.log(snakeStr("Xin Chào Các BẠN"));

// // Bài 1: Tìm số lớn nhất trong mảng
// function maxNumber(arr) {
//     let value = arr.sort((a, b) => b-a)
//     return value[0]
// }
// console.log(maxNumber([1,300, 6,8,90]));

// // Bài 2: Tìm số nhỏ nhất trong mảng
// function minNumber(arr) {
//     let value2 = arr.sort((a, b) => a-b)
//     return value2[0]
// }
// console.log(minNumber([1,300, 6,8,90]));


// // Bài 3: Viết hàm cho phép truyền vào 1 mảng các số, kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2

// // Ví dụ : [4,2,5,6,2,7] => [0,0,1,0,0,1]

// function array2(arr) {
//     let newArr = []
//     for (let i = 0; i < arr.length; i++) {
//         newArr.push(arr[i] % 2) 
//     }
//     return newArr
// }

// console.log(array2([1,2,3,4,6,8,9]));
// // Bài 4: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần

// function string(str) {
//     return str.repeat(10)
// }
// console.log(string("happy"));
// // Bài 5: Cho 1 chuỗi, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.
// function string2(str) {
//     let newStr = str + "-"
//     return newStr.repeat(10).slice(0, -1)
// }
// console.log(string2("hi"));

// // Ví dụ: repeatString(‘a’) => Kết quả trả về là ‘a-a-a-a-a-a-a-a-a-a’ 


// // Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

// // sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

// function sortArr(arr) {
//     return arr.sort((a, b) => b.localeCompare(a))
// }
// console.log(sortArr(['Nam', 'Hoa', 'Tuan', 'Đức']));

// // Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

// // shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// // shuffle([1,2,3,4,5]) => [4,2,3,5,1]

// function shuffle(arr) {
//     for (let i = 0; i < arr.length; i++) {
//         let j = Math.floor(Math.random()* (i+1))
//         ele = arr[i]
//         arr[i] = arr[j]
//         arr[j] = ele  
//     }
//     return arr
// }
// console.log(shuffle([1,2,3,4,5]));

// // Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

// // symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

// function symmetricDifference(arr1, arr2) {
//     let newArr1 = arr1.filter(value => !arr2.includes(value))
//     let newArr2 = arr2.filter(value => !arr1.includes(value))
//     return newArr1.concat(newArr2)
// }
// console.log(symmetricDifference([1, 2, 3], [1, 2, 4]));

// // Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

// // union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// // union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

// function union(arr1, arr2) {
//     let newArr3 = arr1.filter(value => arr2.includes(value))
//     let newArr4 = arr1.filter(value => !arr2.includes(value))
//     let newArr5 = arr2.filter(value => !arr1.includes(value))
//     let newArr6 = newArr3.concat(newArr4).concat(newArr5)
//     let unionNew = []
//     for (let i = 0; i < newArr6.length; i++) {
//         if(!unionNew.includes(newArr6[i])) {
//             unionNew.push(newArr6[i])
//         }
//     }
//     return unionNew
// }
// console.log(union([1, 2, 3, 1], [4, 3, 2, 4]));

// // Danh sách các sản phẩm có trong giỏ hàng
// let products = [
//     {
//         name: "Iphone 13 Pro Max", // Tên sản phẩm
//         price: 30000000, // Giá mỗi sản phẩm
//         brand: "Apple", // Thương hiệu
//         count: 2, // Số lượng sản phẩm trong giỏ hàng
//     },
//     {
//         name: "Samsung Galaxy Z Fold3",
//         price: 41000000,
//         brand: "Samsung",
//         count: 1,
//     },
//     {
//         name: "IPhone 11",
//         price: 15500000,
//         brand: "Apple",
//         count: 1,
//     },
//     {
//         name: "OPPO Find X3 Pro",
//         price: 19500000,
//         brand: "OPPO",
//         count: 3,
//     },
// ]

// // 1. In ra thông tin các sản phẩm trong giỏ hàng theo cấu trúc sau
// // Tên - Giá - Thương Hiệu - Số lượng
// // Ví dụ : OPPO Find X3 Pro - 19500000 - OPPO - 3

// function showInfoProduct(product) {
//     product.forEach(pro => {
//        console.log(`${pro.name}-${pro.price}-${pro.brand}-${pro.count}`)
//     });
// }
// showInfoProduct(products)

// // 2. Tính tổng tiền tất cả sản phẩm trong giỏ hàng
// // Tổng tiền mỗi sản phẩm = price * count

// const showSumPrice = price => {
//     let prices = 0
//     for (let i = 0; i < price.length; i++) {
//         prices += price[i].price * price[i].count
//     }
//     return prices
// }
// console.log(showSumPrice(products));

// // 3. Tìm các sản phẩm của thuơng hiệu "Apple"

// const showBrand = brand => {
//     let brands = []
//     for (let i = 0; i < brand.length; i++) {
//         const ele = brand[i];
//         if(ele.brand == "Apple") {
//             brands.push(ele)
//         }
//     }
//     return brands
// }
// console.log(showBrand(products));

// // 4. Tìm các sản phẩm có giá > 20000000

// const showPrice = price2 => {
//     let priceProduct = []
//     price2.forEach(pro => {
//         if(pro.price > 20000000) {
//             priceProduct.push(pro)
//         }
//     })
//     return priceProduct
// }
// console.log(showPrice(products));

// // 5. Tìm các sản phẩm có chữ "pro" trong tên (Không phân biệt hoa thường)

// const productName = namePro => {
//     let names = []
//     namePro.forEach(pro => {
//         console.log((pro.name).toLowerCase());
//         if((pro.name).toLowerCase().includes("pro")) {
//             names.push(pro)
//         }
//     })
//     return names
// }
// console.log(productName(products));

// // 6. Thêm 1 sản phẩm bất kỳ vào trong mảng product

// function newProduct(name, price, brand, count) {
//     return {
//         name: name,
//         price: price,
//         brand: brand,
//         count: count
//     }
// }
// products.push(newProduct("iphone 11", 20000000, "Apple", 1))
// console.log(products);

// // 7. Xóa tất cả sản phẩm của thương hiệu "Samsung" trong giỏ hàng

// const deleteProduct = deletePro => {
//     let newProduct = []
//     deletePro.forEach(pro => {
//         console.log(pro.brand);
//         if(pro.brand != "Samsung") {
//             newProduct.push(pro)
//         }
//     })
//     return newProduct
// }
// console.log(deleteProduct(products));

// // 8. Sắp xếp giỏ hàng theo price tăng dần

// const sortProduct = sortPro => {
//     return sortPro.sort((a,b) => a.price - b.price)
// }
// console.log(sortProduct(products));

// // 9. Sắp xếp giỏ hàng theo count giảm dần
// const sortCountProduct = sortCount => {
//     return sortCount.sort((a,b) => b.count - a.count)
// }
// console.log(sortCountProduct(products));

// // 10. Lấy ra 2 sản phẩm bất kỳ trong giỏ hàng

// const randomProduct = randomPro => {
//     for (let i = 0; i < randomPro.length; i++) {
//         let j = Math.floor(Math.random() * (i+1))
//         let ele = randomPro[i]
//         randomPro[i] = randomPro[j]
//         randomPro[j] = ele  
//     }
//     return randomPro.slice(0, 2)

// }
// console.log(randomProduct(products));


// const grades = [
//     { name: 'John', grade: 8, sex: 'M' },
//     { name: 'Sarah', grade: 12, sex: 'F' },
//     { name: 'Bob', grade: 16, sex: 'M' },
//     // { name: 'Boby', grade: 16, sex: 'M' },
//     // { name: 'Bobb', grade: 16, sex: 'M' },
//     { name: 'Johnny', grade: 2, sex: 'M' },
//     { name: 'Ethan', grade: 4, sex: 'M' },
//     { name: 'Paula', grade: 18, sex: 'F' },
//     { name: 'Donald', grade: 5, sex: 'M' },
//     { name: 'Jennifer', grade: 13, sex: 'F' },
//     { name: 'Courtney', grade: 15, sex: 'F' },
//     { name: 'Jane', grade: 9, sex: 'F' }
// ]

// // Viết function tính thứ hạng trung bình của cả lớp
// function rank(arr) {
//     let rankStudent = 0
//     arr.forEach(student => {
//         rankStudent += student.grade
//     })
//     return rankStudent/arr.length
// }
// console.log(rank(grades));

// // Viết function tính thứ hạng trung bình của Nam trong lớp

// function rankMale(arr) {
//     let rankMaleStudent = 0
//     let newArrM = arr.filter(student => student.sex == "M")
//     newArrM.forEach(student => {
//         rankMaleStudent += student.grade
//     })
//     return rankMaleStudent/newArrM.length
// }
// console.log(rankMale(grades));

// // Viết function tính thứ hạng trung bình của Nữ trong lớp

// function rankFemale(arr) {
//     let rankFmaleStudent = 0
//     let newArrF = arr.filter(student => student.sex == "F") 
//     newArrF.forEach(student => {
//         rankFmaleStudent += student.grade
//     })
//     return rankFmaleStudent/newArrF.length
// }
// console.log(rankFemale(grades));

// // Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp

// function firstMale(arr) {
//     let maleStudent = arr.filter(student => student.sex == "M").sort((a, b) => b.grade - a.grade)
//     let list1 = [maleStudent[0]]
//     for (let i = 1; i < maleStudent.length; i++) {
//         if(maleStudent[i].grade == maleStudent[0].grade) {
//             list1.push(maleStudent[i])
//         }   
//     }
//     return list1
// }
// console.log(firstMale(grades));

// // Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
// function firstFemale(arr) {
//     let femaleStudent = arr.filter(student => student.sex == "F").sort((a, b) => b.grade - a.grade)
//     let list2 = [femaleStudent[0]]
//     for (let i = 1; i < femaleStudent.length; i++) {
//         if(femaleStudent[i].grade == femaleStudent[0].grade) {
//             list2.push(femaleStudent[i])
//         }
//     }
//     return list2
// }
// console.log(firstFemale(grades));

// // Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp

// function lastMale(arr) {
//     let showLast = arr.filter(student => student.sex == "M").sort((a, b) => a.grade - b.grade)
//     let list3 = [showLast[0]]
//     for (let i = 1; i < showLast.length; i++) {
//         if(showLast[i].grade == showLast[0].grade) {
//             list3.push(showLast[i])
//         }
//     }
//     return list3
// }
// console.log(lastMale(grades));

// // Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp

// function lastFemale(arr) {
//     let showLast2 = arr.filter(student => student.sex == "F").sort((a, b) => a.grade - b.grade)
//     let list4 = [showLast2[0]]
//     for (let i = 1; i < showLast2.length; i++) {
//         if(showLast2[i].grade == showLast2[0].grade) {
//             list4.push(showLast2[i])
//         }
//     }
//     return list4
// }
// console.log(lastFemale(grades));

// // Viết function thứ hạng cao nhất của cả lớp

// function firstClass(arr) {
//     let theFirst = arr.sort((a,b) => b.grade - a.grade)
//     let list5 = []
//     for (let i = 0; i < theFirst.length; i++) {
//         if(theFirst[i].grade == theFirst[0].grade) {
//             list5.push(theFirst[i])
//         }
//     }
//     return list5
// }
// console.log(firstClass(grades));

// // Viết function thứ hạng thấp nhất của cả lớp

// function lastClass(arr) {
//     let theLast = arr.sort((a,b) => a.grade - b.grade)
//     let list6 = []
//     for (let i = 0; i < theLast.length; i++) {
//         if(theLast[i].grade == theLast[0].grade) {
//             list6.push(theLast[i])
//         }
//     }
//     return list6
// }
// console.log(lastClass(grades));

// // Viết function lấy ra danh sách tất cả học viên Nữ trong lớp

// function allFemale(arr) {
//     let showAllFemale = arr.filter(student => student.sex == "F")
//     return showAllFemale
// }
// console.log(allFemale(grades));

// // Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái

// function showList(arr) {
//     let theList = arr.sort((a,b) => (a.name).localeCompare(b.name))
//     return theList
// }
// console.log(showList(grades));

// // Viết function sắp xếp thứ hạng học viên theo chiều giảm dần

// function sapXepGiamDan(arr) {
//     let newList = arr.sort((a,b) => b.grade - a.grade)
//     return newList
// }
// console.log(sapXepGiamDan(grades));

// // Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”

// function filterName(arr) {
//     let newListName = arr.filter(student => (student.name).startsWith("J") && student.sex == "F")
//     return newListName
// }
// console.log(filterName(grades));

// // Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp

// function top5(arr) {
//     let showTop5 = arr.sort((a, b) => b.grade - a.grade)
//     return showTop5.slice(0, 5)
// }
// console.log(top5(grades));


// // Bài 1 (1 điểm). Viết function truyền vào một mảng các số. Tìm ra số lớn thứ nhì trong mảng các số.

// // Hãy cẩn thận trường hợp trong mảng có nhiều số lớn nhất

// // // Ví dụ:
// // max2Numbers([2, 1, 3, 4]) => 3
// // max2Numbers([2, 1, 4, 3, 4]) => 3

// function max2(arr) {
//     let max2Number = arr.sort((a,b) => b-a)
//     for (let i = 0; i < max2Number.length; i++) {
//         if(max2Number[i] < max2Number[0]) {
//             return max2Number[i]
//         }
//     }
// }
// console.log(max2([6,5,1,3,8,8,9,9]));

// // Bài 2 (1 điểm). Viết function truyền vào mảng các chuỗi có độ dài bất kỳ. Kết quả trả về là 1 mảng các chuỗi có độ dài lớn nhất

// // // Ví dụ:
// // getStringHasMaxLength(['aba', 'aa', 'ad', 'c', 'vcd']) => ['aba', 'vcd'].

// function getString(arr) {
//     let newString = arr.sort((a,b) => b.length - a.length)
//     let maxString = []
//     for (let i = 0; i < newString.length; i++) {
//        if(newString[i].length == newString[0].length) {
//             maxString.push(newString[i])
//        }
//     }
//     return maxString
// }
// console.log(getString(['aba', 'aa', 'ad', 'c', 'vcd']));

// // Bài 3 (1 điểm). Viết function truyền vào một mảng. Lấy một phần tử ngẫu nhiên từ mảng đó

// // // Ví dụ:
// // getRandomElement([3, 7, 9, 11]) => 3
// // getRandomElement([3, 7, 9, 11]) => 9

// // Bài 4 (1 điểm). Viết function truyền vào 2 mảng số bất kỳ. Lấy ra một mảng chứa các phần tử xuất hiện trong cả hai mảng đó

// // // Ví dụ:
// // similarity([1, 2, 3], [1, 2, 4]) => [1,2]
// // similarity([1, 2, 3], [3, 4, 5]) => [3]

// // Bài 5 (2 điểm). Viết function truyền vào 2 tham số:

// // Tham số 1: Là 1 chuỗi thời gian (t) có dạng “giờ:phút:giây”
// // Tham số 2: Là 1 số x <= 1000
// // Kết quả trả về là 1 chuỗi biểu thị thời gian sau x giây kể từ thời điểm t.

// // // Ví dụ:
// // getTime("9:20:56", 7) => "9:21:3"

// // Gợi ý : Hãy quy đổi ra thời gian từ hh:mm:ss ra giây => tính toán => Quy đổi ngược lại từ giây ra hh:mm:ss

// // Bài 6 (2 điểm). Cho mảng users như sau:

// // users = [
// //     {
// //         name: "Bùi Công Sơn",
// //         age: 30,
// //         isStatus: true
// //     },
// //     {
// //         name: "Nguyễn Thu Hằng",
// //         age: 27,
// //         isStatus: false
// //     },
// //     {
// //         name: "Phạm Văn Dũng",
// //         age: 20,
// //         isStatus: false
// //     }
// // ]

// // // Viết function truyền vào 1 mảng các object user lấy ra những user có age > 25 và isStatus = true
// // // Viết function truyền vào 1 mảng các object user. Hãy sắp xếp mảng users có age tăng dần
// // // Bài 7 (2 điểm). Viết function truyền vào 1 mảng các chuỗi. Trả về Object hiển thị xem mỗi phần tử trong mảng xuất hiện bao nhiêu lần

// // // getCountElement(["one", "two", "three", "one", "one", "three"])

// // // Kết quả
// // // {
// // //     one: 3,
// // //     two : 1,
// // //     three : 2
// // // }

// // // Yêu cầu
// // // Học viên trình bày bài giải và giải thích cách làm bằng lời.
// // // Nếu học viên làm được bài mà không có giải thích được sẽ bị đánh giá là chưa hiểu bài và bị trừ đi 1 nửa số điểm của bài đó.
// // // Sau khi hết giờ học viên commit code lên github và nộp lại link làm bài trên hệ thống của Techmaster.
// // // Link nộp bài sau khi hết giờ (giữ nguyên điểm), nếu nộp trong ngày (buổi chiều hoặc tối) bị trừ 3 điểm, còn sang ngày khác mới nộp bị trừ 5 điểm.
// // // Ví dụ: Viết function tìm số lớn nhất trong mảng.

// // /*
// // B1: Ban đầu gán max bằng phần tử đầu tiên trong mảng

// // B2: Sử dụng vòng lặp qua mảng arr.
// // Nếu giá trị nào của vòng lặp > max, thì gán lại giá trị của max bằng giá trị đó.
// // Cứ tiếp tục công việc đến khi kết thúc vòng lặp

// // B3: Ra khỏi vòng lặp trả về kết quả của max
// // */

// // function findMaxNumber(arr) {
// //     let max = arr[0]
// //     for (let i = 1; i < arr.length; i++) {
// //         if (arr[i] > max) {
// //             max = arr[i]
// //         }
// //     }
// //     return max
// // }




// const array = ["1234", "abcd", "--abc", "---abc", "def", "--5678"]
// let newArr =[]
// for (let i = 0; i < array.length; i++) {
//     if(array.length > 0) {
//         let parent = []
//         if(!array[i].startsWith("--" && "---")) {
            
//             parent = {name: array[i]}
//         }
//     }
    
// }



