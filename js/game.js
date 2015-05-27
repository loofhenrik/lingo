/**
 * Created by henrikloof on 15-05-27.
 */

var ordLista = ["mjauu", "malin", "banan"];

var valtOrd = ordLista[Math.floor(Math.random() * 3)];

console.log(valtOrd);

var button = document.getElementsByTagName("button")[0]; //[] väljer första elementet i listan som det sparas ner i
button.addEventListener("click", function(){
    var användarOrd = document.getElementsByTagName("input")[0].value;

    if(användarOrd === valtOrd){
        alert("GRATTIS!")
    }
    else{
        alert("Försök igen!")
    }
});