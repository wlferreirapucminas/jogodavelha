var jogadorAtivo = '';
var matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
var placar = [0, 0]

function atualizaPlacar() {
    if(jogadorAtivo == 'X'){
        placar[0]++;
        document.getElementById('placarX').textContent = "X : " + placar[0];
    }else{
        placar[1]++;
        document.getElementById('placarO').textContent = "O : " + placar[1];
    }
}

function verificaVitoria(){
    //linhas
    let soma0 = matriz[0][0] + matriz[0][1] + matriz[0][2];
    let soma1 = matriz[1][0] + matriz[1][1] + matriz[1][2];
    let soma2 = matriz[2][0] + matriz[2][1] + matriz[2][2];

    //colunas
    let soma3 = matriz[0][0] + matriz[1][0] + matriz[2][0];
    let soma4 = matriz[0][1] + matriz[1][1] + matriz[2][1];
    let soma5 = matriz[0][2] + matriz[1][2] + matriz[2][2];

    //diagonais
    let soma6 = matriz[0][0] + matriz[1][1] + matriz[2][2];
    let soma7 = matriz[0][2] + matriz[1][1] + matriz[2][0];

    if(soma0 == 3 || soma0 == -3){
        vitoria(0);
        return true;
    }else if(soma1 == 3 || soma1 == -3){
        vitoria(1);
        return true;
    }else if(soma2 == 3 || soma2 == -3){
        vitoria(2);
        return true;
    }else if(soma3 == 3 || soma3 == -3){
        vitoria(3);
        return true;
    }else if(soma4 == 3 || soma4 == -3){
        vitoria(4);
        return true;
    }else if(soma5 == 3 || soma5 == -3){
        vitoria(5);
        return true;
    }else if(soma6 == 3 || soma6 == -3){
        vitoria(6);
        return true;
    }else if(soma7 == 3 || soma7 == -3){
        vitoria(7);
        return true;
    }
    return false;
}

function vitoria(tipo) {
    let casas;
    if     (tipo == 0){ casas = [0, 1, 2]; }
    else if(tipo == 1){ casas = [3, 4, 5]; }
    else if(tipo == 2){ casas = [6, 7, 8]; }
    else if(tipo == 3){ casas = [0, 3, 6]; }
    else if(tipo == 4){ casas = [1, 4, 7]; }
    else if(tipo == 5){ casas = [2, 5, 8]; }
    else if(tipo == 6){ casas = [0, 4, 8]; }
    else if(tipo == 7){ casas = [2, 4, 6]; }

    desabilitarTodos();

    document.getElementById(casas[0]).style.backgroundColor = 'red';
    document.getElementById(casas[1]).style.backgroundColor = 'red';
    document.getElementById(casas[2]).style.backgroundColor = 'red';
}

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

    matriz[Math.trunc(botao.id / 3)][botao.id % 3] = jogadorAtivo === 'X' ? 1 : -1;
    botao.disabled = true;

    if(verificaVitoria()){
        atualizaPlacar();
    }
    trocaJogador();
}

function limpar() {
    document.querySelectorAll("input[class$='casa']").forEach(element => {
        element.value = '';
        element.disabled = false;
        element.style.backgroundColor = '';
    });
    matriz = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
}

function desabilitarTodos(){
    document.querySelectorAll("input[class$='casa']").forEach(element => {
        element.disabled = true;
    });
}

function preparaTela() {
    document.getElementById('placarX').textContent = "X : " + placar[0]
    document.getElementById('placarO').textContent = "O : " + placar[1]
    trocaJogador();
}

window.onload = preparaTela;