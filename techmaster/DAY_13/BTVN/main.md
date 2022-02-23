## String Method
### 1. String.length

Chúng ta sử dụng thuộc tính length để đếm số ký tự trong chuỗi javascript với các ký tự thông thường.

Kết quả trả về là số mã ký tự được sử dụng để biểu diễn chuỗi str được chỉ định, và thông thường thì kết quả này sẽ bằng với số ký tự trong chuỗi JavaScript.

Cú pháp: `string.length`

```javascript
let str = "i am Lan";
console.log(str.length); //8
```

### 2. String.split()

Phương thức split() của String chia một chuỗi thành một mảng các chuỗi con.

Cú pháp: `split([separator], [limit])`

Trong đó:

Tham số separator là dấu phân tách, xác định vị trí mỗi lần phân tách sẽ xảy ra trong chuỗi ban đầu. Nếu bạn bỏ quên dấu phân tách, thì split() không thể tìm thấy dấu phân tách trong chuỗi. Thế nên, trong trường hợp này, split() sẽ trả về toàn bộ chuỗi.

Tham số limit là giới hạn. Nó chỉ định số chuỗi con được phân tách. Phương thức split() sẽ dừng khi số lượng chuỗi con đạt đến giới hạn. Nếu limit = 0, hàm split() trả về một mảng trống. Nếu limit = 1, hàm split() trả về một mảng có chứa chuỗi.

Ví dụ:

```javascript
let str = "Hello guy";
console.log(str.split());//[ 'Hello guy' ]
console.log(str.split(''));//["H", "e", "l", "l", "o", "g", "u", "y"]
console.log(str.split(' '));//[ 'Hello', 'guy' ]
console.log(str.split(' ', 1));//[ 'Hello' ]
```

### 3. String.toUpperCase() và String.toLowerCase()
**String.toUpperCase()**

Phương thức toUpperCase này chuyển toàn bộ chuỗi chữ thường thành chữ viết in hoa.

```javascript
let str = 'Hello';
console.log(str.toUpperCase()); //HELLO
```

**String.toLowerCase()**

Phương thức toLowerCase ngược lại toUpperCase. Phương thức này chuyển toàn bộ chuỗi thành chữ thường.

```javascript
let str = 'Hello';
console.log(str.toUpperCase()); //hello
```

### 4. String.includes()

Để kiểm tra xem một chuỗi chứa các ký tự được chỉ định ta dùng Phương thức includes(). Nó sẽ trả về giá trị boolean (true hoặc false). Có thể thêm vị trí chỉ định trong chuỗi để bắt đầu tìm kiếm.

Cú pháp:
`string.includes(search-string, optional-position)`

Trong đó:

Tham số search-string là chuỗi bạn đang tìm kiếm trong string.

Tham số optional-position là một số tùy chọn cho vị trí tìm kiếm bắt đầu trong string. Nếu optional-position bị bỏ qua thì giá trị mặc định là 0.

Nếu search-string được tìm thấy thì nó sẽ trả về true. Ngược lại, nêu không được tìm thấy thì nó sẽ trả về false.

Ví dụ:

```javascript
let str = 'My name is Lan';
console.log(str.includes('Lan')); //true
//Chú ý: includes Phân biệt hoa thường!
console.log(str.includes('lan')); //false
//Thông thường sẽ tốt hơn khi chuyển đổi chuỗi thành chuỗi viết thường 
//Sau đó mới bắt đầu kiểm tra chuỗi bằng phương thức includes.
let newStr = str.toLowerCase();
console.log(newStr.includes('lan')); //true
//Thêm vị trí chỉ định bắt đầu tìm kiếm
console.log(str.includes('i', 0)); //true
console.log(str.includes('M', 1)); //false
```

### 5. String.indexOf() và String.lastIndexOf

**String.indexOf()**
Phương thức indexOf() được dùng để trả về vị trí xuất hiện lần đầu tiên của một giá trị được tìm thấy trong chuỗi.

