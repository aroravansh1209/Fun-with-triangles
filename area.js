const sides = document.querySelectorAll(".sides");
const button = document.querySelector("#area-of-triangle");
const outputEl = document.querySelector("#output")

function applyFormula(x,y){
    const areaOfTriangle = x * y 
    return areaOfTriangle
}

function calculateAreaOfTriangle(){
    const areaOfTriangle = applyFormula(Number(sides[0].value),Number(sides[1].value));
    const finalArea = (areaOfTriangle)/2
    outputEl.innerText = ("The Area Of Triangle Is : " + areaOfTriangle)
}

button.addEventListener("click", calculateAreaOfTriangle)