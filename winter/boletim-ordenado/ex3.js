/* Desenvolva um programa que leia quatro notas bimestrais de oito alunos e apresente  no final os registros desses alunos ordenados alfabeticamente pelo campo nome de forma crescente.*/

function boletimOrdenado(){
    const quantidadeAlunos = parseInt(prompt("Quantos alunos deseja cadastrar? "))
    let boletim = new Array;

    let linha = boletim.length; let coluna = boletim.length

    for(let i = 0; i < linha; i++){
        for(let j = 0; j < coluna; j++){
            switch(j){
                case 0:
                    boletim[i][j] = prompt("Informe o nome do aluno: ")
                    break
                case 1:
                    boletim[i][j] = parseFloat(prompt("Informe a 1ª nota: "))
                    break
                case 2:
                    boletim[i][j] = parseFloat(prompt("Informe a 2ª nota: "))
                    break
                case 3:
                    boletim[i][j] = parseFloat(prompt("Informe a 3ª nota: "))
                    break
                case 4:
                    boletim[i][j] = parseFloat(prompt("Informe a 3ª nota: "))
                    break
            }
        }
    }
    console.log(boletim, quantidadeAlunos)
}



function boletimVirtual(){
    const qtdAlunos = 8;
    
    for(let i = 0; i < 8; i++){
        for(let j = 0; j < 5; j++){
            boletim.nome[i][j] = 'thiago'
            boletim.notas[i][j] = 0
        }
    }
    let boletim = {
        nome: nome,
        notas: nota
    }
    console.log(boletim)
}

boletimVirtual()
