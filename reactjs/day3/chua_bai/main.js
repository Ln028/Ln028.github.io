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
}
function romanToInteger(str) {
    var sum = 0
    if(str.length < 1 || str.length > 15) {
        return false
    }
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
    if(sum < 1 || sum > 3999) {
        return false
    }
    return sum

}
console.log(romanToInteger("MCMXC"));



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