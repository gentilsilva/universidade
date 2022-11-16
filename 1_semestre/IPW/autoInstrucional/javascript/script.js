let valor1 = document.querySelector('.valor1');
let valor2 = document.querySelector('.valor2');
let resultado = document.querySelector('.resultado');
let arrFibonacci = [];

// Função para somar os dois inputs
function somar() {    
    resultado.innerHTML = Number(valor1.value) + Number(valor2.value);
}

// Função para subtrair o primeiro input pelo segundo
function subtrair() {
    resultado.innerHTML = Number(valor1.value) - Number(valor2.value);
}

// Função que multiplica o primeiro input pelo segundo
function multiplicar() {
    resultado.innerHTML = Number(valor1.value) * Number(valor2.value);
}

// Função que divide o primeiro input pelo segundo
function dividir() {
    resultado.innerHTML = Number(valor1.value) / Number(valor2.value);
}

// Função que calcula o primeiro input elevado ao valor do segundo
function potenciacao() {
    let resposta = (Number(valor1.value) ** Number(valor2.value)).toLocaleString();
    if(resposta.length > 15) {
        resultado.innerHTML = (Number(valor1.value) ** Number(valor2.value)).toExponential();
    }
    resultado.innerHTML = Number(valor1.value) ** Number(valor2.value);
}


// Função recursiva para calcular fatorial
function fatorial(fator) {
    if(fator < 0) {
        return false;
    } else {
        let resposta =  fator === 0 ? 1 : fator * fatorial((fator - 1));
        return resultado.innerHTML = resposta;
    }
}

// function fatorial(fator) {
//     let fatorial = 1;
//     for(i = fator; i > 0; i--) {
//         fatorial *= i;
//     }
//     return resultado.innerHTML = fatorial;
// }

// Função para calcular número de euler
function euler(fator) {
    let somatoria = 1;
    for(let i = 1; i <= fator; i++) {
        somatoria += 1/fatorial(i);
    }
    return resultado.innerHTML = somatoria;
}

// Calcula o fibonacci usando recursividade
function fibonacci(fator) {
    if(fator < 2) {
      return fator;
    } else {
      let nFibonacci = fibonacci(fator - 1) + fibonacci(fator - 2);
      return nFibonacci
    }
}

// Retorna a sequência de fibonacci no html
function chamarFibonacci(fator) {
    for(let i = 1; i <= fator; i++) {
        arrFibonacci.push(fibonacci(i));
    }
    resultado.innerHTML = arrFibonacci;
}

// Função que utiliza o primeiro input para calcular a sequência de Fibonacci
// function fibonacci() {
//     let entrada = Number(valor1.value);
//     let lista = [];
//     if(valor1.value == "") {
//         alert("Preencha o primeiro campo para realizar esta operação");
//     }
//     for(i = 0; i < entrada; i++) {
//         if(i == 0 || i == 1) {
//             lista.push(1)
//         } 
//         if(i > 1) {
//             let soma = lista[i - 1] + lista[i - 2];
//             lista.push(soma);
//         }
//     }
//     resultado.innerHTML = lista;
// }

function pi() {
    resultado.innerHTML = Math.PI;
}

function inverso() {
    resultado.innerHTML = 1 / Number(valor1.value);
}

function eulerX(fator) {
    let e = 0;
    e = euler(fator);
    let resposta = e ** valor2.value;
    resultado.innerHTML = resposta;
}

function logaritmo() {
    let logaritimando = 0;
    let base = 0;
    let log = 0;

    if(valor2.value != "") {
        logaritimando = Math.log(valor1.value) / Math.log(10);
        base = Math.log(valor2.value) / Math.log(10);
        log = logaritimando / base;

        resultado.innerHTML = log;
    } else {
        logaritimando = Math.log(valor1.value) / Math.log(10);
        log = logaritimando;

        resultado.innerHTML = log;
    }

}

function seno() {
    let rad = 0;
    let sen = 0;
    if(valor1.value != "" && valor2.value == "") {
        rad = valor1.value * Math.PI / 180;
        sen = Math.sen(rad)
    } else if(valor2.value != "" && valor1.value == "") {
        rad = valor1.value * Math.PI / 180;
        sen = Math.sen(rad)
    } else {
        alert("Entre somente com um valor")
    }
    resultado.innerHTML = sen;
}

function cosseno() {
    let rad = 0;
    let cos = 0
    if(valor1.value != "" && valor2.value == "") {
        rad = valor1.value * Math.PI / 180;
        cos = Math.cos(rad)
    } else if(valor2.value != "" && valor1.value == "") {
        rad = valor1.value * Math.PI / 180;
        cos = Math.cos(rad)
    } else {
        alert("Entre somente com um valor")
    }
    resultado.innerHTML = cos;
}

function tangente() {
    let rad = 0;
    let tan = 0;
    if(valor1.value != "" && valor2.value == "") {
        rad = valor1.value * Math.PI / 180;
        tan = Math.tan(rad)
    } else if(valor2.value != "" && valor1.value == "") {
        rad = valor1.value * Math.PI / 180;
        tan = Math.tan(rad)
    } else {
        alert("Entre somente com um valor")
    }
    resultado.innerHTML = tan;
}

function modulo() {
    if(valor2.value == "" || valor2.value == 0) {
        alert("Segundo valor não pode ser vazio ou zero!")
    } else {
        let resto = valor1.value % valor2.value;
        resultado.innerHTML = resto; 
    }
}

function binario() {
    let binario = []
    let dividendo = valor1.value;
    do {
        let resto = dividendo % 2;
        dividendo = Number.parseInt(dividendo / 2);
        binario.push(resto);
    } while(dividendo > 1)
    binario.push(1);
    binario = binario.reverse();
    binario = binario.join("");
    resultado.innerHTML = binario;
}

function octa() {
    let octa = []
    let dividendo = valor1.value;
    do {
        octa.push(dividendo % 8);
        dividendo = Math.floor(dividendo / 8);
    } while(dividendo > 8 - 1)
    octa.push(dividendo)
    octa = octa.reverse();
    octa = octa.join("");
    resultado.innerHTML = octa;
}

function hexa() {
    let total = []
    let dividendo = valor1.value;
    do {
        total.push(dividendo % 16);
        dividendo = Math.floor(dividendo / 16);
    } while(dividendo > 16 - 1)
    for(let i = 0; i < total.length; i++) {
        if(total[i] == 10) {
            total[i] = "A";
        } else if(total[i] == 11) {
            total[i] = "B";
        } else if(total[i] == 12) {
            total[i] = "C";
        } else if(total[i] == 13) {
            total[i] = "D";
        } else if(total[i] == 14) {
            total[i] = "E";
        } else if(total[i] == 15) {
            total[i] = "F";
        }
    }
    if(dividendo != 0) {
        total.push(dividendo);
    }
    total = total.reverse();
    total = total.join(""); 
    resultado.innerHTML = total;
}

function baseN() {
    let total = []
    let dividendo = valor1.value;
    let base = valor2.value;
    if(valor2.value > 9) {
        alert("Valor de base não pode ser maior que 9!")
    } else {
        do {
            total.push(dividendo % base);
            dividendo = Math.floor(dividendo / base);
        } while(dividendo > valor2.value - 1)
        total.push(dividendo);
        total = total.reverse();
        total = total.join(""); 
        resultado.innerHTML = total;
    }
}