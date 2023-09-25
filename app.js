let locase1 = "I'm Muhammad Tayyab "

let convert = locase1.toUpperCase();

function loCase(){

    document.getElementById("para").innerHTML =  convert;
}
function gstCalc(){}

    
    let cost =+ document.getElementById("text").value;
    
    if(!cost){
        alert("Please Enter a Tax ")
        return;
    }
    
    cost = Number(cost)
    let taxInput =+ prompt("Entere Tax Value")
    
    let tax = cost * (taxInput /100)
    let totalCost = tax + cost

    
    totalCost =  Math.round(totalCost)
    document.getElementById("btn1").innerHTML = totalCost;
// }


let date = new Date().getFullYear()
console.log(date)

document.getElementById("year").innerHTML = date;