function imcCalculator(height, weight, callback){
    let imc = weight / (height ** 2);
    if(typeof callback == "function"){
        return imcClassify(imc)
    }

}

function imcClassify(imc){
    if(imc <= 16.9) return "Muito abaixo do peso"
    else if(imc <= 18.4) return "Abaixo do peso"
    else if(imc <= 24.9) return "Peso normal"
    else if(imc <= 29.9) return "Acima do peso"
    else if(imc <= 34.9) return "Obesidade Grau I"
    else if(imc <= 40) return "Obesidade Grau II"
    else if(imc > 40) return "Obesidade Grau III"

}

console.log(imcCalculator(1.70, 77, imcClassify))