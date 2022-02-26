const grades = [
    {name: 'John', grade: 8, sex: 'M'},
    {name: 'Sarah', grade: 12, sex: 'F'},
    {name: 'Bob', grade: 16, sex: 'M'},
    {name: 'Johnny', grade: 2, sex: 'M'},
    {name: 'Ethan', grade: 4, sex: 'M'},
    {name: 'Paula', grade: 18, sex: 'F'},
    {name: 'Donald', grade: 5, sex: 'M'},
    {name: 'Jennifer', grade: 13, sex: 'F'},
    {name: 'Courtney', grade: 15, sex: 'F'},
    {name: 'Jane', grade: 9, sex: 'F'}
   ]

//Viết function tính thứ hạng trung bình của cả lớp
const showRating = rating => {
    let rate = 0
    rating.forEach(student => {
        rate += student.grade
    })
    return rate / rating.length
}
console.log(showRating(grades));

//Viết function tính thứ hạng trung bình của nam trong lớp
// const showMale = male => {
//     return male.filter(student => student.sex == "M") 
// }
// const showRatingMale = ratingMale => {
//     let gradeMale = 0
//     ratingMale.forEach(student => {
//         gradeMale += student.grade
//     })
//     return gradeMale / ratingMale.length
// }
// console.log(showRatingMale(showMale(grades)));

const showMale = male => {
    let rateMale = 0;
    let count1 = 0
    // for (let i = 0; i < male.length; i++) {
    //     const ele = male[i];
    //     if(ele.sex == "M") {
    //         rateMale += ele.grade;
    //         count += 1;
    //     }
    // }
    // return rateMale / count
    
    male.forEach(student => {
        if(student.sex == "M") {
            rateMale += student.grade;
            count1 += 1;
        }
    })
    return rateMale / count1
}
console.log(showMale(grades));

//Viết function tính thứ hạng trung bình của Nữ trong lớp

const showFemale = female => {
    let rateFemale = 0;
    let count2 = 0
    
    female.forEach(student => {
        if(student.sex == "F") {
            rateFemale += student.grade;
            count2 += 1;
        }
    })
    return rateFemale / count2
}
console.log(showFemale(grades));

//Viết function tìm học viên Nam có thứ hạng cao nhất trong lớp

const firstMale = first1 => {
let maleTop = first1.filter(student => student.sex == "M").sort((a, b) => b.grade - a.grade)
return maleTop[0]
}
console.log(firstMale(grades));

//Viết function tìm học viên Nữ có thứ hạng cao nhất trong lớp
const firstFemale = first2 => {
    let femaleTop = first2.filter(student => student.sex == "F").sort((a, b) => b.grade - a.grade)
    return femaleTop[0]
    }
    console.log(firstFemale(grades));

//Viết function tìm học viên Nam có thứ hạng thấp nhất trong lớp
const lastMale = last1 => {
    let showMale = last1.filter(student => student.sex == "M").sort((a, b) => a.grade - b.grade)
    return showMale[0]
}
console.log(lastMale(grades));

//Viết function tìm học viên Nữ có thứ hạng thấp nhất trong lớp
const lastFemale = last2 => {
    let showFemale = last2.filter(student => student.sex == "F").sort((a, b) => a.grade - b.grade)
    return showFemale[0]
    }
    console.log(lastFemale(grades));

//Viết function thứ hạng cao nhất của cả lớp
const topNo1 = student1 => {
    let top1 = student1.sort((a, b) => b.grade - a.grade)
    return top1[0]
}
console.log(topNo1(grades));

//Viết function thứ hạng thấp nhất của cả lớp
const lastNo1 = student2 => {
    let last1 = student2.sort((a, b) => a.grade - b.grade)
    return last1[0]
}
console.log(lastNo1(grades));

//Viết function lấy ra danh sách tất cả học viên Nữ trong lớp
const nameFemale = listFemale => {
    return listFemale.filter(student => student.sex == "F")
}
console.log(nameFemale(grades));

//Viết function sắp xếp tên học viên theo chiều tăng dần của bảng chữ cái
const arrangeName = arrange => {
    return arrange.sort((a, b) => (a.name).localeCompare((b.name)))
}
console.log(arrangeName(grades));

//Viết function sắp xếp thứ hạng học viên theo chiều giảm dần
const arrangeGrade = arrange => {
    return arrange.sort((a, b) => a.grade - b.grade)
}
console.log(arrangeGrade(grades));

//Viết function lấy ra học viên Nữ có tên bắt đầu bằng “J”
const startWithName = startWith => {
    return startWith.filter(student => student.sex == "F" && (student.name).startsWith("J"))
}
console.log(startWithName(grades));

//Viết function lấy ra top 5 người có thứ hạng cao nhất trong lớp
const topFive = allStudent => {
    let top5 = allStudent.sort((a, b) => b.grade - a.grade)
    return top5.slice(0, 5)
}
console.log(topFive(grades));
