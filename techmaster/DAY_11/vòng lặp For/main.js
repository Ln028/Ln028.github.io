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
for (let day = 1; day <= 30; day = day+ 1) {
    if (day == 20) {
        console.log("Chán quá không thực hiện nữa")
        break
    }
    console.log(`Ngày ${day} thức dậy lúc 5h`)
}

//continue được sử dụng để bỏ qua một vòng lặp hiện tại
//Chủ nhật không cần thức dậy lúc 5h

for (let day = 1; day <= 30; day = day+ 1) {
    if (day % 7 == 0) {
        console.log("Nghỉ xả hơi")
        continue
    }
    console.log(`Ngày ${day} thức dậy lúc 5h`)
}
