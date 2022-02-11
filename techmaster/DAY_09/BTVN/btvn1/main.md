## Giới thiệu về JavaScript
### JavaScript là gì?
JavaScript (JS) là một ngôn ngữ lập trình thông dịch. Đây là 1 trong 3 ngôn ngữ chính trong lập trình web, JS được sử dụng kết hợp với HTML, CSS để thiết kế web động, tương tác với người dùng.
### Javascript dùng để làm gì?
1. Thay đổi vị trí thành phần trong trang web
2. Thay đổi nội dung trang web
3. Tương tác với các thao tác của người dùng
4. Các tính năng khác ....

## Viết chương trình JS
Tất cả các đoạn mã JavaScript đều được đặt trong cặp thẻ đóng mở `<script></script>`. Ví dụ:

    <script>
     console.log("Hello world");
    </script>

**Lưu ý: Mã javascript nên đặt ở phần cuối cùng của body**

## Cách đặt thẻ Script
Có 3 cách đặt thẻ script thường được sử dụng như dưới đây:

1. Internal: viết trong file html hiện tại.
2. External: viết ra một file có đuôi .js khác rồi import vào.
3. Inline: viết trực tiếp trong thẻ HTML.

**Nên sử dụng cách viết ra một file có đuôi .js khác rồi import vào. Với cách này ta sử dụng như sau:**
1. Tạo file có đuôi .js (ví dụ: main.js) để viết mã Javascript (file .js nằm cùng cấp với file .html)
2. Nhúng file .js vào file .html thông qua thuộc tính src trong thẻ script

Ví dụ: 
    
    <script src="./main.js"></script>


## Biến trong JS
### Biến là gì?
Biến là một định danh dùng để lưu trữ dữ liệu, thông qua biến chúng ta có thể thực hiện các thao tác với dữ liệu.
### Khai báo biến
Để khai báo một biến ta sử dụng từ khóa: const/ let.

**const** được sử dụng để khai báo 1 hằng số, và giá trị của nó không thay đổi trong suốt chương trình.

**let** khai báo biến chỉ có thể truy cập được trong block bao quanh nó được xác định bằng cặp {}.

Chúng ta sử dụng 2 cách sau để khai báo biến:

Cách 1: Khai báo biến và không gán luôn giá trị cho biến:

    let age;
    age = 28;
    console.log(age)
    //Kết quả là: 28

*Chú ý: Khi 1 biến được khai báo nhưng chưa được gán giá trị thì nó sẽ nhận kiểu dữ liệu là undefined. Ví dụ:*

    let age;
    console.log(age)
    //Kết quả là: undefined    

Cách 2: Khai báo biến và gán luôn giá trị cho biến:

    let email = "nguyenlan50aof@gmail.com"
    console.log(email)
    //Kết quả là: nguyenlan50aof@gmail.com

### Quy tắc đặt biến
1. Tên biến chỉ chứa các ký tự sau: chữ, số, ký tự "$", dấu "_".
2. Ký tự đầu tiên không được là số (Ta nên dùng kí tự đầu tiên là chữ).
3. Tên biến không được trùng với keyword của JS.
4. Tên biến có phân biệt chữ hoa và chữ thường. Ví dụ: Name, name, nAme là các biến khác nhau.
5. Nếu biến có từ 2 từ trở lên, chúng ta nên để ký tự đầu tiên của từ thứ 2 là chữ in hoa. Ví dụ: tên biến là username thì nên đặt là userName.

### Kiểm tra dữ liệu của biến
Để kiểm tra kiểu dữ liệu của 1 biến, chúng ta sử dụng toán tử typeof:
   
    let number = 10;
    console.log(typeof number); //Kiểu dữ liệu sẽ là "number"

    let name = "Lan Nguyen";
    console.log(typeof name); // Kiểu dữ liệu sẽ là "string"

## Kiểu dữ liệu String
**String (chuỗi) là một đoạn text có thể không có ký tự hoặc có từ 1 ký tự trở lên.

Các chuỗi phải được bao quanh bằng cặp dấu nháy đơn ’ hoặc nháy kép ". Ví dụ:

    let name = “Nguyễn Văn A”;
    let email = 'abc@gmail.com';

Khi chuỗi không có kí tự thì đó gọi là chuỗi rỗng. Ví dụ:

    let emptyString = ""


**Lưu ý:**

Nếu trong chuỗi cũng có xuất hiện dấu nháy đơn hoặc nháy kép thì phải thêm ký tự \ đằng trước dấu nháy đó. Ví dụ:

    let text = "Xin chào các bạn. Mình là \"Lan Nguyen\".";

Nếu muốn Enter xuống hàng một chuỗi thì phải sử dụng dấu + để nối chuỗi. Nếu không phần mềm chỉ hiểu được giá trị của chuỗi là dòng đầu tiên. Ví dụ:

    //Trường hợp dùng dấu +:
    
    let message = "Xin chào các bạn. " +
    "Mình là \"Lan Nguyen\".";
    console.log(message)
    //Kết quả là: Xin chào các bạn. Mình là "Lan Nguyen".

    //Trường hợp không dùng dấu +:

    let message = "Xin chào các bạn. "
    "Mình là \"Lan Nguyen\". ";
    console.log(message)
    //Lúc này, phần mềm chỉ hiểu giá trị của chuỗi là: Xin chào các bạn.