Phương thức string.indexOf() sẽ phân biệt chữ hoa chữ thường.

Cú pháp:
`string.indexOf(search, start)`

Trong đó:

search: là một ký tự hoặc một chuỗi ký tự mà bạn muốn tìm vị trí xuất hiện lần đầu tiên của nó trong chuỗi gốc.

start: là tham số có thể có hoặc không, nó dùng để chỉ định vị trí bắt đầu tìm kiếm trong chuỗi gốc.

Giá trị trả về của phương thức indexOf() sẽ là một số.

*Lưu ý: Nó sẽ trả về giá trị -1 nếu ký tự hoặc chuỗi ký tự do bạn chỉ định không được tìm thấy trong chuỗi gốc.*

Ví dụ:
```javascript
let string = "Xin chào các bạn"
let search = string.indexOf("c", 0)
console.log(search) //5
```

**String.lastIndexOf**

Phương thức string.lastIndexOf() sẽ kiểm tra và tra về vị trí xuất hiện cuối cùng trong chuỗi gốc của chuỗi con do người dùng cung cấp. Nếu không tìm thấy chuỗi con trong chuỗi gốc, phương thức sẽ trả về -1.

Phương thức string.lastIndexOf() sẽ phân biệt chữ hoa chữ thường.

Cú pháp: `string.lastIndexOf(searchvalue, end)`

Trong đó:

searchvalue là chuỗi con cần tìm kiếm vị trí trong chuỗi string.

end là vị trí kết thúc tìm kiếm trong chuỗi string. phương thức sẽ chỉ tìm kiếm đến vị trị end trong chuỗi string và dừng lại.

Ví dụ:

```javascript
let string = "Xin chào các bạn"
let search = string.indexOf("c", 0)
console.log(search) //9
```

### 6. String.repeat()

Phương thức .repeat() là phương thức trả về chuỗi được lặp lại một số lần cụ thể theo tham số truyền vào.

Cú pháp:
`string.repeat( count)`

Trong đó: count là số lần lặp chuỗi string.

Ví dụ:
```javascript
let string = "Hello"
let repeatString = string.repeat(5)
console.log(repeatString) // HelloHelloHelloHelloHello
```

### 7. String.replace()
Phương thức .replace() là phương thức trả về một string mới với các giá trị đã được thay thế của string ban đầu.

Cú pháp: `string.replace(searchvalue, newvalue)`

Trong đó:

searchvalue: giá trị sẽ được tìm kiếm trong chuỗi string.

newvalue: là giá trị sẽ được thay thế cho searchvalue trong chuỗi mới mà phương thức trả về.

Ví dụ:
```javascript
const str = "Hello world. Hello javascript";
// Chỉ thay thế từ đầu tiên
console.log(str.replace("Hello", "Hi")); /* Hi world. Hello javascript */

// Thay thế tất cả bằng cách sử dụng regex
console.log(str.replace(/Hello/g, "Hi")); /* Hi world. Hi javascript */
```

### 8. String.slice()
Phương thức string.slice() có chức năng trích xuất một phần của chuỗi. Phương thức sẽ trả về một chuỗi mới chính là phần được trích dẫn từ chuỗi gốc ban đầu.

Cú pháp: `string.slice(start, end)`

Trong đó:

start: là vị trí bắt đầu trích xuất.

end: là vị trí kết thúc trích xuất, nội dung được trích xuất sẽ không bao gồm kí tự ở vị trí end. Nếu không cung cấp tham số end, phương thức sẽ trích xuất từ vị trí start đến hết chuỗi.

**Chú ý: Chỉ số âm sẽ đếm ngược từ cuối chuỗi.**

Ví dụ:
```javascript
const string = "To day is a sunny day";
console.log(string.slice(1));//o day is a sunny day
console.log(string.slice(0,11));//To day is a
console.log(string.slice(-3));//day
```

