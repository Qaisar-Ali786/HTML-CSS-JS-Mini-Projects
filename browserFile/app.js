const upload = document.querySelector("input");
const image = document.querySelector(".img img");
const close = document.querySelector(".icon .close");

upload.addEventListener("change", (event) => {
  if (event.target.files && event.target.files[0]) {
    image.classList.add("active");
    close.classList.add("exit");

    image.src = URL.createObjectURL(event.target.files[0]);

    close.addEventListener("click", () => {
      image.classList.remove("active");
      close.classList.remove("exit");
    });
  }
});
