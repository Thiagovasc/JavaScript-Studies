function sumPairArray(args){
    try {
        if(!args || args != Number) throw new TypeError("Type error identificado")
        args = parseInt(prompt("Quantos valores deseja utilizar?"))
        let soma = 0; let valor = []
    
        for(let i = 0; i < args; i++){
            valor = parseInt(prompt("Digite um valor: "))
            if(valor % 2 === 0) {
                soma += valor
            }
        }
    } catch(error){
        if(error instanceof TypeError) console.log("Argumento ausente ou do tipo errado, digite um inteiro")
    } finally {
        console.log(`O resultado da soma dos pares é: ${soma}`)
    }
}

sumPairArray()