### 9. String.match()

Phương thức string.match() sẽ tìm kiếm các chuỗi con phù hợp với biểu thức chính quy được cung cấp. Phương thức sẽ trả về các chuỗi tìm được dưới dạng một mảng.

Cú pháp: `string.match(regexp)`

Trong đó: regexp là biểu thức chính quy đại diện cho chuỗi cần tìm.

**Lưu ý:**
- Nếu biểu thức chính quy không bao gồm modifier g ( ví dụ /img/g) thì phương thức string.match() sẽ chỉ trả về kết quả đầu tiên tìm được.
- Để tìm kiếm mà không phần biệt chữ hoa thường sử dụng modifier i( ví dụ /ain/i).
- Phương thức sẽ trả về NULL nếu không tìm thấy kết quả phù hợp.


```javascript
const str = "The rain in SPAIN stays mainly in the plain";
console.log(str.match(/ain/g)); /* ["ain", "ain", "ain"] */
console.log(str.match(/ain/gi)); /* ["ain", "AIN", "ain", "ain"] */
console.log(str.match(/ainnn/g)); /* null */

const str2 = "Will 2022 be better than 2021?";
console.log(str2.match(/[0-9]/g)); /* ["2", "0", "2", "2", "2", "0", "2", "1"] */
```

### 10.String.trim()

Phương thức string.trim() sẽ loại bỏ các khoảng trắng ở đầu và cuối chuỗi. Phương thức sẽ trả về chuỗi với các khoảng trắng ở đầu và cuối chuỗi đã bị loại bỏ.

Cú pháp: `string.trim()`

Phương thức không có tham số truyền vào.

Ví dụ: 
```javascript
let string = "   Today is a beautiful day     "
let newString = string.trim()
console.log(newString) //"Today is a beautiful day"
```

### 11. String.concat()

Phương thức string.concat() có chức năng nối hai hay nhiều chuỗi lại với nhau thành một chuỗi.

Cú pháp: `string.concat(string1, string2, ..., stringX)`

Trong đó: string1, string2, ..., stringX là các chuỗi con sẽ được nối với chuỗi string.


```javascript
let str = "Hello. ";
let str1 = "My name is Lan.";
let str2 = " I'm 28 years old";
let content = str.concat(str1, str2); // Hello. My name is Lan.
```

### 12. String.charAt()

Phương thức string.charAt() có chức năng tìm kiếm kí tự ở một vị trí nào đó trong chuỗi, vị trí tìm kiếm đó sẽ do người dùng xác định.

*Lưu ý: vị trí của một chuỗi sẽ bắt đầu từ vị trí 0, vị trí thứ 2 có chỉ số là 1 .... vị trí cuối cùng là string.length -1.*
Cú pháp: `string.charAt(index)`

Trong đó: index là vị trí muốn tìm kiếm trong chuỗi.

Ví dụ:

```javascript
let str1 = "Hello"
let str2 = str1.charAt(0)//"H"
let str3 = str1.charAt(4) //"o"
```

### 13. String.startsWith() và String.endsWith

**String.startsWith()**

Phương thức string.startsWith() sẽ kiểm tra xem chuỗi có được bắt đầu bằng một chuỗi con được cung cấp hay không.

Phương thức sẽ trả về True nếu chuỗi được bắt đầu bằng chuỗi con được cung cấp, ngược lại phương thức sẽ trả về False.
*Lưu ý: phương thức string.startsWith() có phân biệt chữ hoa chữ thường.*

Cú pháp: `string.startsWith(searchvalue, start)`

Trong đó:

searchvalue là chuỗi con. Phương thức sẽ kiểm tra string có bắt đầu bằng searchvalue hay không.

start là vị trí trong chuỗi string mà phương thức bắt đầu kiếm tra. Nếu không truyền thì phương thức sẽ kiểm tra từ đầu chuỗi string.

