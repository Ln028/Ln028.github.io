//Thực hiện kế hoạch trong 30 ngày: thức dậy lúc 5 giờ sáng

// for(let day = 1; day <= 30; day = day+ 1) {
//     console.log(`Ngày ${day} thức dậy lúc 5h`)
// }

// Sử dụng vòng lặp while

// let day = 1 // Giá trị khởi tạo Begin

// while(day <= 30) { // Điều kiện Condition
//     console.log(`Ngày ${day} thức dậy lúc 5h`)

//     day = day + 1 // Giá trị mới Step
// }

//Chỉ thức dậy lúc 5 giờ vào ngày lẻ, ngày chẵn thức dậy lúc 7 giờ

// let day2 = 1
// while(day2 <= 30) {
    
//     if(day2 % 2 == 1) {
//         console.log(`Ngày ${day2} thức dậy lúc 5h`)
//     } else {
//         console.log(`Ngày ${day2} thức dậy lúc 7h`)
//     }
//     day2 = day2 + 1
// }

//Thức dậy lúc 5h nhưng đến ngày 20 chán quá -> bỏ

// let day1 = 1
// while(day1 <= 30) {
//     console.log(`Ngày ${day1} thức dậy lúc 5h`);
//     day1 = day1 + 1;
//     if(day1 == 20) {
//         console.log("Chán quá không thực hiện nữa")
//         break
//     }
    
// }

//Chủ nhật không cần thức dậy lúc 5h

// let day = 1 
// while(day <= 30) {
    
//     if(day % 7 == 0) {
//         console.log(`nghỉ`)
//     } else {
//         console.log(`Ngày ${day} thức dậy lúc 5h`)
//     }
//     day = day + 1
// }

//Sử dụng do-while 

let day = 1 //Giá trị khởi tạo
do {
    console.log(`Ngày ${day} thức dậy lúc 5h`)
    day = day + 1 //cập nhật giá trị mới
} while (day <= 30) //điều kiện

console.log();
for (let index = 0; index < array.length; index++) {
    const element = array[index];
    
}