let nota1 = document.getElementById("nota1").value;
let nota2 = document.getElementById("nota2").value;
let nota3 = document.getElementById("nota3").value;
let text = document.getElementById("paragrafo");
let nome = document.getElementById("nome");

let media = ((parseFloat(nota1) + parseFloat(nota2) + parseFloat(nota3)) / 3).toFixed(2)
console.log(nota1)

document.getElementById("envio").addEventListener("click", () => {

    if((nota1 > 10 || nota1 < 0) || (nota2 > 10 || nota2 < 0) || (nota3 > 10 || nota3 < 0)){
        text.textContent = "Valores inseridos incorretamente"
    }
    else if(media >= 6){
        text.textContent = `${nome.value}, a média é: ${media}, Parabéns você foi aprovado`
        text.classList.add("aprovado")
    }
    else{
        text.textContent = `${nome.value}, a média é: ${media}, você foi reprovado`
        text.classList.add("reprovado")
    }

})

