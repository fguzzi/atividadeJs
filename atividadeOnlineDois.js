// evento em 01/11/22, data atual 16/08/22, restando ainda 90 vagas

const rsc = require("readline-sync")

let dataEvento = new Date('11/01/2022');  
let dataAtual = new Date('06/18/2022');   
let qtdeVagas = 90  
let idade = rsc.questionInt("Digite sua idade: ");

if(idade < 18 || (dataEvento < dataAtual)){
    console.log("Inscrição não aceita. Verifique sua idade ou data do evento.Evento somente para maiores de idade.")
}else{
    if(qtdeVagas < 100){
        console.log("Inscrição pode ser realizada.")
        let nome = rsc.question("Digite seu nome: ");
        let documento = rsc.questionInt("Digite numero de documento: ");
        console.log("Inscrição realizada.")
    }else{
        console.log("Vagas esgotadas. Aguarde outros eventos.")
    }
}