const btn = document.querySelector(".btn");
btn.addEventListener("click", get);

async function get() {
  const config = {
    headers: {
      Accept: "application/json",
    },
  };

  let a = await fetch("https://icanhazdadjoke.com/", config);
  let b = await a.json();

  document.querySelector(".content").textContent = b.joke;
}
