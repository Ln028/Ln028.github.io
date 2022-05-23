
const inputEl = document.querySelector("input")
const btn = document.querySelector("button")

btn.addEventListener("click", function() {
    if(inputEl.type == "password") {
        inputEl.type = "text";
        btn.innerText = "Hide"
    } else {
        inputEl.type = "password";
        btn.innerText = "Show"
    }
})