const btn = document.querySelector(".btn");
const author = document.getElementById("author");
const title = document.getElementById("title");
const year = document.getElementById("year");
const bookList = document.querySelector(".book-list");

btn.addEventListener("click", function (e) {
  e.preventDefault();
  if (author.value == "" && title.value == "" && year.value == "") {
    alert(`Please Fill The Form`);
  } else {
    const newRow = document.createElement("section");
    const newAuthor = document.createElement("div");
    newAuthor.innerHTML = author.value;
    newRow.appendChild(newAuthor);

    const newTitle = document.createElement("div");
    newTitle.innerHTML = title.value;
    newRow.appendChild(newTitle);

    const newYear = document.createElement("div");
    newYear.innerHTML = year.value;
    newRow.appendChild(newYear);
    bookList.appendChild(newRow);
  }
});
