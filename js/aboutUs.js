const toggleb = document.getElementsByClassName("bars")[0];
const awu = document.getElementById("btn");
const tirkelu = document.getElementById("btn2");
const navbarLinks = document.getElementsByClassName("navbar-links")[0];

toggleb.addEventListener("click", () => {
  navbarLinks.classList.toggle("active");
});

awu.addEventListener("click", () => {
  window.location = "awu.html";
});
tirkelu.addEventListener("click", () => {
  window.location = "tirkelu.html";
});