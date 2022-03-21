//Bài 1: Viết function truyền vào 1 số nguyên dường. Tính giai thừa của số đó
//Ví dụ: calculateFactorial(5) = 5 * 4 * 3 * 2 * 1 = 120

function giaiThua(number) {

    if (number == 0) {
        return 1
    }
    let tinhGiaiThua = number
    for (let i = 1; i < number; i++) {
        tinhGiaiThua = tinhGiaiThua * i
    }
    return tinhGiaiThua
}
console.log(giaiThua(5));

//Bài 2: Viết function truyền vào 1 chuỗi. In ra chuỗi đảo ngược của chuỗi đó
//Ví dụ: reverseString(‘hello’) => olleh

function reverse(string) {
    let reverseString = ""
    for (let i = string.length - 1; i >= 0; i--) {
        reverseString = reverseString + string[i]

    }
    return reverseString
}
console.log(reverse("Hello everyone"));

//Bài 3: Viết function truyền vào mã quốc gia. Trả về message có ý nghĩa là “Xin chào”, tương ứng với mã quốc gia được truyền vào
//Ví dụ: translate(‘VN’) => “Xin chào”
//translate(‘EN’) => “Hello”




//Bài 4: Cho function truyền vào 1 chuỗi dài hơn 15 ký tự. Viết 1 function cắt chuỗi, lấy ra 10 ký tự đầu tiên và thêm vào dấu “…” ở cuối chuỗi.
//Ví dụ : subString(“xinchaocacbandenvoiTechmaster”) => “xinchaocac…”

function string(content) {
    let subString = ""
    for (let i = 0; i < 10; i++) {
        if (i < 10) {
            subString = subString + content[i]
        } 
    }
    return subString + "..."
}
console.log(string("xinchaocacbanhomnaylafngaythuhaiminhbicovid"));

//

function write() {
    for (let i = 1; i <= 100; i++) {
        document.write(i)
    }
}
console.log(write());