Ví dụ:
```javascript
let str = 'Never tell me the odds!';
console.log(str.startsWith('Never')); //true
console.log(str.startsWith('Never', 1)); //false
console.log(str.startsWith('never', 0)); //false
```

**String.endsWith()**

Phương thức string.endsWith() có chức năng xác định liệu một chuỗi có kết thúc bằng một kí tự hoặc một chuỗi được người dùng cung cấp hay không.

Nếu chuỗi kết thúc bằng kí tự hoặc chuỗi cung cấp hàm sẽ trả về True, ngược lại hàm trả về False.

*Lưu ý: phương thức string.endsWith() sẽ phân biệt chữ hoa chữ thường.*

Cú pháp: `string.endsWith(searchvalue, length)`

Trong đó:

searchvalue là kí tự hoặc một chuỗi, phương thức sẽ kiểm tra xem chuỗi string có kết thúc bằng searchvalue hay không.

length chiều dài chuỗi string sẽ được kiểm tra.

```javascript
let str = 'Do. Or do not. There is no try.';
console.log(str.endsWith('try.')); //true
console.log(str.endsWith('Try.')); //false
console.log(str.endsWith('try', 30)); //true
console.log(str.endsWith('try.', 30)); //false
```

### 14. String.substring()

Phương thức string.substring() sẽ trích xuất nội dung của một chuỗi, nội dung trích xuất sẽ được xác định bằng hai tham số start và end. Phương thức sẽ trả về nội dung được trích xuất từ chuỗi gốc ban đầu.

Nội dung được trích xuất sẽ là chuỗi kéo dài từ start đến end và không bao gồm phần tử end.

Nếu start > end, phương thức sẽ hoán đổi vị trị 2 tham số này. Ví dụ string.substring(4, 2) sẽ trở thành string.substring(2, 4).

Nếu start hoặc end nhỏ hơn 0, phương thức sẽ đặt giá trị cho nó thành 0.

Phương thức string.substring() sẽ không làm thay đổi chuỗi nguồn ban đầu.

Cú pháp: `string.substring(start, end)`

Trong đó:

start là vị trị bắt đầu trích xuất.

end là vị trí kết thúc, trích xuất sẽ không bao gồm phần tử end.

Ví dụ: 
```javascript
let str = "abc123";
console.log(str.substring(1, 2)); // b
console.log(str.substring(3, 6)); // 123

```

## Array Method

### 1. Array.push(), .pop(), .shift(), .unshift()

Đây đều là các method giúp thêm hoặc xóa phần tử của mảng, tác dụng của từng method như sau:

push(): Thêm phần tử vào cuối mảng.

unshift(): Thêm phần tử vào đầu mảng.

pop(): Xóa phần tử cuối cùng trong mảng.

shift(): Xóa phần tử đầu tiên trong mảng.

Cú pháp: `array.some(function(currentValue, index, arr), thisValue);`

Ví dụ: 
```javascript
let arr = [];

arr.push(1); // arr = [1]
arr.unshift(2); // arr = [2,1]
arr.pop(); // arr = [1]
arr.shift(); // arr = []
```

### 2. Array.every()

Method này sẽ có tham số là 1 hàm (ta tạm gọi là testMethod). hàm testMethod sẽ có cấu trúc như sau `function(el, index, arr)` và luôn trả về giá trị true/false. 

el: giá trị của phần tử hiện tại.

index: vị trí của phần tử hiện tại trong mảng.

arr: mảng chứa phần tử hiện tại.

Method every() sẽ kiểm tra xem toàn bộ phần tử trong mảng có thỏa mãn testMethod không.

Ví dụ:

```javascript
let arr = [2,4,6,8,10];
arr.every(el => el % 2 == 0); // true

let arr = [2,1,6,8,10];
arr.every(el => el % 2 == 0); // false
```
testMethod ở đây chính là hàm kiểm tra xem phần tử có phải số chẵn hay không. Vậy thì ví dụ 1 là true vì toàn bộ mảng là số chẵn, còn ví dụ 2 là false vì có phần tử 1 là số lẻ.

