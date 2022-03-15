function showMultipleTable(number){

    try {
        number = parseInt(prompt("Digite um número: "))
        if(!number) throw new ReferenceError("Parametro ausente");
        if(typeof number !== "number") throw new TypeError("Parametro do tipo incorreto");

        console.log(`Tábuada do ${number}:\n`);
        const resolution = document.getElementById("resolution")

        let result = ""
        for(let i = 0; i <= 10; i++){
            result += `${number} x ${i} = ${number * i} <br>`
        }

        resolution.innerHTML = result

    } catch(error) {
        if(error instanceof ReferenceError) console.log(`Erro do tipo ReferenceError, ${error.message}`);    
        if(error instanceof TypeError) console.log(`Erro do tipo TypeError, ${error.message}`)    
        
    }   
}

function eraseMultipleTable(){
    resolution.innerHTML = "Erased"

}
