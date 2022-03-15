// Two ways to start an array
const arr = new Array(3, 2, 1, 0, true)


const myArr = [1, 2, 3, 4, 5, 6]
myArr.push("Hello")

const arr2 = arr.concat(myArr)
let arr3 = arr.toString()

// both are objects
/*console.log(`\narr: ${arr} e possui o tipo ${typeof(arr)}`)
console.log(`myArr: ${myArr} e possui o tipo ${typeof(myArr)}`)
console.log(`arr2: é a concatenação de arr e myArr, ${arr2} e também possui o tipo: ${typeof(arr2)}`)
console.log(arr3, typeof(arr3))*/


myArr.forEach(element => {
    console.log(element * 2)
});