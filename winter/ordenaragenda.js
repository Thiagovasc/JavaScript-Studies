const agendaPessoal = [[], [], [], [], []];

let l = agendaPessoal.length;
let col = agendaPessoal.length;

for (i = 0; i < l; i++) {

    for (j = 0; j < col; j++) {

        switch (j) {
            case 0:
                agendaPessoal[i][j] = prompt("Digite seu nome:");;
                break;
            case 1:
                agendaPessoal[i][j] = prompt("Digite seu endereco:");
                break;
            case 2:
                agendaPessoal[i][j] = prompt("Digite seu codigo postal:");
                break;
            case 3:
                agendaPessoal[i][j] = prompt("Digite seu codigo bairro");
                break;
            case 4:
                agendaPessoal[i][j] = prompt("Digite seu telefone");
                break;

            default:
                break;
        }
    }
}

for (i = 0; i < l; i++) {

    iMenor = i;

    for (j = i + 1; j < l; j++) {

        if (agendaPessoal[i][0] > agendaPessoal[j][0]) {
            iMenor = j;
        }
    }

    for (k = 0; k < col; k++) {
        let aux = agendaPessoal[i][k];
        agendaPessoal[i][k] = agendaPessoal[iMenor][k];
        agendaPessoal[iMenor][k] = aux;
    }
}

for (i = 0; i < l; i++) {
    console.log("-------------");
    for (j = 0; j < col; j++) {
        console.log('' + agendaPessoal[i][j] + '');
    }
}