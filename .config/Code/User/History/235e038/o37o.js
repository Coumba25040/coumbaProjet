let dollarsInput = document.getElementById('dollars')
let eurosInput = document.getElementById('euros')
let convertEuros = document.getElementById('convertEuro')
let convertDollars = document.getElementById('convertDollars')



eurosInput.addEventListener("change", (event) => {
    let value = event.target.value
    if(value)
    convertEuros.textContent = (event.target.value * 1.08).toFixed(2) + " euros"
})

dollarsInput.addEventListener("change", (event)=>{
    convertDollars.textContent = (event.target.value / 1.08).toFixed(2) + " dollars"
})