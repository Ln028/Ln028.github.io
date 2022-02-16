## Function
### Function là gì?
Function (hàm) là tập hợp các đoạn code dùng để thực hiện một tác vụ cụ thể nào đó.

*Cú pháp định nghĩa function:*

```javascript
function functionName(para_1, ..., para_n) {
 // code thực thi function
}
```
*Thực thi function:*

```javascript
functionName(para_1, ..., para_n)
```

### Phân biệt tham số (parameter) và đối số (argument)

**Tham số** (parameter) là biến trong khai báo hàm.

**Đối số** (argument) là giá trị thực của biến này được truyền vào hàm.

```javascript
function sum(a, b) { //a, b owr ddaau laf tham soos
return a + b;
}

console.log(sum(1, 2)) // 1, 2 la ddois soos
```

## Một số loại function
### 1. Function không có tham số
```javascript
function sayHello() {
    console.log("Xin chào các bạn");
}

sayHello();
````
### 2. Function có tham số

Có thể có một hoặc nhiều tham số (không nên quá 3 tham số)

```javascript
// Ví dụ function có 1 tham số
function sayHello(name) {
    console.log(`Xin chào ${name}`);
}
sayHello("Lan Nguyen");

// Ví dụ function có 2 tham số
function sayHello_1(name, year) {
    console.log(`Tôi tên là ${name}, năm nay tôi ${2022-year} tuổi`);
}
sayHello_1("Lan Nguyen", 1994);
```
**Lưu ý: Nếu có từ 2 tham số trở lên, phải truyền giá trị tương ứng với tham số theo đúng thứ tự**

### 3. Function trả về kết quả

Để trả về kết quả, ta sử dụng từ khóa return:

```javascript
function sum(a, b) {
    return a + b;
}

let data = sum(3, 4);
console.log(data);

// Nếu muốn kiểm tra nhanh kết quả của function có thể sử dụng luôn console.log
console.log(sum(4, 5));
```

**Chú ý : Những câu lệnh đằng sau từ khóa return sẽ không được thực thi.**

Ví dụ:

```javascript
function sum(a, b) {
    return a + b;
    console.log(a); // không được thực thi
    console.log(b); // không được thực thi
}
```

### 4. Function không trả về kết quả
Đối với function không có từ khóa return thì coi như function đó không trả về kết quả.

## Default Parameter ES6

Default Parameter ES6 cho phép khởi tạo function với những default value nếu như chúng được định nghĩa sai.

Khi sử dụng chức năng này sẽ giúp function dễ kiểm soát và ít gặp lỗi hơn.

Ví dụ:

```javascript
function sum(num1 = 10, num2 = 20) {
    let result = num1 + num2;
    return result
}

console.log(sum()) //Truyền thiếu 2 giá trị -> num1 = 10, num2 = 20/ Kết quả là: 30
console.log(sum(3)) //Truyền thiếu 1 giá trị -> num1 = 3, num2 = 20. Kết quả là 23
console.log(sum(2,3)) //Truyền đủ giá trị -> num1 = 2, num2 =3. Kết quả là 5
```

## Phạm vi của biến

**Scope** có thể hiểu nôm na là “phạm vi sử dụng của biến”

Có 3 loại scope:

1. Global scope
2. Function scope
3. Block scope

### Global scope

Một biến được coi là function scope nếu biến đó được định nghĩa bên trong function. Với biến Global scope, mình có thể sd bất cứ khi nào, bất cứ nơi đâu.
**Lưu ý: Phải khởi tạo giá trị cho biến biến trước khi sử dụng biến**

```javascript
let mail = "nguyenlan50aof@gmail.com";
let age = 28;

console.log(mail);
console.log(age);
```
### Function scope

Một biến được coi là function scope nếu biến đó được định nghĩa bên trong function.

Ví dụ:

```javascript 
function anSang() {
    let monAn = "Phở";
    console.log(monAn);
}

anSang(); // Phở
console.log(monAn) // Lỗi
```

### Block scope

Một biến được coi là block scope nếu biến đó được định nghĩa bên trong cặp dấu {}

Ví dụ:

```javascript
{
    let message = "Hôm nay trời đẹp quá";
    console.log(message); // Hôm nay trời đẹp quá
}

console.log(message) // Lỗi
```

### Chú ý:

Nếu 1 biến không có từ khóa khai báo biến (let, const), sẽ trở thành biến global

```javascript 
function anSang() {
    monAn = "Phở";
    console.log(monAn);
}

anSang(); // Phở
console.log(monAn) // Phở
```

## Dữ liệu Boolean

### Kiểu dữ kiệu Boolean 

Giá trị của kiểu dữ liệu này chỉ có thể là true hoặc false.

Ví dụ:

```javascript
let a = true;
let b = false;
let c = !a;
let d = !b;

