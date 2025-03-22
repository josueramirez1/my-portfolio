const hamburgerBtn = document.querySelector(".hamburger");

const hamburgerList = document.querySelector(".hamburger-list-container");

hamburgerBtn.addEventListener("click", (e) => {
  hamburgerList.classList.toggle("hidden");
});
