function casasIguais(a, b, c){
    var casaA = $(a);
    var casaB = $(b);
    var casaC = $(c);

    if( (casaA1 == "x") && (casaA2 == "x") && (casaA3 == "x")){
            vencedor = "1";
        return true;
    }
    else{
        return false;
    }
}
function verificarFimDeJogo(){
    if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ){
        $("#resultado").html("<h1>O jogador " + vencedor + "venceu! </h1>");
        $(".casa").off("click");
    }
}
