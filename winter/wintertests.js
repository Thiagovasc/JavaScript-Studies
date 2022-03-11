
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

function ordenaArray(array){
    let maior_temporario = []
    for(let i = 0; i < array.length; i++){
        for(let j = 0; j < array.length; j++){
            if(array[i].nome[0] > array[j].nome[0]){
                maior_temporario.push(array[j].nome)
            }
        }
    }

    console.log(maior_temporario)
}


ordenaArray(agendaPessoal)