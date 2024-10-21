//Counter App
let count = 0
    
function increment() {
    count++
    document.getElementById("count-el").innerHTML = count
}

function save() {
    let count = document.getElementById("count-el").innerHTML
    let preCount = count + " - "
    document.getElementById("preCount-el").innerHTML += preCount
}
function prank() {
    document.getElementById("prank-btn").innerHTML = "Congrats! You get nothing!"
}