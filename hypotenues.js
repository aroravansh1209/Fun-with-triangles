const sides = document.querySelectorAll(".side-length");
const button = document.querySelector("#hypotenues");
const outputEl = document.querySelector("#output");

function calculateSumOfSquares(a,b){
    const sumOfSquares = a*a + b*b;
    return sumOfSquares;
}

function calculateHypotenues(){
    const sumOfSquares = calculateSumOfSquares(Number(sides[0].value),Number(sides[1].value));
    const lengtOfHypotenues = Math.sqrt(sumOfSquares);
    outputEl.innerText = "The Length of Hypotenues is " + lengtOfHypotenues
}

button.addEventListener("click", calculateHypotenues);