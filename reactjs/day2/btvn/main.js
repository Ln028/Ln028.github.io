// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

// Example 1:
// Input: x = 123
// Output: 321

// Example 2:
// Input: x = -123
// Output: -321

// Example 3:
// Input: x = 120
// Output: 21

// Constraints:
// -231 <= x <= 231 - 1

function reverse(numb) {
    let str = numb.toString()
    newStr = ""
    if (numb <= Math.pow(-2, 31) || numb >= Math.pow(2, 31) - 1) {
        return 0
    }
    else {
        for (let i = str.length - 1; i >= 0; i--) {
            newStr += str[i]
            if (newStr[newStr.length - 1] == "-") {
                let arr = newStr.split('')
                let char = arr[arr.length - 1]
                arr.unshift(char)
                arr.pop()
                return Number(arr.join(""))
            }
        }
        return Number(newStr)
    }

}
console.log(reverse(76980));



// Roman numerals are represented by seven different symbols: I, V, X, L, C, D and M.

// Symbol Value

// Symbol	Value
// I	    1
// V	    5
// X	    10
// L	    50
// C	    100
// D	    500
// M	    1000
// For example, 2 is written as II in Roman numeral, just two one’s added together. 12 is written as XII, which is simply X + II. The number 27 is written as XXVII, which is XX + V + II.

// Roman numerals are usually written largest to smallest from left to right. However, the numeral for four is not IIII. Instead, the number four is written as IV. Because the one is before the five we subtract it making four. The same principle applies to the number nine, which is written as IX. There are six instances where subtraction is used:

// I can be placed before V (5) and X (10) to make 4 and 9.
// X can be placed before L (50) and C (100) to make 40 and 90.
// C can be placed before D (500) and M (1000) to make 400 and 900.

// Given a roman numeral, convert it to an integer.

// Example 1:
// Input: s = “III”
// Output: 3
// Explanation: III = 3.

// Example 2:
// Input: s = “LVIII”
// Output: 58
// Explanation: L = 50, V= 5, III = 3.

// Example 3:
// Input: s = “MCMXCIV”
// Output: 1994
// Explanation: M = 1000, CM = 900, XC = 90 and IV = 4.

// Constraints:

// 1 <= s.length <= 15
// s contains only the characters (‘I’, ‘V’, ‘X’, ‘L’, ‘C’, ‘D’, ‘M’).
// It is guaranteed that s is a valid roman numeral in the range [1, 3999].

function value(character) {
    if (character == "I" || character == "i") {
        return 1
    }
    if (character == "V" || character == "v") {
        return 5
    }
    if (character == "X" || character == "x") {
        return 10
    }
    if (character == "L" || character == "l") {
        return 50
    }
    if (character == "C" || character == "c") {
        return 100
    }
    if (character == "D" || character == "d") {
        return 500
    }
    if (character == "M" || character == "m") {
        return 1000
    }
    return -1
}
function romanToInteger(str) {
    var sum = 0
    for (let i = 0; i < str.length; i++) {
        var sum1 = value(str[i])
        if (i + 1 < str.length) {
            var sum2 = value(str[i + 1])
            if (sum1 >= sum2) {
                sum += sum1
            }
            else {
                sum += sum2 - sum1
                i++
            }
        } else {
            sum += sum1
            i++
        }
    }
    return sum

}
console.log(romanToInteger("MCMXCIV"));







// Given an integer array nums, return all the triplets [nums[i], nums[j], nums[k]] such that i != j, i != k, and j != k, and nums[i] + nums[j] + nums[k] == 0.

// Notice that the solution set must not contain duplicate triplets.

// Example 1:

// Input: nums = [-1,0,1,2,-1,-4]
// Output: [[-1,-1,2],[-1,0,1]]

// Example 2:

// Input: nums = []
// Output: []

// Example 3:

// Input: nums = [0]
// Output: []

function sum(array, n, sum) {
    let threeNub = []
    array.sort(function (a, b) { return a - b })
    let flag = false;
    for (let i = 0; i < n - 2; i++) {
        if (i == 0 || array[i] > array[i - 1]) {
            let start = i + 1
            let end = n - 1
            let target = sum - array[i]
            while (start < end) {
                if (start > i + 1 && array[start] == array[start - 1]) {
                    start++;
                    continue;
                }
                if (end < n - 1 && array[end] == array[end + 1]) {
                    end--;
                    continue;
                }
                if (target == array[start] + array[end]) {
                    threeNub.push([array[i], array[start], array[end]])
                    flag = true;
                    start++;
                    end--;
                }
                else if (target > (array[start] + array[end])) {
                    start++;
                }
                else {
                    end--;
                }
            }
        }
    }
    if (flag == false) {
        threeNub = [];
    }
    return threeNub;
}

console.log(sum([-1, 0, 1, 2, -1, -4, 4, 0], 8, 0));

function threeSum(arr) {
    var result = []
    var newResult = []
    var found = false
    for (let i = 0; i < arr.length - 2; i++) {
        for (let j = i + 1; j < arr.length - 1; j++) {
            for (let k = j + 1; k < arr.length; k++) {
                if (arr[i] + arr[j] + arr[k] == 0) {
                    result.push([arr[i], arr[j], arr[k]])
                    newResult = []
                    for (let h = 0; h < result.length; h++) {
                        result[h].sort((a, b) => a - b)
                        if (JSON.stringify(result[0]) == JSON.stringify(result[h])) {
                            newResult[0] = result[0]
                        } else{
                            newResult.push(result[h])

                        }
                    }
                    found = true
                }
            }
        }
        if (found == false) {
            newResult = []
        }
    }
    // for (let h = 0; h < result.length; h++) {
    //         result[h].sort((a, b) => a - b)
    //         console.log(result);
    //         // newResult = []
    //         if (JSON.stringify(result[0]) == JSON.stringify(result[h])) {
    //             newResult.push[result[0]]
    //         } else{
    //             newResult.push(result[h])

    //         }
    //     }
    return newResult
}

console.log(threeSum([-1, 0, 1, 2, -1, -4, 4, 0]));

// function aloblo(result) {
//     let newalo = []
//     for (let i = 0; i < result.length; i++) {
//         // console.log(newalo);
//         if(!newalo.includes(result[i])) {
//             newalo.push(result[i])
//             console.log(newalo);
//         } 
//     }
//     // return newalo
// }
// console.log(aloblo([1,2,1,3,4,6,8,1,2]));