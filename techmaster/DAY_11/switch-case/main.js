// Tạo biến day có giá trị từ 0 -> 6, là các ngày trong tuần Trong đó: (0 - chủ nhật, 1 - thứ 2, …, 6 - Thứ 7)

// Sử dụng switch-case để in ra ngày tương ứng với giá trị của biến day
// Ví dụ: day = 6 --> “Hôm nay là thứ 7”

let day = 5
switch (day) {
    case 0: {
        console.log("Hôm nay là chủ nhật")
        break;
    }
    case 1: {
        console.log("Hôm nay là thứ 2")
        break;
    }
    case 2: {
        console.log("Hôm nay là thứ 3")
        break;
    }
    case 3: {
        console.log("Hôm nay là thứ 4")
        break;
    }
    case 4: {
        console.log("Hôm nay là thứ 5")
        break;
    }
    case 5: {
        console.log("Hôm nay là thứ 6")
        break;
    }
    case 6: {
        console.log("Hôm nay là thứ 7")
        break;
    }
}

// Tạo biến month có giá trị từ 1 -> 12, là các tháng trong năm
// Sử dụng switch-case để in ra mùa tương ứng với giá trị của biến month
// 1, 2, 3 : Mùa xuân
// 4, 5, 6 : Mùa hạ
// 7, 8, 9 : Mùa thu
// 10, 11, 12 : Mùa đông

let month = 8

case 1:
case 2:
case 3: {
    console.log("Mùa xuân")
    break;
}
case 4:
case 5:
case 6 {
    console.log("Mùa hạ")
    break;
}
case 2: {
    console.log("Mùa thu")
    break;
}
case 3: {
    console.log("Mùa đông")
    break;
}