let inputNumberOne = document.querySelector("#one-input-js")
let inputNumberTwo = document.querySelector("#two-input-js")


const btnAdd = document.querySelector("#add-js")
const btnMinus = document.querySelector("#minus-js")
const btnDivision = document.querySelector("#division-js")
const btnMultiplication = document.querySelector("#multiplication-js")
const resulteElement = document.querySelector("#resulte-js")

inputNumberOne = Number(inputNumberOne.value)
inputNumberTwo = Number(inputNumberTwo.value)
    
const mathOperationFunc = (event,  calc = 0 )=>{
    event.addEventListener("click", ()=> {
        resulteElement.innerContext = calc
        inputNumberOne.value = 12
        inputNumberTwo.value = 15
        
    })
}


mathOperationFunc(btnAdd, (inputNumberOne + inputNumberTwo
.value))

