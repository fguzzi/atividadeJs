let nomePeca = "Farol";
let pesoPeca = 300;
let listaQtdePecas = 8;

if(pesoPeca >= 100){
    console.log("Peso dentro do critério para cadastro da peça.");
}else {
    console.log("Peso fora do critério para cadastro.");
}


if(listaQtdePecas > 10){
    console.log("Caixa não tem capacidade suficiente. Não cadastrada peça.");
}else{
    console.log("Caixa com espaço disponível.");
}

if(nomePeca.length < 3){
    console.log("Nome inválido. Digite pelo menos 3 caracteres.")
}else{
    console.log("Nome correto.")
}
