const showButton = document.querySelector('[data-js="show-button"]');
const bookmarkButton = document.querySelector(".mark");
const answer = document.querySelector("[data-js='answer-par']");
const card = document.querySelector(".question-card");

bookmarkButton.addEventListener("click", () => {
  bookmarkButton.classList.toggle("bookmarked");
});

showButton.addEventListener("click", () => {
  answer.classList.toggle("answer-showed");
  showButton.classList.toggle("hide");
});
buttonTextToggle();

function buttonTextToggle() {
  // console.log("click");
  let button = document.getElementById("1button");
  if (button.innerHTML == "Show answer") {
    button.innerHTML = "Hide answer";
  } else {
    button.innerHTML == "Hide answer";
    button.innerHTML = "Show answer";
  }
}
