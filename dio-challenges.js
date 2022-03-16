// Desafio formulario
let nome = "Pedro de Alcantara Francisco Antonio Joao Carlos Xavier de Paula Miguel Rafael Joaquim Jose Gonzaga Pascoal Cipriano Serafim"; let count = 0

let txt = nome.split(" ").join("")
for(let i = 0; i <= txt.length; i++){
    count += 1
}
if(count <= 80) console.log("Yes")
else console.log("NO") 

// Desafio xadrez

let [linhas, colunas] = [0, 0]

const boardColor = ((linhas + colunas) % 2 === 0 && !linhas && !colunas) ? "1":"0"; console.log(boardColor)

// Desafio blob
let food = 40; let days = 0

while (food >= 1 && food <= 1000){
    console.log(food) 
    ++days
    food = food/2
    
}console.log(days)


// Joias únicas 
const array = ["((","))","((","))",")"];
const isUnique = [];

do {
  if (value != '') {
    array.push(value);
  } else {
    break;
  }
} while (true);

for (let i = 0; i <= array.length - 1; i++) {
  if (!isUnique.includes(array[i]) && !array[i]){
    isUnique.push(array[i])
  }
}
console.log(isUnique.length)

// ((,)),(, | ((,)),((,)),(