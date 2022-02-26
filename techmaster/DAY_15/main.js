function array(arr) {
    let newArr = []
    arr.forEach(function(value, index) {
        if(index > 3) {
            newArr.push(value)
        }
    });
    return newArr
}
console.log(array([1,2,3,4,5,6,7,8,9]));


function array2(arr) {
    let sum = 0;
    for (const value of arr) {
        if(value % 2 == 0) {
            sum += value
        }
    }
    return sum

}
console.log(array2([1,2,3,4,5,6,7,8,9]));

//Chua bai tap ve nha:

// Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.
// sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]
let sortStudents = (name) => {
    let sortName = name.sort(); // Sắp xếp tăng dần
    return sortName.reverse(); // Đảo ngược mảng
};
console.log(sortStudents(["Nam", "Hoa", "Tuấn", "Đức"]));

// localeCompare
let sortStudents_02 = (name) => {
    // Sắp xếp giảm dần
    return name.sort((a, b) => b.localeCompare(a));
};
console.log(sortStudents_02(["Nam", "Hoa", "Tuấn", "Đức"]));


// Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng
// shuffle([1,2,3,4,5]) => [2,3,4,1,5]
// shuffle([1,2,3,4,5]) => [4,2,3,5,1]
let shuffle = (arr) => {
    for (let i = arr.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));

        // Sử dụng destructuring es6
        [arr[i], arr[j]] = [arr[j], arr[i]]

        // Sử dụng biến tạm để đổi vị trí
        // let temp = arr[i];
        // arr[i] = arr[j];
        // arr[j] = temp
    }
    return arr;
};
console.log(shuffle([1, 2, 3, 4, 5]));

// Cách số 2
let shuffle_02 = arr => arr.sort(() => Math.random() - 0.5)
console.log(shuffle_02([1, 2, 3, 4, 5]));
// Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng
// symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]
// let symmetricDifference = (arr1, arr2) => {
//     arr1.sort();
//     arr2.sort();
//     let new_arr = [];
//     for (let i = 0; i < arr1.length; i++) {
//         if (arr1[i] != arr2[i]) {
//             new_arr.push(arr1[i], arr2[i]);
//         }
//     }
//     return new_arr;
// }
// console.log(symmetricDifference([1, 2, 3, 1], [1, 2, 4]))

function array(arr1, arr2) {
    // Lọc ra các giá trị của arr1 không nằm trong arr2
    let newArr1 = arr1.filter(value => !arr2.includes(value))

    // Lọc ra các giá trị của arr2 không nằm trong arr1
    let newArr2 = arr2.filter(value => !arr1.includes(value))
    return newArr1.concat(newArr2)
}
console.log(array([1, 2, 3, 4, 5], [3, 4, 1, 2, 8, 9]));

function symmetricDifference(arr1, arr2) {
    // Nối 2 mảng lại với nhau
    let tmp = arr1.concat(arr2);

    // Sắp xếp tăng dần
    tmp.sort((a, b) => { return a - b; });

    let res = [];
    // [1, 1, 2, 2, 3, 3, 4, 4, 5, 8, 9]
    for (let i = 0; i < tmp.length; i++) {
        if (tmp[i - 1] != tmp[i] && tmp[i + 1] != tmp[i]) {
            res.push(tmp[i]);
        }
    }
    return res;
}
console.log(symmetricDifference([1, 2, 3, 4, 5], [3, 4, 1, 2, 8, 9]));

// Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng
// union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
// union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]
let union = (arr1, arr2) => {
    let arr = arr1.concat(arr2)
    return Array.from(new Set(arr)).sort();
}

console.log(union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))

let union_02 = (arr1, arr2) => {
    // Nối 2 mảng lại với nhau
    // let arr = arr1.concat(arr2)
    let arr = [...arr1, ...arr2];

    // Tạo mảng mới để chứa kết quả
    let result = [];

    for (let i = 0; i < arr.length; i++) {
        // Kiểm tra từng phần tử của vòng lặp
        // Nêu phần tử đó nằm trong result -> bỏ qua
        // Nếu phần tử đó không nằm trong result -> push vào
        if (result.includes(arr[i]) == false) {
            result.push(arr[i])
        }
    }

    return result
}
console.log(union_02([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]))