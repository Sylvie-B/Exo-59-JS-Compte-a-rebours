/** recup du texte dans p */
let text = document.getElementById("time")
console.log(text);

console.log(text.innerText);

for (let t = 60; t >= 0; t--){
    text.innerText = t.toString();
}
