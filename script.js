const textBox = document.getElementById("textBox")
const toFahrenheit = document.getElementById("toFahrenheit")
const toCelsius = document.getElementById("toCelsius")
const result = document.getElementById("result")
let temp

function convert(){
    if(toFahrenheit.checked){
        let c = Number(textBox.value)
        temp = (c * 9/5) + 32
        result.textContent = temp.toFixed(1) + "°F"
    }
    else if (toCelsius.checked){
        let f = Number(textBox.value)
        temp = (f - 32) * 5/9
        result.textContent = temp.toFixed(1) + "°C"
    }
    else{
        result.textContent = "Select an Unit"
    }
}