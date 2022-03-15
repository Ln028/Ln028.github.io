//Promise: loi hua

//Den Tet neu du tien se mua iphone 13 pro max (31tr)

//Mua iphone
let money = 40;

let buyIphone = () => {
    return new Promise(function(resolve, reject) {
        //resolve: duoc goi khi thanh cong
        //reject: duoc goi khi that bai
        if(money>= 31) {
            resolve("Mua iphone thoi")
        } else {
            reject("Khong du tien mua iphone. Doi tet nam sau nhe")
        }
    })
}

// console.log(buyIphone());

//Bay gio den Tet roi, xem co mua duoc iphone khong:
// buyIphone()
//     .then(res => {
//         console.log(res);
//     })
//     .catch(err => {
//         console.log(err);
//     })

//Neu du tien mua iphone, va con thu 5tr mua airpod
let buyAipod = () => {
    return new Promise(function(resolve, reject) {
        if(money - 31 -5 >= 0) {
            resolve("Mua them airpod")
        } else {
            reject("Khong du tien mua airpod")
        }
    })
}

// buyIphone()
//     .then(res => {
//     console.log(res);
//     return buyAipod()
//     })
//     .then(res1 => {
//         console.log(res1);
//     })
//     .catch(err => {  //catch chi dc goi 1 lan dung chung cho cac truong hop loi
//         console.log(err);
//     })
//     .finally(() => {
//         console.log("Ve nha");
//     })


//Phan phat tien nho 2 nguoi di mua dong thoi
Promise.all([buyIphone(), buyAipod()])
    .then((values) => {
    console.log(values);
    })
    .catch(err => {
        console.log(err);
    })