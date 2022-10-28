let valor1 = document.querySelector('.valor1');
let valor2 = document.querySelector('.valor2');
let resultado = document.querySelector('.resultado');

function somar() {    
    return resultado.innerHTML = Number(valor1.value) + Number(valor2.value);
}

function subtrair() {
    return resultado.innerHTML = Number(valor1.value) - Number(valor2.value);
}

function multiplicar() {
    return resultado.innerHTML = Number(valor1.value) * Number(valor2.value);
}

function dividir() {
    return resultado.innerHTML = Number(valor1.value) / Number(valor2.value);
}

function potenciacao() {
    let resposta = (Number(valor1.value) ** Number(valor2.value)).toLocaleString();
    if(resposta.length > 15) {
        return resultado.innerHTML = (Number(valor1.value) ** Number(valor2.value)).toExponential();
    }
    return resultado.innerHTML = Number(valor1.value) ** Number(valor2.value);
}

function fatoracao() {
    let fatorial = 1;
    let fator = Number(valor1.value);
    for(i = fator; i > 0; i--) {
        fatorial *= fator;
        fator--;
    }
    return resultado.innerHTML = fatorial;
}

function euler() {
   return valor1.value = Math.E;
}

function fibonacci() {
    let entrada = Number(valor1.value);
    let anterior = 0;
    let posterior = 0;
    let valorFinal = 0;
    let ultimoValor = 0;

    for(i = 0; i < entrada; i++) {
        if(i == 0) {
            anterior = 1;
            posterior = 1;
            valorFinal = 1;
            ultimoValor = 1;
        }
        if(i == 1) {
            valorFinal += 1;
        }
        if(i > 1) {
            valorFinal += anterior + posterior;
            ultimoValor = anterior + posterior;
            anterior = posterior;
            posterior = ultimoValor;
        }
    }
    return resultado.innerHTML = valorFinal;
}

function pi() {
    return valor1.value = Math.PI;
}

function inverso() {
    return resultado.innerHTML = 1 / Number(valor1.value);
}

function funcaoEuler() {
    let equacao1 = (Math.E ** (Number(valor1.value) * Number(valor2.value)));
    let equacao2 = (Math.E ** (Number(valor1.valor1) * Number(valor2.value)));
}