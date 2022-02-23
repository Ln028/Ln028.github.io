//Bài 1. Viết 1 function kiểm tra 1 chuỗi có nằm trong chuỗi còn lại hay không. Nếu có trả về true, nếu không trả về false. Đầu vào có 2 tham số : Tham số 1 là chuỗi ban đầu, tham số 2 là chuỗi cần kiểm tra

function stringExists(text1, text2) {
    return text1.includes(text2)
}
console.log(stringExists("To day is the rainy day", "tomorrow"));


//Bài 2. Viết function truyền vào 1 chuỗi, hãy rút ngắn chuỗi bằng cách cắt ra 8 ký tự đầu của 1 chuỗi và thêm dấu ba chấm ở cuối chuỗi. Nếu chuỗi có độ dài <= 8 ký tự thì giữ nguyên

function truncateString(string) {
    if (string.length < 8) {
        return string
    }
    return string.slice(0, 8) + "..."
}
console.log(truncateString("It is very cold today"));


//Bài 3. Viết function truyền vào 1 chuỗi, kiểm tra xem chuỗi đó có phải chuỗi đối xứng hay không (chuỗi đối xứng là chuỗi đọc xuôi hay ngược đều như nhau, không tính khoảng trắng, không phân biệt hoa thường), kết quả trả về true hoặc false.

function symmetricalString(input) {
    let string = input.toLowerCase().replace(/" "/g, "")
    return string == string.split("").reverse().join("");
}
console.log(symmetricalString("Race car"));


//Bài 4: Viết function truyền vào 1 số nguyên, hãy sắp xếp lại các chữ số trong số nguyên đó sao cho ra 1 số nhỏ nhất có thể (không tính số 0 đầu tiên).

function soNguyen(number) {
    let numberChange = number.toString()
    let newNumber = numberChange.split(``).sort()
        for (let i = 0; i < newNumber.length; i++) {
            if(newNumber[i] != 0) {
                newNumber[0] = newNumber[i]
                newNumber[i] = 0
                break

            }
        }
        return Number(newNumber.join(``))
}
console.log(soNguyen(120040986));


//Bài 5: Viết function truyền vào 1 chuỗi bất kỳ gồm nhiều từ. Hãy chuyển chuỗi đó thành dạng snake_case và viết thường

function toSnakeCase(str) {
    return str.toLowerCase().replace(/ /g, `_`)
}
console.log(toSnakeCase("It is so cold today"))
