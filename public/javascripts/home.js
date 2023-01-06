var inputText
var finalText
var finalTextId

function encryptText() {
    var inputText = document.getElementById("textbox").value;
    finalText = inputText.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");
    document.getElementById("result").innerHTML = finalText;
}

function decryptText() {
    var inputText = document.getElementById("textbox").value;
    finalTextId = inputText.replace(/enter/g, "e").replace(/imes/g, "i").replace(/ai/g, "a").replace(/ober/g, "o").replace(/ufat/g, "u");
    document.getElementById("result").innerHTML = finalTextId;
}