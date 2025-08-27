// Operações matemáticas da calculadora
const operacoes = {
    '+': (a, b) => a + b,
    '-': (a, b) => a - b,
    '*': (a, b) => a * b,
    '/': (a, b) => b !== 0 ? a / b : 'Erro'
};

let display = '';

//detectar clique
const clique = (evento) => {
    const botaoClicado = evento.target.value;
    console.log('Botão clicado:', botaoClicado);
    
    // Se clicou em "C", limpar tudo
    if (botaoClicado === 'C') {
        display = ''; // Limpa a variável
    } else if (botaoClicado === '=') {
        // Encontrar o operador no display
        let operador = '';
        let primeiroNumero = '';
        let segundoNumero = '';
        
        // Procurar por +, -, *, / no display
        for (let i = 0; i < display.length; i++) {
            if (['+', '-', '*', '/'].includes(display[i])) {
                operador = display[i];
                primeiroNumero = display.substring(0, i);
                segundoNumero = display.substring(i + 1);
                break;
            }
        }
        
        // Se encontrou operador e números, calcular
        if (operador && primeiroNumero && segundoNumero) {
            const num1 = parseFloat(primeiroNumero);
            const num2 = parseFloat(segundoNumero);
            const resultado = operacoes[operador](num1, num2);
            
            // Mostrar operação completa com resultado
            display = display + '=' + resultado;
        }
    } else {
        // Para outros botões, apenas concatenar
        display += botaoClicado;
    }
    
    console.log('Display atual:', display);
    
    // Mostra na tela da calculadora
    document.getElementById('pantalla').value = display;
};

//conectar os cliques
document.addEventListener('DOMContentLoaded', () => {
    const todosOsBotoes = document.querySelectorAll('input[type="button"]');

    todosOsBotoes.forEach(botao => {
        botao.addEventListener('click', clique);
    });
});
