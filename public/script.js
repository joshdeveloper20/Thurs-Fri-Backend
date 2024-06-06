const menuBar = document.querySelector(".fa-bars");
const navMenu = document.querySelector("nav ul");

menuBar.addEventListener("click", () => {
  navMenu.classList.toggle("showNav");
});
