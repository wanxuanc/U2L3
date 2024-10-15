//Counter App
let count = document.getElementsById("count-el")
document.getElementsById("count-el").innerText = 5

function increment (){
    let count = 0
    count++
    document.getElementById("count-el").innerHTML = count
    console.log(count)
}
   