console.log(a, b, c, d)
```

### Xác định giá trị Boolean

Để kiểm tra giá trị đúng sai của biến hay biểu thức,… ta sử dụng hàm Boolean()

Ví dụ:

```javascript
console.log(Boolean(10)); //True
console.log(Boolean("Lan Nguyen"));//True
console.log(Boolean(3 + 5));//True
console.log(Boolean(null));//False
console.log(Boolean(undefined))//False
```

**Note:**

**1. Có 6 giá trị mà khi ép kiểu về Boolean thì cho ra giá trị là False, đó là: false, 0, NaN, '', null, undefined. Các giá trị này gọi là False value.**

**2. Ngoài 6 giá trị trên, các giá trị còn lại gọi là Truthy value. Các giá trị này khi ép về giá trị Boolean thì cho ra giá trị là True.**

### Toán tử và (&&)
Kết hợp 2 giá trị boolean với nhau:

```javascript
console.log(true && true);
console.log(true && false); 
console.log(false && true); 
console.log(false && false);
```
*Đối với toán tử và, nó chỉ đúng khi tất cả giá trị đều là giá trị true, chỉ cần 1 trong các giá trị là false thì kết quả sẽ là false.*
### Toán tử hoặc (||)

```javascrip
console.log(true || true);
console.log(true || false); 
console.log(false || true); 
console.log(false || false);
```
*Đối với toán tử hoặc, nó chỉ sai khi tất cả giá trị đều là giá trị false, chỉ cần 1 trong các giá trị là true thì kết qủa sẽ là true.*

## Câu lệnh điều kiện

### Câu lệnh if

Thực hiện câu lệnh trong if nếu điều kiện cho trước là đúng.

```javascript
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
}

// Ví dụ
let hour = 6;
if(hour < 12) {
    console.log("Chào buổi sáng");
}

let troiDep = true;
let coTien = true;
if(troiDep == true && coTien == true) {
    console.log("Đi chơi")
}

```

### Câu lệnh if - else

Nếu điều kiện đúng thực hiện câu lệnh trong if, ngược lại nếu điều kiện sai thì hiện câu lệnh trong else.

```javascript
// Cú pháp
if (điều kiện) {
    // Code được thực thi nếu điều kiện đúng
} else {
    // Code được thực thi nếu điều kiện sai
}

// Ví dụ
let hour = 6;
if (hour < 12) {
    console.log("Chào buổi sáng");
} else {
    console.log("Chào buổi chiều");
}
//Chào buôỉ sáng
```
### Câu lệnh if - else/if - else

```javascript
let hour = 20;
if(hour < 12) {
    console.log("Chào buổi sáng")
} else if(hour >= 12 && hour < 18) {
    console.log("Chào buổi chiều)"
} else {
    console.log("Chào buổi tối")
}
//Chào buổi tối
```

## Sự khác biệt giữa == và ===
**Giống nhau:**

Đều dùng để so sánh.

**Khác nhau:**
- Toán tử == so sánh trừu tượng (abstract equality), tức là nó thực hiện các chuyển đổi loại cần thiết trước khi so sánh (so sánh về mặt giá trị)

- Còn toán tử === so sánh nghiêm ngặt (strict equality), nghĩa là nó sẽ không thực hiện chuyển đổi loại. Do đó nếu hai giá trị không cùng loại, thì khi so sánh, kết quả sẽ trả về false (so sánh về mặt giá trị và kiểu dữ liệu)

Ví dụ:

```javascript
let a = 2;
let b = "2";

// Sử dụng toán tử ==
console.log(a == b) // true
// Đúng vì b khi thực hiện so sánh sẽ được convert sang dạng số (2) 2 == 2 --> true

// Sử dụng toán tử ===
console.log(a === b) // false
// Sai vì kiểu dữ liệu của a là number và của b là string
```

### Toán tử 3 ngôi

Toán tử 3 ngôi trong JavaScript cho phép chúng ta kiểm tra một điều kiện nào đó trong một dòng code duy nhất và trả về giá trị, thay vì phải sử dụng nhiều câu lệnh if-else, giúp cho việc code đơn giản và thông minh hơn.

Cú pháp:

```javascript
condition ? true_value : false_value;
```
Trong đó:

- condition : Biểu thức điều kiện
- true_value : Được trả về nếu điều kiện đúng
- false_value : Được trả về nếu điều kiện sai

Ví dụ sử dụng if - else:
```javascript
let hour = 20

if (hour < 12) {
    console.log("Chào buổi sáng");
} else {
    console.log("Chào buổi chiều");
}
```
Ví dụ sử dụng toán tử 3 ngôi:
```javascript
let hour = 20
hour <12 ? console.log("Chào buổi sáng") : console.log("Chào buổi chiều")
