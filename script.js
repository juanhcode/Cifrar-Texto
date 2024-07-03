function encriptar() {
    const texto = document.querySelector("#textoValor").value;
    const textoCifrado = texto
        .replace(/e/gi, "enter")
        .replace(/i/gi, "imes")
        .replace(/a/gi, "ai")
        .replace(/o/gi, "ober")
        .replace(/u/gi, "ufat");

    document.querySelector("#textoFinal").value = textoCifrado;
}

function desencriptar() {
    const texto = document.querySelector("#textoValor").value;
    const textoDescifrado = texto
        .replace(/enter/gi, "e")
        .replace(/imes/gi, "i")
        .replace(/ai/gi, "a")
        .replace(/ober/gi, "o")
        .replace(/ufat/gi, "u");

    document.querySelector("#textoFinal").value = textoDescifrado;
}

function copiar() {
    const texto = document.getElementById("textoFinal");
    texto.select();
    texto.setSelectionRange(0, 999999); // Para dispositivos móviles
    document.execCommand("copy");
    alert("Texto copiado");
}

document.getElementById("botonEncriptar").onclick = encriptar;
document.getElementById("botonDesencriptar").onclick = desencriptar;
document.getElementById("botonCopiar").onclick = copiar;