### 3. Array.some()

Tương tự, method này cũng nhận vào một tham số là testMethod. Method này sẽ trả về true nếu như có ít nhất 1 phần tử trong mảng thỏa mãn testMethod, nếu không sẽ trả về false.

Ví dụ:

```javascript
let arr = [1, 3, 5, 7, 2];
arr.some(el => el % 2 == 0); // true

let arr = [1, 3, 5, 7, 9];
arr.some(el => el % 2 == 0); // false
```

### 4. Array.map()

Method này sẽ nhận vào tham số là 1 testMethod, tuy nhiên testMethod này không nhất thiết phải trả về giá trị true/false. Method này sẽ trả về một mảng mới, với giá trị được trả về từ testMethod của từng phần tử.

Ví dụ, ta muốn bình phương tất cả phần tử trong mảng:

```javascript
let arr = [1, 3, 5, 6, 2];
arr.map(el => el*el); // [1, 9, 25, 36, 4]
```

### 5. Array.find()

Method này cũng nhận vào tham số là 1 testMethod và trả về phần tử đầu tiên thỏa mãn testMethod, nếu không có phần tử nào thì sẽ trả về undefined

Ví dụ:
```javascript
let arr = [1, 3, 5, 2, 4, 8, 9];
arr.find(el => el % 2 == 0); // 2

let arr = [1, 3, 5, 9];
arr.find(el => el % 2 == 0); // undefined
```
### 6. Array.reduce()

Đây là method dùng để tính toán từ các phần tử của mảng (theo thứ tự từ trái sang phải).

Method này sẽ nhận vào 2 tham số:

function(total, el): Là một hàm tính toán, total chính là kết quả phép tính của phần tử trước còn el chính là phần tử hiện tại.

initVaule: Giá trị ban đầu của phép tính, được sử dụng làm total cho phép tính của phần tử đầu tiên.

Ví dụ, ta có thể tính tổng toàn bộ phần tử trong mảng bằng cách sau:

```javascript
let arr = [1, 3, 5, 9];
arr.reduce((total, el) => total + el, 0); // 18
```

### 7. Array.splice()

Method này sử dụng để xóa các phần tử trong mảng và sẽ trả về các phần tử đã xóa. Method này nhận vào hai tham số:

index: vị trí của phần tử đầu tiên muốn xóa.
deleteCount: số phần tử muốn xóa từ vị trí index.

Ví dụ:
```javascript
let arr = [1, 3, 5, 9];
let remove = arr.splice(0, 2);
// arr = [5, 9]
// remove = [1, 3]
```

### 8. Array.slice()

Method này tương tự với hàm substring() chỉ khác là sử dụng với mảng. Method này nhận 2 tham số:

start: vị trí của phần tử đầu tiên.

end: vị trí của phần tử cuối cùng, nếu bạn không truyền vào thì mặc định sẽ là độ lớn của mảng.

Method này sẽ trả về mảng con từ vị trí start đến vị trí end - 1 của mảng.

Ví dụ:

```javascript
 let arr = [1, 3, 5, 9];
let subArray = arr.slice(0, 2); // [1, 3]
```

### 9. Array.filter()

Method này nhận vào tham số là một testMethod và sẽ trả về mảng chứa các giá trị thỏa mãn testMethod.

Ví dụ:

```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
let filter = arr.filter(el => el % 2 == 0); // [2, 4 ,6 ,8]
```

### 10. Array.includes()

Method này nhận vào 1 tham số là el và sẽ trả về true nếu mảng có chứa phần tử el, ngược lại sẽ trả về false.

Ví dụ:
```javascript
let arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.includes(1) // true

let arr = [1, 2, 3, 4, 5, 6, 7, 8]
arr.includes(10) // false
```