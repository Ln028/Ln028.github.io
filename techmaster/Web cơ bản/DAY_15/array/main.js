//1.Math(): Duyệt qua các phần tử của mảng và thực hiện các thao tác trên các phần tử này. Trả về mảng mới có độ dài bằng mảng ban đầu
// Viết hàm cho phép truyền vào 1 mảng các số
// kết quả trả về là 1 mảng mới với các số là số dư tương ứng khi chia mảng cũ cho 2
// Vd : modulo2([4,2,5,6,2,7]) => [0,0,1,0,0,1]

function modulo2(arr) {
    // const result = arr.map(e => e % 2)
    // return result

    return arr.map((e) => e % 2);
}

console.log(modulo2([4, 2, 5, 6, 2, 7]));

//2.Filter(): Lặp qua các phần tử của mảng và lọc ra các phần tử thỏa mãn điều kiện nào đó. Trả về mảng mới
//filter = for + if

// Ví dụ : Tìm các số lẻ trong mảng
// Cách truyền thống
function oddNumbersNotFilter(arr) {
    const result = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 2 == 1) {
            result.push(arr[i]);
        }
    }
    return result;
}

console.log(oddNumbersNotFilter([4, 2, 5, 6, 2, 7]));

// Sử dụng filter
// filter = for + if
function oddNumbers(arr) {
    // const result = arr.filter(e => e % 2 == 1)
    // return result

    return arr.filter((e) => e % 2 == 1);
}

console.log(oddNumbers([4, 2, 5, 6, 2, 7]));


//3.Find(): Lặp qua các phần tử của mảng và tìm ra phần tử đầu tiên thỏa mãn điều kiện
// Ví dụ: Tìm giá trị của phần tử đầu tiên lớn hơn 5

function getNumberGreater5(arr) {
    return arr.find((e) => e > 5);
}

console.log(getNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

//4.FindIndex(): Giống như find(), nhưng trả về chỉ số của phần tử thỏa mãn điều kiện
//// Ví dụ: Tìm chỉ số của phần tử đầu tiên lớn hơn 5

function getIndexOfNumberGreater5(arr) {
    return arr.findIndex((e) => e > 5);
}

console.log(getIndexOfNumberGreater5([1, 2, 3, 4, 5, 6, 7]));

//5.Some(): Lặp qua các phần tử của mảng để kiểm tra điều kiện. Nếu có 1 phần tử thỏa mãn điều kiện => true. Nếu không có phần tử nào thỏa mãn điều kiện => false

// Kiểm tra xem có giá trị nào trong mảng có lớn hơn 1 không?

function getNumberGreater1(arr) {
    return arr.some((e) => e > 1);
}

console.log(getNumberGreater1([1, -2, -3, -4])); // false

//6.every(): Lặp qua các phần tử của mảng để kiểm tra điều kiện. Nếu có 1 phần tử không thỏa mãn điều kiện => false. Nếu tất cả phần tử thỏa mãn điều kiện => true

//// Kiểm tra xem tất cả giá trị trong mảng có lớn hơn 10 không?

function getNumberGreater10(arr) {
    return arr.every((e) => e > 10);
}
console.log(getNumberGreater10([11, 12, 13, 14])); // true
console.log(getNumberGreater10([11, 12, 13, 5])); // false


