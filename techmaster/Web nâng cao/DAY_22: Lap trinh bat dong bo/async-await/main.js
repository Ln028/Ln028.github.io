//Mua iphone
let money = 32;

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

async function buy () {
    try {
        //Thuc hien mua iphone
    let res = await buyIphone(); //await chi di voi async va chi lam viec voi promise
    console.log(res);
    let res1 = await buyAipod()
    console.log(res1);
    } catch(err) {
        console.log(err);
    }
    return "Ve nha"
}
let data = buy()
console.log(data); //Ket qua tra ve cua async-await function la 1 promise

data 
    .then(res => console.log(res))
    .catch(err => console.log(err))