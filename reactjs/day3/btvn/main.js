
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.


var multiply = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var result = Array(len1 + len2).fill(0);
    for (var j = len2 - 1; j >= 0; j--) {
      for (var i = len1 - 1; i >= 0; i--) {
        const product = num1[i] * num2[j]
        const index = len1 + len2 - 1 - [len2 - 1 - j + len1 - 1 - i];
        result[index] += product
        if(result[index] > 9) {
            result[index - 1] += Math.floor(result[index] / 10)
            result[index] = result[index] % 10
        }
      }
    }
    while (result[0] === 0) result.shift();
  
    return result.length === 0 ? 0 : result.join('');
  };


// Given an array of non-negative integers nums, you are initially positioned at the first index of the array.

// Each element in the array represents your maximum jump length at that position.

// Your goal is to reach the last index in the minimum number of jumps.

// You can assume that you can always reach the last index.

function multiply(a, b) {
    const product = Array(a.length+b.length).fill(0);
    for (let i = a.length; i--; null) {
        let carry = 0;
        for (let j = b.length; j--; null) {
            product[1+i+j] += carry + a[i]*b[j];
            carry = Math.floor(product[1+i+j] / 10);
            product[1+i+j] = product[1+i+j] % 10;
        }
        product[i] += carry;
    }
    return product.join("").replace(/^0*(\d)/, "$1");
}

