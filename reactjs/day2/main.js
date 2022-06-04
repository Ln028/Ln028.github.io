
function reverse(string) {
    let newString = '';
    for (let i = string.length - 1; i >= 0; i--)
    if(string[i] != " ") {
        newString += string[i];
    }
    return newString;
}

console.log(reverse("he   llo   "));
    