const operacoes = [
    { func: (n1, n2) => n1 + n2, nome: 'Somar' },
    { func: (n1, n2) => n1 * n2, nome: 'Multiplicar' },
    { func: (n1, n2) => n1 / n2, nome: 'Dividir' },
    { func: (n1, n2) => n1 - n2, nome: 'Subtrair' },
    { func: (n1, n2) => n1 ** n2, nome: 'Exponenciar' } 
]

let cont = 0

document.getElementById('operacao-anterior').addEventListener('click', () => {
    cont--; 
    if (0 > cont) cont = operacoes.length - 1;
    alterarOperacao();
});

document.getElementById('proxima-operacao').addEventListener('click', () => {
    cont++;  
    if (operacoes.length <= cont) cont = 0;
    alterarOperacao();
})

const inputs = document.querySelectorAll('.calcular');

inputs.forEach(input => input.addEventListener('input', () => calcular()))

function calcular() {
    const num = [];
    for (const input of inputs) {
        num.push(parseInt(input.value));
    }

    document.getElementById('resultado').textContent = `Resultado: ${operacoes[cont].func(num[0], num[1])}`
}

function alterarOperacao() {
    document.getElementById('operacao').textContent = operacoes[cont].nome
    
    calcular();
    
    const proximo = operacoes[cont + 1 == operacoes.length ? 0 : cont + 1].nome;
    const ultimo = operacoes[cont - 1 == -1 ? operacoes.length - 1 : cont - 1].nome;

    document.getElementById('proxima-operacao').textContent = proximo;
    document.getElementById('operacao-anterior').textContent = ultimo;
}
