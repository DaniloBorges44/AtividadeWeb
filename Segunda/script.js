let message = document.getElementById('messageField').value;
let intervalo;

function scrollMessage() {
    const firstChar = message.substring(0, 1);
    message = message.substring(1) + firstChar;
    document.getElementById('messageField').value = message;
}

function Iniciar() {
    intervalo = setInterval(scrollMessage, 100);
}

function Parar() {
    clearInterval(intervalId);
}