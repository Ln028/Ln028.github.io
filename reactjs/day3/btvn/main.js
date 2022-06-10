
// Given two non-negative integers num1 and num2 represented as strings, return the product of num1 and num2, also represented as a string.

// Note: You must not use any built-in BigInteger library or convert the inputs to integer directly.


var multiply = function(num1, num2) {
    var len1 = num1.length;
    var len2 = num2.length;
    var res = Array(len1 + len2).fill(0);
    var carry = 0;
    var val = 0;
    var index = 0;
  
    for (var i = len1 - 1; i >= 0; i--) {
      carry = 0;
      for (var j = len2 - 1; j >= 0; j--) {
        index = len1 + len2 - 2 - i - j;
        val= (num1[i] * num2[j]) + carry + res[index];
        carry = Math.floor(val / 10);
        res[index] = val % 10;
      }
      if (carry) res[index + 1] = carry;
    }
  
    while (res.length > 1 && res[res.length - 1] === 0) res.pop();
  
    return res.reverse().join('');
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

