const sliders = document.querySelectorAll('input[type="range"]');

let color = document.querySelectorAll('input[type="color"]');

let output = document.getElementById("css-code");
let btnCopy = document.getElementById("copy");

sliders.forEach((slider) => {
  slider.addEventListener("input", createBox);
});

color.forEach((color) => {
  color.addEventListener("change", createBox);
});

btnCopy.addEventListener("click", () => {
  output.select();
  document.execCommand("copy");
  alert("code Copied");
});

function createBox() {
  let x = sliders[0].value;
  let y = sliders[1].value;

  let blurRadius = sliders[2].value;

  let spreadRadius = sliders[3].value;

  let shadowcolor = color[0].value;
  let boxShadow = `${x}px ${y}px ${blurRadius}px ${spreadRadius}px`;
  document.getElementById(
    "box"
  ).style.cssText = `box-shadow: ${boxShadow} ${shadowcolor}`;
  output.value = `box-shadow: ${boxShadow}`;
}

createBox();
