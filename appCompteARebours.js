/** recup du texte dans p */
let text = document.getElementById("time")

for (let t = 60; t >= 0; t--){
    text.innerHTML += "<br>" + t.toString();
}
