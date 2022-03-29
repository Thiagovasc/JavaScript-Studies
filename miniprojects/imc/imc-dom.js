function imcCalc(){
    var height = document.getElementById("height")
    var weight = document.getElementById("weight")
    var response = document.getElementById("result")

    const result = weight.value / (height.value ** 2)

    response.innerHTML = result.toFixed(2)

    classifyImc(result)
}


function classifyImc(result){
    var statsImc = document.getElementById("result-stats")
    result <= 16.9 ? statsImc.innerHTML = "Very Underweight":
    result <= 18.4 ? statsImc.innerHTML = "Undereight":
    result <= 24.9 ? statsImc.innerHTML = "Healthy":
    result <= 29.9 ? statsImc.innerHTML = "Overweight":
    result <= 34.9 ? statsImc.innerHTML = "Obesity I":
    result <= 40 ? statsImc.innerHTML = "Obesity II":
    result > 40 ? statsImc.innerHTML = "Obesity III":0
}