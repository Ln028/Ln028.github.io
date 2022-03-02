

function checkMark(mark) {
    if(mark >= 85) {
        console.log("A")
    }
    else if(mark >= 70 && mark < 85) {
        console.log("B")
    }
    else if(mark >= 40 && mark < 70) {
        console.log("C")
    }
    else {
        console.log("D")
    }
}
checkMark(80)

let hour = 20;
if(hour < 12) {
    console.log("Chào buổi sáng")
} else if(hour >= 12 && hour < 18) {
    console.log("Chào buổi chiều")
} else {
    console.log("Chào buổi tối")
}

// let hour = 20;
hour <12 ? console.log("Chào buổi sáng") : console.log("Chào buổi chiều")