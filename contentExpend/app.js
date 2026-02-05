const containerTwo = document.querySelector(".container-two");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  containerTwo.classList.toggle("toggler");
});
