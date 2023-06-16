let result = document.querySelector(".result")
let keys = ""
let keyLenght = 0
let symbolCount = 0

function getNum(num){
    if (keyLenght <= 16){
        keys += num
        result.innerHTML = keys
        keyLenght++
        symbolCount = 0
    }
}
function getSymbol(sym){
    if(keys != "" && symbolCount < 1){
        keys += sym
        result.innerHTML += sym
        symbolCount++
    }
}
function calc(){
    result.innerHTML = eval(keys)
    keyLenght = 0
    symbolCount = 0
}
function clean(){
    keys = String()
    result.innerHTML = String()
    keyLenght = 0
    symbolCount = 0
}