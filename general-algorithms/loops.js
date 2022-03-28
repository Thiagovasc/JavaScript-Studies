// Only variable and for loop
let number = parseInt(prompt("Digite um número: "));
console.log(`Tabuado do ${number}\n`)

for (let i = 0; i <= 10; i++) {
    console.log(`${number}x${i} = ${number * i}`)
}


// Function 1 with parameter and parameter's type verification
function tabuada(number){
    
    if(!number || number != Number) return "Parametro incorreto, digite um número por favor";

    console.log(`Tabuado do ${number}\n`)

    for (let i = 1; i <= 10; i++){
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

// Function 1 with error handling
function tabuada1_enhanced(number){

    try {
        if(!number) throw new ReferenceError("Parametro ausente");
        if(typeof number !== "number") throw new TypeError("Parametro do tipo incorreto");

        console.log(`Tábuada do ${number}:\n`);

        for(let i = 0; i <= 10; i++){
            console.log(`${number} x ${i} = ${number * i}`)
        }

    } catch(error) {
        if(error instanceof ReferenceError) console.log(`Erro do tipo ReferenceError, ${error.message}`);    
        if(error instanceof TypeError) console.log(`Erro do tipo TypeError, ${error.message}`)    
        
    }   
}


// Arrow function
const tabuada2 = (number) => {

    if(!number) {
        return "Digite um número por favor";
    }

    console.log(`Tabuado do ${number}\n`)

    for (let i = 1; i <= 10; i++) {
        console.log(`${number} x ${i} = ${number * i}`)
    }
}

tabuada1_enhanced([10]);