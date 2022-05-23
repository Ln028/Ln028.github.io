//Lap trinh dong bo & Lap trinh bat dong bo
    //1.Lap trinh dong bo: thuc hien cac cv 1 cach tuan tu, het cv nay den cv khac. Tai 1 thoi diem chi cos 1 cv duoc thuc hien.
        //Co 2 cv: 1 va 2
        //cv 1: 3s
        //cv 2: 4s
        //Tong thoi gian thuc hien 2 cv: 7s

        function one() {
            console.log("Cong viec 1");
        }
        function two() {
            console.log("Cong viec 2");
        }    

        //Thuc hien cv:
        one()
        two()

    //2. Lap trinh bat dong bo: thucj hien cac cv dong thoi cung luc, cv nao xong truoc thi se cho kq truoc
        //cv3: 5s
        function three() {
            setTimeout(() => {
                console.log("Cong viec 3");
            }, 5000) //5s
        }
        //setTimeout de delay 1 khoang time de thuc hien 1 cv trong function

        //cv4: 3s
        function four() {
            setTimeout(() => {
                console.log("Cong viec 4");
            }, 3000) //3s
        }

        //Tong time thuc hien 2 cv: 5s
        three()
        four()

//Xu ly bat dong bo trong JS:
    //1. callback function
    //2. promise
    //3. async-await function