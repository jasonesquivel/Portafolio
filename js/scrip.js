// En tu archivo JavaScript
const modalTrigger = document.querySelector(".modalTrigger");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("closeModal");

modalTrigger.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModal.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

window.addEventListener("keydown", function (event) {
  if (event.key === "Escape") {
    modal.style.display = "none";
  }
});