var jogadorAtivo = '';
var matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]

function verificaVitoria(){
    let soma0 = matriz[0][0] + matriz[0][1] + matriz[0][2];
    let soma1 = matriz[1][0] + matriz[1][1] + matriz[1][2];
    let soma2 = matriz[2][0] + matriz[2][1] + matriz[2][2];
    let soma3 = matriz[0][0] + matriz[1][1] + matriz[2][2];
    let soma4 = matriz[0][2] + matriz[1][1] + matriz[2][0];

    if(soma0 == 3 || soma0 == -3){
        vitoria(0);
    }else if(soma1 == 3 || soma1 == -3){
        vitoria(1);
    }else if(soma2 == 3 || soma2 == -3){
        vitoria(2);
    }else if(soma3 == 3 || soma3 == -3){
        vitoria(3);
    }else if(soma4 == 3 || soma4 == -3){
        vitoria(4);
    }
}

function vitoria(tipo) {
    let casas;
    switch (tipo){
        case 0 :{
            casas = [0, 1, 2];
            break;
        }
        case 1 :{
            casas = [3, 4, 5];
            break;
        }
        case 2 :{
            casas = [6, 7, 8];
            break;
        }
        case 3 :{
            casas = [0, 4, 8];
            break;
        }
        case 4 :{
            casas = [2, 4, 6];
            break;
        }
    }
    desabilitarTodos();

    document.getElementById(casas[0]).style.backgroundColor = 'red';
    document.getElementById(casas[1]).style.backgroundColor = 'red';
    document.getElementById(casas[2]).style.backgroundColor = 'red';
}

function trocaJogador(forcar) {
    if(jogadorAtivo !== 'X' || forcar){
        jogadorAtivo = 'X';
    }else{
        jogadorAtivo = 'O';
    }
    
    document.getElementById('labelTitulo').textContent = 'É a vez do jogador: ' + jogadorAtivo;
}

function clickou(botao) {
    botao.value = jogadorAtivo;

    matriz[Math.trunc(botao.id / 3)][botao.id % 3] = jogadorAtivo === 'X' ? 1 : -1;
    botao.disabled = true;

    verificaVitoria();
    trocaJogador(false);
}

function limpar() {
    document.querySelectorAll("input[class$='casa']").forEach(element => {
        element.value = '';
        element.disabled = false;
        element.style.backgroundColor = '';
    });
    matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
    trocaJogador(true);
}

function desabilitarTodos(){
    document.querySelectorAll("input[class$='casa']").forEach(element => {
        element.disabled = true;
    });
}

window.onload = trocaJogador;