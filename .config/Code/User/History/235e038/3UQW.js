let dollarsInput = document.getElementById('dollars')
let eurosInput = document.getElementById('euros')
let convertEuros = document.getElementById('convertEuro')
let convertDollars = document.getElementById('convertDollars')



eurosInput.addEventListener("change", (event) => {
    convertEuros.textContent = event.target.value * 1.08 + " euros"


})

dollarsInput.addEventListener("change", (envet)=>{
    convertDollars.textContent = event.target.value
})