//Thực hiện kế hoạch trong 30 ngày: thức dậy lúc 5 giờ sáng

// for(let day = 1; day <= 30; day = day+ 1) {
//     console.log(`Ngày ${day} thức dậy lúc 5h`)
// }

//Chỉ thức dậy lúc 5 giờ vào ngày lẻ, ngày chẵn thức dậy lúc 7 giờ

// for (let day = 1; day <= 30; day = day+ 1) {
//     if(day % 2 == 1) {
//         console.log(`Ngày ${day} thức dậy lúc 5h`)
//     } else {
//         console.log(`Ngày ${day} thức dậy lúc 7h`)
//     }
// }

//break được sử dụng để kết thúc vòng lặp
//Thức dậy lúc 5h nhưng đến ngày 20 chán quá -> bỏ
// for (let day = 1; day <= 30; day = day+ 1) {
//     if (day == 20) {
//         console.log("Chán quá không thực hiện nữa")
//         break
//     }
//     console.log(`Ngày ${day} thức dậy lúc 5h`)
// }

//continue được sử dụng để bỏ qua một vòng lặp hiện tại
//Chủ nhật không cần thức dậy lúc 5h

// for (let day = 1; day <= 30; day = day+ 1) { // day++ <=> day = day +1
//     if (day % 7 == 0) {
//         console.log("Nghỉ xả hơi")
//         continue
//     }
//     console.log(`Ngày ${day} thức dậy lúc 5h`)
// }

//==============================

// Ví dụ: Thực hiện tiết kiệm tiền trong trongg10 ngày
// Mỗi ngày tiết kiệm kiệm 100.000 VND
// Tổng => 10 ngày : 1.000.000 VND

//Trước khi bắt đầu, số tiền hiện có = 0
// let money = 0

// for (let day = 1; day <= 10; day++) {
//     money = money + 100000; // Số tiền của ngày hôm nay = số tiền của ngày liền trước + 100000, có thể viết là: money += 100000
// }

// console.log(money);

// 1. Nếu ngày lẻ, tiết kiệm 100, ngày chẵn 200

let money1 = 0

for (let day = 1; day <= 10; day++) {

    if(day % 2 == 0) {
        money1 = money1 + 200000
    } else {
        money1 = money1 + 100000
    }
}

console.log(money1)

// 2. Thực hiện tiết kiệm 100.000 đến ngày thứ 8 thì dừng lại

let money2 = 0

for (let day = 1; day <= 10; day++) {
    money2 = money2 + 100000
    if(day == 8) {
        money2 = money2 + 0
        break
    }
}

console.log(money2)

// 3. CHỈ TIẾT KIỆM 100.000 VÀO CÁC NGÀY CHẴN, NGÀY LẺ BỎ QUA

let money3 = 0
for (let day = 1; day <= 10; day++) {
    
    if(day % 2 == 0) {
        money3 = money3 + 100000
    } else {
        money3 = money3 + 0
    }
}
console.log(money3)



