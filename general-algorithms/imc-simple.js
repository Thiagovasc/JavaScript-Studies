function calcImc(){

    try {
        let username = prompt("Inform your name: ")
        let height = parseFloat(prompt("Inform your height: "))
        let weight = parseFloat(prompt("Inform your weight: "))
        if(!height && typeof height != "float") throw TypeError("Only numbers")
        else if(!weight && typeof weight != "float") throw TypeError("Only numbers")

        let imc = weight/(height ** 2); let statusPeso = ""
        
        // switch isn't possible with float values
        if(imc <= 16.9) statusPeso = "Very Underwight"
        else if(imc <= 18.4) statusPeso = "Underweight"
        else if(imc <= 24.9) statusPeso = "Healthy"
        else if(imc <= 29.9) statusPeso = "Overweight"
        else if(imc <= 34.9) statusPeso = "Obesity I"
        else if(imc <= 40) statusPeso = "Obesity II"
        else if(imc > 40) statusPeso = "Obesity III"

        const imcTable = [
            username,
            height,
            weight,
            imc = imc.toFixed(2),
            statusPeso
        ]

        console.table(imcTable)
    }

    catch(error){
        if(error instanceof TypeError) console.log("Only numbers allowed")
    }
    finally {
        let choice = prompt("Do you want to make a new operation? [Y/N]").toUpperCase()
        if(choice === "Y") calcImc()
        else if(choice != "Y" && choice != "N") alert("Only Y/N")
        else console.log("Operation closed")

    }
   
}

calcImc()