### Template Strings
Khi chúng ta sử dụng template Strings để khai báo chuỗi thì chúng ta sẽ sử dụng cặp ký tự back-tick `` thay cho cặp ký tự nháy đơn '' hoặc nháy kép "".

Khi khai báo chuỗi kiểu này có thể viết chuỗi trong nhiều dòng và có thể dùng dấu nháy đơn hoặc nháy kép thoải mái mà không cần dùng escape character.

Có thể dùng các biến, biểu thức ngay trong chuỗi với cú pháp như sau:

    `string_text ${expression} string_text`

Ví dụ:

    let name = "Lan Nguyen"
    let year = 1994
    console.log(`Xin chào các bạn, mình tên là ${name}. Năm nay mình ${2022 - year} tuổi.`);

    //Kết quả: Xin chào các bạn, mình tên là Lan Nguyen. Năm nay mình 28 tuổi.



## Kiểu dữ kiệu Number
Number (số) là một tập hợp của các con số (0 – 9) không chứa dấu khoảng trắng và có thể chứa dấu trừ (-) nằm ở đầu để đại diện cho số âm.Ví dụ:

    let age = 25;
    let pi = 3.14;
    let number = -2;


## Phép tính trong JS
### 1. Phép cộng:
Trong JavaScript:

Số có thể cộng số => cho ra số. Ví dụ:

    console.log(5 + 10)
    //Kết quả: 15

Số có thể cộng chuỗi (hoặc chuỗi có thể cộng số) => cho ra chuỗi. Ví dụ:

    Console.log(5 + "age")
    //Kết quả: 5age

Chuỗi có thể cộng chuỗi => cho ra chuỗi. Ví dụ:

    console.log("Lan" + "Nguyen")
    //Kết quả: LanNguyen


### 2. Các phép tính còn lại:

Nếu thực hiện phép tính giữa các số với nhau thì thực hiện bình thường theo nguyên tắc toán học. Ví dụ: 

    console.log(10-5)
    //Kết quả: 5
    
    console.log(2**5)
    //Kết quả: 32 (2 mũ 5 = 32. Ký tự ** là phép tính lũy thừa)

    console.log(2%4)
    //Kết quả: 2 (căn bậc 2 của 4 = 2. Ký tự % là phép tính căn bậc 2)
    
    console.log(10/5)
    //Kết quả: 2
    (Note: Nếu phép chia có mẫu số bằng 0 thì kết quả sẽ là Infinity.)


Nếu thực hiện phép tính giữa số và chuỗi thì chuỗi sẽ chuyển sang số. Tuy nhiên, nếu chuỗi có chứa ký tự không phải là số thì phép tính sẽ cho ra kết quả là NaN (not a number). Ví dụ:

    console.log("5" - 10)
    //Kết quả: -5

    console.log("5px" * 10)
    //Kết quả: NaN

## Math object trong JS
Đối tượng Math trong Javascript sẽ giúp chúng ta thực hiện các biểu thức đặc biệt trong toán học.

Một số phương thức hay được sử dụng:

Math.PI : Lấy ra giá trị của số PI. Ví dụ:

    console.log(Match.PI)
    //Kết quả: 3.141592653589793

Math.round(number) : Làm tròn số bình thường. Ví dụ:

    console.log(Match.round(1.5))
    //Kết quả: 2
Math.ceil(number) : Làm tròn số lên. Ví dụ:

    console.log(Match.ceil(1.1))
    //Kết quả: 2

Math.floor(number) : Làm tròn số xuống. Ví dụ:

    console.log(Match.floor(1.9))
    //Kết quả: 1

Math.random() : Random 1 số ngẫu nhiên trong khoảng 0 -> 1. Ví dụ:

    console.log(Match.random())
    //Kết quả: 0.008108481833463577. Mỗi lần sử dụng sẽ cho ra 1 kết quả khác nhau.

Math.min(number1, number 2, … number n) : Lấy ra giá trị nhỏ nhất trong danh sách số. Ví dụ:

    console.log(Match.min(1,2,5,7,3,9,6))
    //Kết quả: 1

Math.max(number1, number 2, … number n) : Lấy ra giá trị lớn nhất trong danh sách số. Ví dụ:

    console.log(Match.max(1,2,5,7,3,9,6))
    //Kết quả: 9

Math.pow(a, b) : Số mũ (a^b). Ví dụ:

    console.log(Match.pow(2, 4))
    //Kết quả: 16

Math.sqrt(number) : Căn bậc 2. Ví dụ:
 
     console.log(Match.sqrt(4))
    //Kết quả: 2

Match.trunc(number): trả về phần nguyeen của số. Vi dụ:

    console.log(Match.trunc(9.2))
    //Kết quả: 9


Và nhiều phương thức khác nữa, tham khảo tại https://www.w3schools.com/js/js_math.asp
