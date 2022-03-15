function media(args){
    let soma = 0
    let notas = []
    try{
        args = parseFloat(prompt("Quantos provas você fez? ", "Exemplo: 3"))

        if(!args) throw new ReferenceError("Argumento ausente")
        //if(args != Float32Array) throw new TypeError("Argumento precisa ser um número")

        for(let i = 0; i < args; i++){
            notas = parseFloat(prompt("Digite sua nota: ", "Exemplo: 6"))
            soma += notas
        }
        const media = soma/args
        console.log(`Número de provas: ${args}, Média: ${media}`)

    } catch(error){
        if(error instanceof ReferenceError) console.log(`Erro do tipo RefereceError: ${error.message}`)
        if(error instanceof TypeError) console.log(`Erro do tipo TypeError: ${error.message}`)

    } finally {
        console.log("Fim do programa")
    }
}

media()