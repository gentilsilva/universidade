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
    if(valor1.value != "" && valor2.value != "") {
        return valor1.value = Math.E;
    } else if(valor1.value != "") {
        valor2.value = Math.E;
    } else {
        return valor1.value = Math.E;
    }
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
    if(valor1.value != "" && valor2.value != "") {
        return valor1.value = Math.PI;
    } else if(valor1.value != "") {
        valor2.value = Math.PI;
    } else {
        return valor1.value = Math.E;
    }
}

function inverso() {
    return resultado.innerHTML = 1 / Number(valor1.value);
}

// Verificar com professor
// function funcaoEuler() {
//     let equacao1 = (Math.E ** (Number(valor1.value) * Number(valor2.value)));
//     let equacao2 = (Math.E ** (Number(valor1.valor1) * Number(valor2.value)));
// }

function logaritmo() {
    let logaritimando = 0;
    let base = 0;
    let logaritimo = 0;

    if(valor2.value != "") {
        logaritimando = Math.log(valor1.value) / Math.log(10);
        base = Math.log(valor2.value) / Math.log(10);
        log = logaritimando / base;

        return resultado.innerHTML = log;
    } else {
        logaritimando = Math.log(valor1.value) / Math.log(10);
        base = Math.log(Math.E) / Math.log(10);
        log = logaritimando / base;

        return resultado.innerHTML = log;
    }

}

function sen() {
    if(valor1.value != "" && valor2.value == "") {
        let graus = Math.sin(valor1.value);
        let conta = graus * Math.PI / 180;
        return resultado.innerHTML = conta;
    } else if(valor2.value != "" && valor1.value == "") {
        let conta = valor2.value * Math.PI / 180;
        let rad = Math.rad(conta)
        return resultado.innerHTML = rad
    } else {
        return alert("Entre somente com um valor")
    }
}