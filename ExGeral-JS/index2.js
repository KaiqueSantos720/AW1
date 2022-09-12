
let numero = prompt("Digite um número:");
numero = parseInt(numero);
let cont = 0
for (let i = 1; i <= 100; i++) {
    document.write(numero + ' x ' + i + ' = ' + (numero * i) + '<br>');
    cont++
    if(cont == 10){
        document.write("<hr>")
        cont = 0
    }
}