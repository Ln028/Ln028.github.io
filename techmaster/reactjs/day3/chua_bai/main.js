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
/**
 * @param {number[]} nums
 * @return {number[][]}
 */
 function threeSum(nums) {
    // If less than 3 elements then we can't have 3 numbers that add to 0
    if(nums.length < 3) return []
    const output = []

    // Sort the array in descending order. Must add order function to sort. If not we will not get the right order. Sort converts everything to a string and sorts the array by charCode. Adding the order function to sort guarantees we will get the array in the proper descending order.
    nums.sort((a,b) => a - b)

    for(let i = 0; i < nums.length - 2;i++) {
        // we don't want repeats, so skip numbers we've already seen
        if (i > 0 && nums[i] === nums[i - 1]) continue

        let left = i+1
        let right = nums.length-1

        // Current number at i will be added to the current sum. We will move a left and a right pointer in the subarray of elements to the right of i to try and get a sum that will equal 0
        while (left < right) {
            // Get the current sum with with number at i and numbers at the left and right pointers
            const sum = nums[i] + nums[right] + nums[left]
            // If we get 0 then we add all the numbers to output and move our left and right pointers to look for more numbers that will add to 0 with the current number at i
            if(sum===0) {
                output.push([nums[i], nums[left], nums[right]])
                // We will move the pointers until we find a number that is not equal to each pointers current number
                while(nums[left]===nums[left+1]) left++
                while(nums[right]===nums[right+1]) right--
                left++
                right--
            } else if (sum > 0) {
                // If the sum is greater than 0 that means we need smaller numbers to get 0 so we move the right pointer to the left
               right--
            } else {
                // If the sum is less than 0 that means we need higher numbers to get 0 so we move the left pointer to the right
                left++
            }
        }
    }

    return output
};

var arr = [1,2,3]
var [a,b,c] = arr
var arr = [a, ...rest]
console.log(a);