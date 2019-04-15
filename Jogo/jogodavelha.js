var jogadorAtivo = 'X';

function trocaJogador() {
    if(jogadorAtivo !== 'X'){
        jogadorAtivo = 'X';
    }else{
        jogadorAtivo = 'O';
    }
    
    document.getElementById('labelTitulo').textContent = 'É a vez do jogador: ' + jogadorAtivo;
}

function clickou(botao) {
    botao.value = jogadorAtivo;
    console.log(Math.trunc(botao.id / 3));
    console.log(botao.id % 3);
    trocaJogador();
}

function limpar() {
    document.querySelectorAll("input[class$='casa']").forEach(element => {
        element.value = '';
    });
}

window.onload = trocaJogador;