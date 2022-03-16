function calcImc(){

    let name = prompt("Inform your name: ")
    let height = parseFloat(prompt("Inform your height: "))
    let weight = parseFloat(prompt("Inform your weight: "))
    let imc = weight/(height ** 2); let statusPeso = ""

    // switch isn't possible with float values
    
    if(imc <= 16.9) statusPeso = "Muito abaixo do peso"
    else if(imc <= 18.4) statusPeso = "Abaixo do peso"
    else if(imc <= 24.9) statusPeso = "Peso normal"
    else if(imc <= 29.9) statusPeso = "Acima do peso"
    else if(imc <= 34.9) statusPeso = "Obesidade Grau I"
    else if(imc <= 40) statusPeso = "Obesidade Grau II"
    else if(imc > 40) statusPeso = "Obesidade Grau III"

    const imcTable = [
        name,
        height,
        weight,
        imc = imc.toFixed(2),
        statusPeso
    ]

    console.table(imcTable)
}

calcImc()