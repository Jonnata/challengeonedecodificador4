var inputText
var finalText
var finalTextId

function encryptText() {
    var textArea = document.getElementById("textbox").value;
    finalText = textArea.replace("e", "enter").replace("i", "imes").replace("a", "ai").replace("o", "ober").replace("u", "ufat");
    document.getElementById("result").innerHTML = finalText;
}