// Bài 1. Viết function truyền vào 1 chuỗi bất kỳ, hãy sao chép chuỗi đó lên 10 lần.

// Ví dụ : repeatString(“a”) => Kết quả trả về là “aaaaaaaaaa”

function string() {
    let name = "";
        for (let i = 1; i < 11; i++) {
            name = name + "ha"
        }
    return name
}
console.log(string());

//Bài 2. Viết function truyền vào 1 chuỗi bất kỳ, hãy viết hàm có tác dụng sao chép đó chuỗi lên 10 lần, ngăn cách nhau bởi dấu gạch ngang.

//Ví dụ: repeatString(“a”) => Kết quả trả về là “a-a-a-a-a-a-a-a-a-a”

function text() {
    let content = "";
    for (let i = 1; i < 11; i++) {
        if(i == 1) {
            content = "ha"
        } else {
            content = content + "-" + "ha"
        }
    }
    return content
}
console.log(text());

//Bài 3. Viết function truyền vào 1 chuỗi bất kỳ và 1 số nguyên dương n > 1, hãy viết hàm có tác dụng sao chép đó chuỗi lên n lần, ngăn cách nhau bởi dấu gạch ngang.

//Ví dụ: repeatString(‘a’, 5) => Kết quả trả về là ‘a-a-a-a-a’

function repeat(n) {
    let string = "hi"
    for (let i = 1; i <= n; i++) {
        if(i ==1) {
            string = "hi"
        } else {
            string = "hi" + "-" + string
        }
    }
    return string
}
console.log(repeat(9));

//Bài 4. Tính tổng các số chia hết cho 5 từ 0 -> 100

function tinhTong() {
    let sum = 0
    for (let n = 0; n <= 100; n++) {
        if(n % 5 == 0) {
            sum = sum + n
        }
    }
    return sum
}
console.log(tinhTong());

//Bài 5: Viết hàm tính thể tích hình cầu, với tham số truyền vào là bán kính của hình cầu.

function hinhCau(r) {
    let theTich = 4/3 * Math.PI * Math.pow(r, 3)
    return theTich
}
console.log(hinhCau(5));

//Bài 6: Viết hàm truyền vào 2 số nguyên, tính tổng tất cả các số nguyên nằm giữa chúng. Ví dụ với tham số 3 và 8 ta có kết quả là 22 (bằng 4 + 5 + 6 + 7).

// Cách 1:
function allSum(a, b) {
    let number = 0
    if(a <= b) {
        for (let i = a+1; i < b; i++) {
            number = number + i
            
        }
    } else if(a>b) {
        for (let i = b+1; i < a; i++) {
            number = number + i          
        }
    }
    return number
}
console.log(allSum(10, 15));
console.log(allSum(15, 10));

// Cách 2:
function x(a, b) {
    if (a > b) {
        let c = a;
        a = b;
        b = c;
    }
    let result = 0;
    for (let i = a + 1; i < b; i++) {
        result = result + i        
    }
    return result;
}
console.log(x(10, 15));
console.log(x(15, 10));

//Bài 7: Cho 1 số, kiểm tra xem số đó có phải là số nguyên tố hay không, kết quả trả về true hoặc false.

function soNguyenTo(number) {

    if (number < 2) {
        return false;
    }

    let output = true;
    for (let i = 2; i < number; i++) {
        if(number % i == 0) {
            output = false;
            break
        }
    }
    return output;
}
console.log(soNguyenTo(4));

//Bài 8: Cho 1 số nguyên dương bất kỳ. Tính tổng tất cả các số nguyên tố mà nhỏ hơn hoặc bằng tham số truyền vào.

function cacSnt(number) {
    let tongCacSnt = 0
    if (number < 2) {
        return 0
    }
    for (let i = 2; i <= number; i++) {
        let test = true
        for (let k = 2; k < i; k++) {
            if (i % k == 0) {
                test = false
                break
            }
        };
        if (test == true) {
            tongCacSnt = tongCacSnt + i
        }
    }
    return tongCacSnt
}
console.log(cacSnt(11));

//Bài 9: Cho 1 số nguyên dương, viết hàm tính tổng tất cả các ước số của số đó.

function tongSnt(number) {
    let flag = 0
    for (let i = 0; i <= number / 2; i++) {
        if(number % i == 0) {
        flag = flag + i;
        }
    }
    
    return flag;
}
console.log(tongSnt(30))