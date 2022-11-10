let submitButton = document.getElementById("btn-submit")
let verificou = false;

function verificaPrimeiroDigito(valor) {
    let primeiroDigito = 0;
    let verificaPrimeiroDigito = 0;
    let multiplicador = 10;
    let valorString = valor.toString();
    let tamanhoValor = valorString.length;
    let valorArr = [];

    for(let i = 0; i < valorString.length; i++) {
        valorArr.push(valorString[i])
        if(i == valorString.length - 2) {
            primeiroDigito = valorString[i];
        }
    }
    for(let i = 0; i < tamanhoValor - 2; i++) {
        verificaPrimeiroDigito += valorArr[i] * multiplicador;
        multiplicador--;
    }

    verificaPrimeiroDigito = verificaPrimeiroDigito % 11;

    if(verificaPrimeiroDigito != 0 || verificaPrimeiroDigito != 1) {
        verificaPrimeiroDigito = 11 - verificaPrimeiroDigito;
    }

    if(verificaPrimeiroDigito == primeiroDigito) {
        verificou = true;
    } else {
        verificou = false
    }
}

function verificaSegundoDigito(valor) {
    let segundoDigito = 0;
    let verificaSegundoDigito = 0;
    let multiplicador = 10;
    let valorString = valor.toString();
    let tamanhoValor = valorString.length;
    let valorArr = [];

    for(let i = 0; i < valorString.length; i++) {
        valorArr.push(valorString[i])
        if(i == valorString.length - 1) {
            segundoDigito = valorString[i];
        }
    }
    for(let i = 1; i < tamanhoValor - 1; i++) {
        verificaSegundoDigito += valorArr[i] * multiplicador;
        multiplicador--;
    }

    verificaSegundoDigito = verificaSegundoDigito % 11;

    if(verificaSegundoDigito != 0 || segundoDigito != 1) {
        verificaSegundoDigito = 11 - verificaSegundoDigito;
    }

    if(verificaSegundoDigito == segundoDigito) {
        verificou = true;
    } else {
        verificou = false
    }

}

function verificaCpf() {
    if(verificou == true) {
        
    }
}


// function verificaCpf(valor) {
//     let primeiroDigito = 0;
//     let segundoDigito = 0;
//     let multiplicador = 10;
//     let valorString = valor.toString();
//     let tamanhoValor = valorString.length;
//     let valorArr = [];

//     for(let i = 0; i < valorString.length; i++) {
//         valorArr.push(valorString[i])
//     }
//     for(let i = 0; i < tamanhoValor - 2; i++) {
//         primeiroDigito += valorArr[i] * multiplicador;
//         multiplicador--;
//     }

//     primeiroDigito = primeiroDigito % 11;
//     multiplicador = 10;

//     for(let i = 1; i < tamanhoValor - 1; i++) {
//         segundoDigito += valorArr[i] * multiplicador;
//         multiplicador--;
//     }

//     segundoDigito = segundoDigito % 11;

//     if(primeiroDigito != 0 || primeiroDigito != 1) {
//         primeiroDigito = 11 - primeiroDigito;
//     }
//     if(segundoDigito != 0 || segundoDigito != 1) {
//         segundoDigito = 11 - segundoDigito;
//     }

//     console.log(primeiroDigito);
// }