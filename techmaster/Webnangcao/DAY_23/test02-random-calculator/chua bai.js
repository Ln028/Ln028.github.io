const primaryNumberEl = document.getElementById("primary-number")
const secondaryNumberEl = document.getElementById("secondary-number")
const operatorEl = document.getElementById("operator");
const resultEl = document.getElementById("result")
const timeEl = document.querySelector(".time")
const scoreEl = document.querySelector(".score")

const operators = ["+", "-", "*"]
let total;
let time = 10;
let score = 0;
let interval;

function randomNumber() {
    let primaryNumber = Math.floor(Math.random() * 10)
    let secondaryNumber = Math.floor(Math.random() * 10)
    let operator = operators[Math.floor(Math.random() * operators.length)]
    console.log(primaryNumber, secondaryNumber, operator);
    //Tinh toan ket qua:
    total = eval(`${primaryNumber} ${operator} ${secondaryNumber}`)
    console.log(total);

    //Hien thi noi dung le giao dien:
    primaryNumberEl.innerText = primaryNumber
    secondaryNumberEl.innerText = secondaryNumber
    operatorEl.innerText = operator
}

//Chay thoi gian:
function updateTime() {
    time--;
    timeEl.innerText = time >= 10 ? `00:${time}` : `00:0${time}`
    //Neu time = 0 thi thong bao kq diem so:
    if(time == 0) {
        clearInterval(interval)

        //disable o input k cho nhap nua:
        resultEl.disabled = true

        //Thong bao ket qua
        alert("Ket qua")
    }
}

resultEl.addEventListener("keyup", function(e) {
    if(e.keyCode == 13) {
        let value = e.target.value;
        
        if(value == total) {
            //Tang diem len 1:
            score++
            //Cap nhat lai sc0re:
            scoreEl.innerText = score >+ 10 ? score : `0${score}`

            randomNumber()
        } 
        resultEl.value = ""
        
    }
})

//Chay khi bd game:
function init() {
    //random so:
    randomNumber()

    //Set lai time vaf score:
    timeEl.innerText = time >= 10 ? `00:${time}` : `00:0${time}`

    scoreEl.innerText = score >+ 10 ? score : `0${score}`
    //chay thoi gian:
    interval = setInterval(updateTime, 1000)

}
init()