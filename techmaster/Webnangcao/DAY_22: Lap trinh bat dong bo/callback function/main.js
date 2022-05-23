//1. callback function:
    //la 1 function va duoc truyen vao 1 function khac voi vai tro la tham so
    function funcA(funcB) {
        funcB();//funcB duoc goi laf callback function
    }

    //Lam bai tap: 3s
    //Nau com: 4s
    //Da bong: 3s

    function doTask1(name, callback) {
        console.log("Bat dau cv");
        console.log(`Thuc hien cv: ${name}`);
        setTimeout(() => {
            callback()
        }, 3000)
    }
    function doTask2(name, callback) {
        console.log("Bat dau cv");
        console.log(`Thuc hien cv: ${name}`);
        setTimeout(() => {
            callback()
        }, 4000)
    }
    function doTask3(name, callback) {
        console.log("Bat dau cv");
        console.log(`Thuc hien cv: ${name}`);
        setTimeout(() => {
            callback()
        }, 3000)
    }

    function finish() {
        console.log("Ket thuc cv");
    }

    const isOdd = number => number % 2 == 1
    console.log([1,2,3,4,5].filter(isOdd));
//Thuc hien dong thoi ca 3 cv:
    // doTask1("Lam bai tap", finish)
    // doTask2("Nau com", finish)
    // doTask3("Da bong", finish)

//Thuc hien tuan tu:
    doTask1("Lam bai tap", function() {
        doTask2("Nau com", function() {
            doTask3("Da bong", finish)
        })
    })