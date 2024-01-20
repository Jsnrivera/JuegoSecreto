let numeroSecreto = 0;
let intento = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

function asignarTextoElemento(elemento, texto) {
    let ElementoHTML = document.querySelector(elemento);
    ElementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() {
    let numeroDeUsuario = parseInt(document.getElementById(`valorUsuario`).value);

    if (numeroDeUsuario === numeroSecreto) {
        asignarTextoElemento(`p`, `acertaste en ${intento} intentos ${intento == 1 ? 'vez' : 'veces'}`);
        document.getElementById(`reiniciar`).removeAttribute(`disabled`);
    } else {
        if (numeroDeUsuario > numeroSecreto) {
            asignarTextoElemento(`p`, `el numero es menor`);
        } else {
            asignarTextoElemento(`p`, `el numero es mayor`);
        }
        intento++;
        limpiarCaja();
    }
    return;
}

function condicionesIniciales() {
    asignarTextoElemento('h1', 'Hora del Desafío');
    asignarTextoElemento(`p`, `Escribe un numero del 1 al ${numeroMaximo}`);
    numeroSecreto = generarNumeroSecreto();
    intento = 1;
}

function reiniciarJuego() {
    limpiarCaja();
    condicionesIniciales();
    document.querySelector(`#reiniciar`).setAttribute(`disabled`, `true`);
}

function limpiarCaja() {
    document.getElementById(`valorUsuario`).value = '';
}

function generarNumeroSecreto() {
    let numeroGenerado = Math.floor(Math.random() * numeroMaximo + 1);
    if (listaNumerosSorteados.length === numeroMaximo) {
        asignarTextoElemento(`p`, `Se acabaron los numeros`);
    }
    if (listaNumerosSorteados.includes(numeroGenerado)) {
        return generarNumeroSecreto();
    } else {
        listaNumerosSorteados.push(numeroGenerado);
        return numeroGenerado;
    }
}

condicionesIniciales();