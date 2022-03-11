const agendaPessoal = [
    {
        nome: 'Thiago',
        endereco: 'aquele lá msm',
        cep: '1234567',
        bairro: 'teste',
        telefone: 11112222
    },
    {
        nome: 'Bruno',
        endereco: 'Asilo',
        cep: '09876521',
        bairro: 'Velholândia',
        telefone: 99999999
    },
    {
        nome: 'Adriana',
        endereco: 'aquele outro',
        cep: '1234447',
        bairro: 'Vila teste',
        telefone: 11112222
    },
    {
        nome: 'Carlos',
        endereco: 'aquele outro tb',
        cep: '1233367',
        bairro: 'teste',
        telefone: 11113322
    },
    {
        nome: 'Roberta',
        endereco: 'Não sei mais',
        cep: '1234567',
        bairro: 'teste',
        telefone: 11888222
    },
]


function orderedList(array){
    let listname = []; let menorTemporario = ""

    for(let i = 0; i < array.length; i++){
        listname.push(array[i].nome)
    }

    for(let j = 0; j < 1; j++){
        menorTemporario = j
        for(k = i + 1; k < 1; k++){
            if (agendaPessoal[i][0] > agendaPessoal[j][0]) {
                iMenor = k;
            }
        }

    }
}

orderedList(agendaPessoal)