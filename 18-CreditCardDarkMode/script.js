const container = document.querySelector(".container");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  container.classList.toggle("dark")
    ? (btn.firstElementChild.className = "far fa-moon")
    : (btn.firstElementChild.className = "far fa-sun");
});
