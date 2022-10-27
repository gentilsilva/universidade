let valor1 = Number(document.querySelector('.valor1').value);
let valor2 = Number(document.querySelector('.valor2').value);

function somar() {    
    let soma = valor1 + valor2;
    return document.querySelector('.resposta').innerHTML = soma;
}

function subtrair() {
    let subtrai = valor1 - valor2;
    return document.querySelector('.resposta').innerHTML = subtrai;
}

function multiplicar() {
    let multiplica = valor1 * valor2;
    return document.querySelector('.resposta').innerHTML = multiplica;
}

function dividir() {
    let divisao = valor1 / valor2;
    return document.querySelector('.resposta').innerHTML = divisao;
}

function potenciacao() {
    let potencia = valor1  ** valor2;
    return document.querySelector('.resposta').innerHTML = potencia;
}