let age = 12;
let parents = false;
let ticket = true;

const travelingStatus = (age >= 18 || parents) && ticket;
const ageStatus = (age >= 18) ? "Maior de idade" : "Menor de idade"; // IF ? TRUE:FALSE

console.log(`Pode viajar: ${travelingStatus}, pois o individuo é: ${ageStatus}`);