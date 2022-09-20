const inputs = document.querySelectorAll(".input");
const isTriangleBtn = document.querySelector("#is-triangle");
const outputEl = document.querySelector("#output");

function calculateSumOfAngles(angle1, angle2, angle3) {
  const sumOfAngles = angle1 + angle2 + angle3;
  return sumOfAngles;
}

function isTriangle() {
  const sumOfAngles = calculateSumOfAngles(
    Number(inputs[0].value),
    Number(inputs[1].value),
    Number(inputs[2].value)
  );
  if (sumOfAngles === 180) {
    outputEl.innerText = "Yay! The angles form a triangle.";
  } else {
    outputEl.innerText = "Ohh No!! The angles don't form a triangle!";
  }
}

isTriangleBtn.addEventListener("click", isTriangle);
