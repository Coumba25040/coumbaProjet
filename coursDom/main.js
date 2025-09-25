// chercher les inputs euros et dollars
let inputEuros = document.getElementById("input-euros");
let inputDollars = document.getElementById("input-dollars");

// chercher les boutons de conversion de monnaies
const btnEuroDollar = document.getElementById("btn-euros-dollars");
const btnDollarEuro = document.getElementById("btn-dollars-euros");

// conversion Euros --> Dollars
let tauxConversion = 1.24;

btnEuroDollar.addEventListener("click", function (){
    console.log(inputEuros.value);
    console.log(inputDollars.value);
    inputDollars.value = (inputEuros.value * tauxConversion).toFixed(2);
})

// version moderne avec fonction fléchée
btnDollarEuro.addEventListener("click", () =>{
    inputEuros.value = (inputDollars.value / tauxConversion).toFixed(2);
})
