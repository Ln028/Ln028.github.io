// Bài 1:

// Viết function truyền vào 1 số bất kỳ và thực hiện kiểm tra

// Nếu số đó chia hết cho 3 và 5 thì in ra “FizzBuzz”
// Nếu số đó chia hêt cho 3 thì in ra “Fizz”
// Nếu số đó chia hêt cho 5 thì in ra “Buzz”

function checkNumber(number) {
    if(number % 3 === 0 && number % 5 === 0) {
        console.log("FizzBuzz")
    } else if(number % 3 === 0) {
        console.log("Fizz")
    } else if (number % 5 === 0) {
        console.log("Buzz")
    }
}
checkNumber(50)

// Bài 2:

// Viết function giải phương trình bậc nhất (ax + b = 0)

// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả

function giaiPT1(a, b) {
    if(a === 0 && b === 0) {
        console.log("Phương trình vô số nghiệm")
    } else if(a != 0 && b === 0) {
        console.log("Phương trình có nghiệm x = 0")
    } else if(a === 0 && b != 0) {

        console.log("Phương trình vô nghiệm")
    } else {
        console.log(`Phương trình có nghiệm x= ${-b / a}`)
    }
}

giaiPT1(20, 5)

// Bài 3:

// Viết function giải phương trình bậc 2 (ax^2 + bx + c = 0)

// Cần kiểm tra trường hợp a = 0 và a != 0
// In ra kết quả

function giaiPT2(a, b, c) {
    delta = b * b - 4 * a * c
    if(delta < 0) {
        console.log("Phương trình vô nghiệm")
    } else if(delta === 0) {
        console.log(`Phương trình có nghiệm kép  x1 = x2 = ${-b/(2*a)}`)
    } else {
        console.log(`Phương trình có nghiêm sau: x1 = ${(-b + Math.sqrt(delta)) / (2 * a)}; x2 = ${(-b - Math.sqrt(delta)) / (2 * a)}`)
    }
}
giaiPT2(5, 2, -30)

// Bài 4:

// Viết function truyền vào 1 năm bất kỳ. Kiểm tra xem năm đó có là năm nhuận hay không?

// Nếu có là năm nhuận in ra kết quả “Là năm nhuận”
// Nếu không in ra kết quả “Không la năm nhuận”
// Cách tính năm nhuận như thế nào thì lên mạng tra

function namNhuan(year) {
    if(year % 4 === 0 && year % 100 || year % 400 === 0) {
        console.log(`${year} là năm nhuận`)
    } else {
        console.log(`${year} không là năm nhuận`)
    }
}
namNhuan(2002)

// Bài 5:

// Viết function truyền vào 2 giá trị, đại diện cho cân nặng và chiều cao. Tính chỉ số BMI tương ứng

// Sử dụng return

function chiSoBMI(weight, height) {
    let BMI = weight / (height**2)
    
    if(BMI < 18.5){
        console.log("Thiếu cân, thiếu năng lượng trường diễn")
    } else if(BMI >= 18.5 && BMI <= 24.99) {
        console.log("Bình thường")
    } else if(BMI >= 25 && BMI <= 29.99) {
        console.log("Thừa cân")
    } else {
        console.log("Béo phì")
    }
    
    return BMI 
}
console.log(chiSoBMI(47, 1.56))

// Bài 6:

// Viết function truyền vào giá trị độ C. Tính giá trị độ F tương ứng

// Sử dụng return


function tinhDoF(a) {
    let doF = a * 1.8 + 32
    return doF 
}
console.log(tinhDoF(37))