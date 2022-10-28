let nome = document.getElementById("Nome")
let prontuario = document.getElementById("Prontuario")
let senha = document.getElementById("Senha")
let confirmarSenha = document.getElementById("CSenha")
let texto = document.getElementById("p")
let btn = document.getElementById("btn")
let incremento = document.getElementById("incremento")
let btnIncrement = document.getElementById("btn-increment")
let btnZerar = document.getElementById("btn-zerar")

btn.addEventListener("click", (e) => {
    e.preventDefault()
    if(!nome.value || !prontuario.value || !senha.value || !confirmarSenha.value){
        texto.textContent = "Valores Vazio"
        color(false)
    }
    else if(senha.value !== confirmarSenha.value){
        texto.textContent = "Senha e Confirmar Senha estão incorretos"
        color(false)
    }
    else{
        texto.textContent = "Cadastrado com sucesso"
        color(true)
    }
})

const color = (element) => {
    if(element){
        texto.classList.remove("error")
        texto.classList.add("success")
    }
    else{
        texto.classList.remove("success")
        texto.classList.add("error")
    }
}

btnIncrement.addEventListener("click", () => {
    incremento.textContent = parseInt(incremento.textContent) + 1
})

btnZerar.addEventListener("click", () => {
    incremento.textContent = 0
})