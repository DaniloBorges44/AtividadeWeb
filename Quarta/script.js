function soma() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    document.getElementById('resultado').value = num1 + num2;
}

function subtracao() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    document.getElementById('resultado').value = num1 - num2;
}

function divisao() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    document.getElementById('resultado').value = num1 / num2;
}

function multiplicacao() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    document.getElementById('resultado').value = num1 * num2;
}

function porcentagem() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    document.getElementById('resultado').value = (num1 / 100) * num2;
}

function logaritmo() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    document.getElementById('resultado').value = Math.log(num1);
}

function exponenciacao() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    const num2 = parseFloat(document.getElementById('numero2').value);
    document.getElementById('resultado').value = Math.pow(num1, num2);
}

function radiciacao() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    document.getElementById('resultado').value = Math.sqrt(num1);
}

function fatorial() {
    const num1 = parseInt(document.getElementById('numero1').value);
    let resultado = 1;
    for (let i = 1; i <= num1; i++) {
        resultado *= i;
    }
    document.getElementById('resultado').value = resultado;
}

function seno() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    document.getElementById('resultado').value = Math.sin(num1);
}

function coseno() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    document.getElementById('resultado').value = Math.cos(num1);
}

function tangente() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    document.getElementById('resultado').value = Math.tan(num1);
}

function tangenteHiperbolica() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    document.getElementById('resultado').value = Math.tanh(num1);
}

function senoHiperbolico() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    document.getElementById('resultado').value = Math.sinh(num1);
}

function cossenoHiperbolico() {
    const num1 = parseFloat(document.getElementById('numero1').value);
    document.getElementById('resultado').value = Math.cosh(num1);
}
