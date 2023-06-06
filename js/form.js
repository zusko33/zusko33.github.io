const submitButton = document.getElementById("subButton");
const form = document.querySelector("[data-js='form']");
const par = document.getElementById("1par");
const par2 = document.getElementById("2par");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  const formElements = e.target.elements;
  //   console.log(formElements.yourQuestion);
  //   console.log(formElements.yourQuestion.value);
  const newCard = document.createElement("section");
  newCard.classList.add("question_card");
  newCard.classList.add("form-card");
  const newQuestion = document.createElement("p");
  const newAnswer = document.createElement("p");
  newAnswer.classList.add("answer-showed");
  const newTag = document.createElement("p");
  newTag.classList.add("tag1");
  const newButton = document.createElement("button");
  newButton.classList.add("show");
  const markButton = document.createElement("button");
  markButton.classList.add("mark");
  newCard.append(newQuestion, newAnswer, newTag, newButton, markButton);
  newQuestion.innerHTML = formElements.yourQuestion.value;
  newAnswer.innerHTML = formElements.yourAnswer.value;
  newTag.innerHTML = formElements.tag.value;
  newButton.innerHTML = "Show answer";
  markButton.innerHTML = "✔️";

  //   console.log(newCard);
  document.querySelector("main").append(newCard);
  document.querySelector("main").insertBefore(form, newCard);
  e.target.reset();
});

form.addEventListener("input", (event) => {
  event.preventDefault();
  const questionLength = yourQuestion.value.length;
  //   console.log(questionLength);
  const howManyQuestionStay = 150 - questionLength;
  const message = `${howManyQuestionStay} character${
    howManyQuestionStay > 1 ? "s" : ""
  } left`;
  par.innerText = message;
  // console.log(message);
});

form.addEventListener("input", (event) => {
  event.preventDefault();
  const answerLength = yourAnswer.value.length;
  //   console.log(questionLength);
  const howManyAnswerStay = 150 - answerLength;
  const message2 = `${howManyAnswerStay} character${
    howManyAnswerStay > 1 ? "s" : ""
  } left`;
  par2.innerText = message2;
  // console.log(message2);
});
