//Bài 1. Viết function vào 1 mảng tên học viên, sắp xếp lại mảng này theo chiều ngược của bảng chữ cái.

//sortStudents([‘Nam’, ‘Hoa’, ‘Tuấn’]) => [‘Tuấn’, ‘Nam’, ‘Hoa’]

function sortStudents(arr) {
    return arr.sort((a,b) => b.localeCompare(a))
}
console.log(sortStudents(['Nam', 'Hoa', 'Tuấn']));

//Bài 2: Viết function đổi chỗ ngẫu nhiên vị trí của các phần tử trong mảng

//shuffle([1,2,3,4,5]) => [2,3,4,1,5]
//shuffle([1,2,3,4,5]) => [4,2,3,5,1]

function array(arr) {
    for (let i = arr.length-1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i+1))
        let ele = arr[i]
        arr[i] = arr[j]
        arr[j] = ele
    }
    return arr
    
}
console.log(array([1,2,3,4,5]));

//Bài 3: Viết function để lấy sự phần tử không xuất hiện ở cả 2 mảng

//symmetricDifference([1, 2, 3], [1, 2, 4]) => [3,4]

function arrayDif(arr1, arr2) {
   return (arr1.filter(value => !arr2.includes(value)).concat(arr2.filter(value => !arr1.includes(value))))
}
console.log(arrayDif([1, 2, 3], [1, 2, 4, 5, 6]));

//Bài 4: Viết function lấy tất cả các phần tử không trùng nhau trong cả 2 mảng

//union([1, 2, 3, 1], [4, 3, 2, 4]) => [1,2,3,4]
//union([1, 2, 3, 2, 3], [1, 2, 3, 1, 2]) => [1,2,3]

function unicon(arr1, arr2) {
    return arr1.filter(value => arr2.includes(value)).concat(arr1.filter(value => !arr2.includes(value))).concat(arr2.filter(value => !arr1.includes(value)))
 }
 console.log(unicon([1, 2, 3], [1, 2, 3, 5, 6]));