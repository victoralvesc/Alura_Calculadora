const infoPrimeiroValor = parseInt(prompt("Digite o Primeiro Valor:"));
const operacao = prompt("Digite: 1 - dividir, 2 - multiplicar, 3 - somar e 4 - subtrair: ");
const infoSegundoValor = parseInt(prompt("Digite o Segundo Valor:"));

if (
    operacao == 1) {
    const resultado = infoPrimeiroValor / infoSegundoValor
    document.write("<h2>" + infoPrimeiroValor + " / " + infoSegundoValor + " = " + resultado + "</h2>")
}
else if (
    operacao == 2) {
    const resultado = infoPrimeiroValor * infoSegundoValor
    document.write("<h2>" + infoPrimeiroValor + " x " + infoSegundoValor + " = " + resultado + "</h2>")
}
else if (
    operacao == 3) {
    const resultado = infoPrimeiroValor + infoSegundoValor
    document.write("<h2>" + infoPrimeiroValor + " + " + infoSegundoValor + " = " + resultado + "</h2>")
}
else if (
    operacao == 4) {
    const resultado = infoPrimeiroValor - infoSegundoValor
    document.write("<h2>" + infoPrimeiroValor + " - " + infoSegundoValor + " = " + resultado + "</h2>")
}
else {
   document.write("<h2> Opção inválida </h2>")
}





//trouxe <h2> do index.html
//document.write() - escrevendo na tela 
//concatenação - (juntar palavra com variavél)
//parseInt - valor inteiro.
//parseFloat - valor decimal.

//------------ usando if --------------
//if = se
//else = senão
//else if = senão se